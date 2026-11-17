'use strict';

const root=document.documentElement;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=matchMedia('(hover: hover) and (pointer: fine)').matches;
const hasGsap=!!(window.gsap&&window.ScrollTrigger);
if(!hasGsap)root.classList.remove('motion');
const animate=hasGsap&&!reduce;
const desktop=matchMedia('(min-width: 1024px)');

/* ---------- Live corner readouts ---------- */
const clock=$('#clock'),scrollPct=$('#scroll-pct');
const timeFmt=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Istanbul',hour:'2-digit',minute:'2-digit',second:'2-digit'});
const tickClock=()=>{clock.textContent=timeFmt.format(new Date());};
tickClock();setInterval(tickClock,1000);
const pad=(n,len=4)=>String(Math.max(0,Math.round(n))).padStart(len,'0');
const updateScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;scrollPct.textContent=pad(max>0?scrollY/max*100:0,3);};
addEventListener('scroll',updateScroll,{passive:true});updateScroll();

/* ---------- Smooth scroll (Lenis driven by the GSAP ticker so ScrollTrigger stays in sync) ---------- */
let lenis=null;
if(animate&&window.Lenis){
  lenis=new Lenis({lerp:.09,wheelMultiplier:1});
  lenis.on('scroll',ScrollTrigger.update);
  gsap.ticker.add(time=>lenis.raf(time*1000));
  gsap.ticker.lagSmoothing(0);
  $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=$(a.getAttribute('href'));if(!target)return;e.preventDefault();lenis.scrollTo(target,{duration:1.4});}));
}

/* ---------- Choreography ---------- */
if(animate){
  gsap.registerPlugin(ScrollTrigger);
  gsap.timeline({defaults:{ease:'power3.out'}})
    .to('#hero-schema [data-draw]',{strokeDashoffset:0,duration:2.2,ease:'power2.inOut',stagger:.12},0)
    .to('.display .line>*',{y:0,duration:1.3,ease:'expo.out',stagger:.14},.35)
    .to('#hero-schema .dims text,#hero-schema .eye,#hero-schema .arm circle',{opacity:1,duration:.8,stagger:.06},1.4)
    .to('[data-intro]',{opacity:1,duration:.9,stagger:.08},.9);

  // Background construction draws across the full document scroll.
  gsap.to('[data-scroll-draw]',{strokeDashoffset:0,ease:'none',stagger:.15,
    scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:1.2,refreshPriority:-1}});
  // Hero schematic recedes as the cover scrolls away.
  gsap.to('#hero-schema',{yPercent:-12,opacity:.35,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
}

/* ---------- Pointer: coordinates, schematic parallax, compass arm ---------- */
const coordX=$('#coord-x'),coordY=$('#coord-y'),coordA=$('#coord-a'),schema=$('#hero-schema'),arm=$('#arm');
let armAngle=0;
if(finePointer){
  const tilt=animate?{r:gsap.quickTo(schema,'rotation',{duration:1.2,ease:'power3.out'}),x:gsap.quickTo(schema,'x',{duration:1.2,ease:'power3.out'}),y:gsap.quickTo(schema,'y',{duration:1.2,ease:'power3.out'})}:null;
  const turn=hasGsap?gsap.quickTo(arm,'rotation',{duration:reduce?0:.9,ease:'power3.out'}):null;
  if(hasGsap)gsap.set(arm,{svgOrigin:'644 398'});
  addEventListener('pointermove',e=>{
    coordX.textContent=pad(e.clientX);coordY.textContent=pad(e.clientY);
    if(tilt){const nx=e.clientX/innerWidth-.5,ny=e.clientY/innerHeight-.5;tilt.r(nx*2.4);tilt.x(nx*-22);tilt.y(ny*-14);}
    if(!turn)return;
    // Point the arm from the spiral eye toward the cursor, unwrapping so it never spins the long way round.
    const eye=schema.querySelector('.eye circle').getBoundingClientRect();
    const target=Math.atan2(e.clientY-(eye.top+eye.height/2),e.clientX-(eye.left+eye.width/2))*180/Math.PI+90;
    armAngle+=((target-armAngle)%360+540)%360-180;
    turn(armAngle);
    coordA.textContent=(((armAngle%360)+360)%360).toFixed(1).padStart(5,'0');
  },{passive:true});
}

/* ---------- Optical lens cursor ---------- */
if(finePointer&&hasGsap){
  root.classList.add('has-lens');
  const lens=$('#lens'),REST=16,ACTIVE=reduce?90:96;
  const state={x:innerWidth/2,y:innerHeight/2,r:REST};
  const follow={x:gsap.quickTo(state,'x',{duration:reduce?0:.32,ease:'power3.out'}),y:gsap.quickTo(state,'y',{duration:reduce?0:.32,ease:'power3.out'})};
  let active=null,revealing=null;
  addEventListener('pointermove',e=>{follow.x(e.clientX);follow.y(e.clientY);
    lens.classList.toggle('is-off',!!(e.target.closest&&e.target.closest('[data-native-cursor]')));},{passive:true});
  document.addEventListener('pointerleave',()=>gsap.to(lens,{opacity:0,duration:.2}));
  document.addEventListener('pointerenter',()=>gsap.to(lens,{opacity:1,duration:.2}));

  $$('[data-lens]').forEach(el=>{
    el.addEventListener('pointerenter',()=>{
      if(!desktop.matches)return; // lens is hidden below 1024px, so never reveal the x-ray without the glass
      if(revealing&&revealing!==el)revealing.style.setProperty('--lr','0px');
      active=revealing=el;lens.classList.add('is-active');
      gsap.to(state,{r:ACTIVE,duration:reduce?0:.55,ease:'power3.out',overwrite:'auto'});
    });
    el.addEventListener('pointerleave',()=>{
      active=null;lens.classList.remove('is-active');
      gsap.to(state,{r:REST,duration:reduce?0:.4,ease:'power3.inOut',overwrite:'auto',onComplete:()=>{if(!active&&revealing){revealing.style.setProperty('--lr','0px');revealing=null;}}});
    });
  });

  // One ticker writes the lens geometry and the clip circle together, so the reveal never lags the glass.
  gsap.ticker.add(()=>{
    const d=state.r*2;
    lens.style.transform=`translate3d(${state.x-state.r}px,${state.y-state.r}px,0)`;
    lens.style.width=lens.style.height=`${d}px`;
    if(!revealing)return;
    const box=revealing.querySelector('.xray').getBoundingClientRect();
    revealing.style.setProperty('--lx',`${state.x-box.left}px`);
    revealing.style.setProperty('--ly',`${state.y-box.top}px`);
    revealing.style.setProperty('--lr',`${Math.max(0,state.r-1)}px`);
  });
}

/* ---------- FIG. 01: case studies from projects.js ---------- */
const copy={
  en:{worksTitle:'Case studies',layers:['Observation','Deduction','Analysis','Resolution'],flow:'Architecture flow',switchLang:'Switch to Turkish',
    toolsetTitle:'Toolset',toolsLabel:'Toolset categories',archiveTitle:'Experience & record',contactTitle:'Contact',backTop:'Back to top ↑',
    contactText:'Open to backend internships and engineering collaboration on .NET services, cloud infrastructure and DevOps.',
    themeLight:'LIGHT',themeDark:'DARK',toDark:'Switch to dark theme',toLight:'Switch to light theme',caseLink:'Eco-Agent case study →'},
  tr:{worksTitle:'Vaka çalışmaları',layers:['Gözlem','Çıkarım','Analiz','Sonuç'],flow:'Mimari akış',switchLang:'İngilizceye geç',
    toolsetTitle:'Araç kutusu',toolsLabel:'Araç kategorileri',archiveTitle:'Deneyim ve kayıtlar',contactTitle:'Bana ulaşın',backTop:'Başa dön ↑',
    contactText:'.NET servisleri, bulut altyapısı ve DevOps alanlarında backend stajlarına ve mühendislik iş birliklerine açığım.',
    themeLight:'AÇIK',themeDark:'KOYU',toDark:'Koyu temaya geç',toLight:'Açık temaya geç',caseLink:'Eco-Agent vaka çalışması →'}
};

/* FIG. 02 data */
const tools=[
  {name:{en:'Languages',tr:'Diller'},items:['C#','Python','Java','JavaScript','Dart','SQL'],
   text:{en:'Languages used across backend services, data work, mobile clients and interfaces.',tr:'Backend servislerinde, veri işlerinde, mobil istemcilerde ve arayüzlerde kullandığım diller.'}},
  {name:{en:'Frameworks',tr:'Framework’ler'},items:['ASP.NET Core MVC','ASP.NET Core Web API','EF Core','Dapper','Blazor Server','React','Tailwind CSS','PyTorch'],
   text:{en:'Server-rendered MVC, REST APIs, ORM and micro-ORM data access, component-based UIs and model training.',tr:'Sunucu taraflı MVC, REST API’ler, ORM ve micro-ORM veri erişimi, bileşen tabanlı arayüzler ve model eğitimi.'}},
  {name:{en:'DevOps & Tools',tr:'DevOps & Araçlar'},items:['Docker','Docker Compose','Jenkins CI/CD','Git','Linux','Postman','Swagger'],
   text:{en:'Containerization, build automation, version control, and API testing and documentation.',tr:'Container’laştırma, derleme otomasyonu, sürüm kontrolü, API testi ve dokümantasyonu.'}},
  {name:{en:'Databases & Architecture',tr:'Veritabanı & Mimari'},items:['PostgreSQL','MS SQL Server','Clean Architecture','CQRS with MediatR'],
   text:{en:'Relational databases and the patterns used to keep responsibilities separated and code testable.',tr:'İlişkisel veritabanları ve sorumlulukları ayrık, kodu test edilebilir tutmak için uyguladığım mimari desenler.'}}
];
let activeTool=0;

/* FIG. 03 data: {org, sub?, role, when, where, desc, tags?, link?} per language */
const ledger={
  en:[
    {title:'Professional experience',entries:[
      {org:'Toy Sisterhood Association',sub:'Oyuncak Kardeşliği Derneği',role:'Volunteer Full-Stack Developer',when:'2026 – Present',where:'Remote / Ankara',desc:'Prepared the requirements analysis and technical architecture documentation for the association’s mobile app project, and designed the children’s theatre ticketing and dynamic toy-inventory categorization modules.',tags:['Requirements analysis','Architecture docs','Mobile']},
      {org:'MYUNİ',role:'Full-Stack Developer Intern',when:'Apr – Oct 2026',where:'Remote / Ankara',desc:'Developed the interface and service integration for the digital content showcase (Dark Science magazine) on the collection page, and built responsive UI components with modern web standards.',tags:['Full-stack','Responsive UI','Service integration']},
      {org:'ARD Bilişim Yazılım Teknolojileri',role:'Software Engineering Intern · Two terms',when:'2025 – 2026',where:'Ankara',desc:'Designed and developed modules for a corporate Expense Tracking System with ASP.NET Core MVC and N-Tier Architecture. Optimized the data-access layer with Dapper and SQL/LINQ, including reporting queries on the Northwind dataset; wrote edge-case unit test scenarios; and took part in daily stand-ups and sprint deliveries with an Agile/Scrum team. Returned for a second term to work on infrastructure improvements and refactoring.',tags:['ASP.NET Core MVC','N-Tier','Dapper','SQL / LINQ','Unit testing','Scrum']},
      {org:'Ministry of Environment, Urbanization and Climate Change',role:'Volunteer Intern',when:'Jul – Sep 2024',where:'Ankara',desc:'Observed the software development lifecycle of the ministry’s Java and AI teams and its public-sector IT integrations. Received technical training on network infrastructure, cloud systems, and security protocols.',tags:['SDLC','Networking','Security']}]},
    {title:'Competitions & hackathons',entries:[
      {org:'IBM Hackathon',role:'Eco-Agent',when:'Jan 2026',where:'Hackathon',desc:'Built Eco-Agent, an Agentic RAG event discovery assistant using watsonx.ai, Crawl4AI, and Streamlit.',link:true},
      {org:'Huawei ICT Competition',role:'Cloud Track',when:'2026',where:'Competition',desc:'Participant in the Cloud Track, with a Cloud Track certificate.'},
      {org:'Emlak Konut & Ministry Ideathon',role:'Participant',when:'2026',where:'Ideathon',desc:'Took part with a web and real-estate solution prototype.'},
      {org:'Garanti BBVA — “Genç Fikrinle Parla”',role:'Participant',when:'2026',where:'Competition'}]},
    {title:'Communities & volunteering',entries:[
      {org:'TEDU GDG',sub:'Google Developer Student Club',role:'Event organizer · Active member',when:'Oct 2024 – Present',where:'Ankara',desc:'Led the organization of “Network 101”, attended by ministry representatives, and prepared and presented materials on firewalls, NICs, and switches.'},
      {org:'TEDU AWS Cloud Club',role:'Active member',when:'2026 – Present',where:'Ankara',desc:'Active community member.'},
      {org:'Erasmus+ European Solidarity Corps',role:'International volunteer',when:'2025',where:'Spain',desc:'Took part in social responsibility projects with a multinational team.'}]}
  ],
  tr:[
    {title:'Profesyonel deneyim',entries:[
      {org:'Oyuncak Kardeşliği Derneği',role:'Gönüllü Full-Stack Developer',when:'2026 – Devam ediyor',where:'Uzaktan / Ankara',desc:'Dernek operasyonlarına yönelik mobil uygulama projesinin gereksinim analizini ve teknik mimari dokümantasyonunu hazırladım; çocuk tiyatrosu biletleme ve envanterdeki oyuncakların dinamik kategorizasyonu modüllerini kurguladım.',tags:['Gereksinim analizi','Mimari dokümantasyon','Mobil']},
      {org:'MYUNİ',role:'Full-Stack Developer Stajyeri',when:'Nisan – Ekim 2026',where:'Uzaktan / Ankara',desc:'Koleksiyon sayfasındaki dijital içerik vitrininin (Dark Science dergisi) arayüzünü ve servis entegrasyonunu geliştirdim, modern web standartlarıyla duyarlı (responsive) arayüz bileşenleri kodladım.',tags:['Full-stack','Responsive UI','Servis entegrasyonu']},
      {org:'ARD Bilişim Yazılım Teknolojileri',role:'Yazılım Mühendisliği Stajyeri · 2 dönem',when:'2025 – 2026',where:'Ankara',desc:'ASP.NET Core MVC ve N-Katmanlı Mimari ile kurumsal Gider Takip Sistemi modüllerini tasarlayıp geliştirdim. Dapper ve SQL/LINQ ile veri erişim katmanını optimize ettim ve Northwind veri kümesi üzerinde raporlama sorguları yazdım; edge-case birim test senaryoları kurguladım; Agile/Scrum ekibiyle günlük stand-up ve sprint teslimatlarına katıldım. İkinci staj dönemimde altyapı iyileştirme ve refactoring çalışmalarını yürüttüm.',tags:['ASP.NET Core MVC','N-Katmanlı','Dapper','SQL / LINQ','Birim test','Scrum']},
      {org:'T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı',role:'Gönüllü Stajyer',when:'Temmuz – Eylül 2024',where:'Ankara',desc:'Bakanlığın Java ve yapay zekâ ekiplerinin yazılım geliştirme süreçlerini ve kamu bilişim entegrasyonlarını gözlemledim. Ağ altyapısı, bulut sistemleri ve güvenlik protokolleri üzerine teknik eğitimler aldım.',tags:['SDLC','Ağ altyapısı','Güvenlik']}]},
    {title:'Yarışmalar & hackathon’lar',entries:[
      {org:'IBM Hackathon',role:'Eco-Agent',when:'Ocak 2026',where:'Hackathon',desc:'watsonx.ai, Crawl4AI ve Streamlit ile Agentic RAG tabanlı etkinlik keşif asistanı Eco-Agent’ı geliştirdim.',link:true},
      {org:'Huawei ICT Competition',role:'Cloud Track',when:'2026',where:'Yarışma',desc:'Cloud Track katılımcısı; Cloud Track sertifikası.'},
      {org:'Emlak Konut & Bakanlık Ideathonu',role:'Katılımcı',when:'2026',where:'Ideathon',desc:'Web ve gayrimenkul çözüm prototipiyle katıldım.'},
      {org:'Garanti BBVA — “Genç Fikrinle Parla”',role:'Katılımcı',when:'2026',where:'Yarışma'}]},
    {title:'Topluluklar & gönüllülük',entries:[
      {org:'TEDU GDG',sub:'Google Developer Student Club',role:'Etkinlik organizatörü · Aktif üye',when:'Ekim 2024 – Devam ediyor',where:'Ankara',desc:'Bakanlık temsilcilerinin katıldığı “Network 101” etkinliğinin organizasyonunu yönettim; firewall, NIC ve switch konulu sunum materyallerini hazırlayıp sundum.'},
      {org:'TEDU AWS Cloud Club',role:'Aktif üye',when:'2026 – Devam ediyor',where:'Ankara',desc:'Aktif topluluk üyesi.'},
      {org:'Erasmus+ European Solidarity Corps',role:'Uluslararası gönüllü',when:'2025',where:'İspanya',desc:'Çok uluslu bir ekiple sosyal sorumluluk projelerinde yer aldım.'}]}
  ]
};

function renderTools(){
  const tabs=$('#tool-tabs');
  tabs.setAttribute('aria-label',copy[lang].toolsLabel);
  tabs.innerHTML=tools.map((t,i)=>`<button class="tool-tab" id="tool-tab-${i}" role="tab" type="button" aria-controls="tool-panel" aria-selected="${i===activeTool}" tabindex="${i===activeTool?0:-1}" data-tool="${i}"><span class="mono-label">${pad2(i+1)}</span>${t.name[lang]}</button>`).join('');
  renderToolPanel(false);
}
function renderToolPanel(animateIn=true){
  const t=tools[activeTool],panel=$('#tool-panel');
  panel.setAttribute('aria-labelledby',`tool-tab-${activeTool}`);
  panel.innerHTML=`<h3><em>${pad2(activeTool+1)}</em>${t.name[lang]}</h3><p>${t.text[lang]}</p><ul class="tool-grid">${t.items.map((item,j)=>`<li><span class="mono-label">${pad2(activeTool+1)}.${j+1}</span><strong>${item}</strong></li>`).join('')}</ul>`;
  if(animateIn&&animate)gsap.from(panel.querySelectorAll('h3,p,.tool-grid li'),{y:14,opacity:0,duration:.5,ease:'power3.out',stagger:.035,overwrite:true});
}
function selectTool(i,focus){
  activeTool=i;
  $$('.tool-tab').forEach((b,j)=>{b.setAttribute('aria-selected',String(j===i));b.tabIndex=j===i?0:-1;});
  if(focus)$(`#tool-tab-${i}`).focus();
  renderToolPanel();
}
$('#tool-tabs').addEventListener('click',e=>{const b=e.target.closest('[data-tool]');if(b)selectTool(+b.dataset.tool);});
$('#tool-tabs').addEventListener('keydown',e=>{
  const n=tools.length,map={ArrowDown:1,ArrowRight:1,ArrowUp:-1,ArrowLeft:-1};
  let next=e.key in map?(activeTool+map[e.key]+n)%n:e.key==='Home'?0:e.key==='End'?n-1:null;
  if(next===null)return;e.preventDefault();selectTool(next,true);
});

function renderLedger(){
  $('#ledger').innerHTML=ledger[lang].map((g,gi)=>`<section class="ledger-group" aria-labelledby="ledger-${gi}"><h3 class="mono-label" id="ledger-${gi}"><span>03.${gi+1} — ${g.title}</span><span>${pad2(g.entries.length)}</span></h3><ol class="ledger">${
    g.entries.map((e,ei)=>`<li class="entry"><span class="entry-no mono-label">03.${gi+1}.${ei+1}</span><p class="entry-when mono-label"><b>${e.when}</b><span>${e.where}</span></p><div><h4>${e.org}${e.sub?`<small>${e.sub}</small>`:''}</h4><p class="entry-role">${e.role}</p>${e.desc?`<p class="entry-desc">${e.desc}</p>`:''}${e.tags?`<ul class="case-tags">${e.tags.map(t=>`<li>${t}</li>`).join('')}</ul>`:''}${e.link?`<a class="entry-link" href="#projects-section">${copy[lang].caseLink}</a>`:''}</div></li>`).join('')
  }</ol></section>`).join('');
}

/* Theme: circular ink-wash reveal from the toggle via the View Transitions API, instant swap otherwise. */
const themeBtn=$('#theme-toggle');
function syncTheme(){
  const dark=root.dataset.theme==='dark',c=copy[lang];
  themeBtn.setAttribute('aria-pressed',String(dark));
  themeBtn.setAttribute('aria-label',dark?c.toLight:c.toDark);
  $('#theme-label').textContent=dark?c.themeDark:c.themeLight;
  $('meta[name="theme-color"]').content=getComputedStyle(root).getPropertyValue('--paper').trim();
}
themeBtn.addEventListener('click',()=>{
  const next=root.dataset.theme==='dark'?'light':'dark';
  const apply=()=>{root.dataset.theme=next;syncTheme();try{localStorage.setItem('codex-theme',next);}catch{}};
  if(!document.startViewTransition||reduce){apply();return;}
  const r=themeBtn.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2,radius=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
  document.startViewTransition(apply).ready.then(()=>root.animate({clipPath:[`circle(0px at ${x}px ${y}px)`,`circle(${radius}px at ${x}px ${y}px)`]},{duration:800,easing:'cubic-bezier(.22,1,.36,1)',pseudoElement:'::view-transition-new(root)'}));
});
const works=$('#projects-section'),track=$('#works-track'),viewport=$('.works-viewport'),entries=Object.entries(projects);
let lang='en',worksMotion=null;
try{const saved=localStorage.getItem('berre-language');if(saved==='tr'||saved==='en')lang=saved;}catch{} // shared with index.html
const pad2=n=>String(n).padStart(2,'0');

function renderWorks(){
  const c=copy[lang];
  track.innerHTML=entries.map(([key,p],i)=>{
    const d=p[lang];
    return `<li class="case" id="case-${key}"><article aria-labelledby="case-${key}-title">
      <header class="case-head">
        <p class="mono-label">${d.category}</p>
        <span class="case-num" aria-hidden="true">${pad2(i+1)}</span>
        <h3 class="case-title" id="case-${key}-title">${p.name}</h3>
        <p class="case-summary">${d.summary}</p>
        <div class="case-flow"><p class="mono-label">FIG. 01.${i+1} — ${c.flow}</p><ol class="flow-steps">${d.flow.map(step=>`<li>${step}</li>`).join('')}</ol></div>
        <ul class="case-tags">${p.tags.map(tag=>`<li>${tag}</li>`).join('')}</ul>
        <a class="case-cta" href="${p.url}" target="_blank" rel="noopener noreferrer">${d.cta} <span aria-hidden="true">↗</span></a>
      </header>
      <div class="case-layers">${d.sections.map(([title,body],j)=>`<details class="layer"${j===0?' data-first':''}><summary><span class="mono-label"><span>${pad2(j+1)}</span> · ${c.layers[j]||''}</span><h4>${title}</h4></summary><p>${body}</p></details>`).join('')}</div>
      <p class="case-note">${d.note}</p>
    </article></li>`;
  }).join('');
  $('#works-total').textContent=pad2(entries.length);
  syncLayers();
}
// Desktop shows every layer; below 1024px only the first starts open.
function syncLayers(){$$('.layer').forEach(el=>{el.open=desktop.matches||el.hasAttribute('data-first');});}
desktop.addEventListener('change',()=>{syncLayers();if(hasGsap)ScrollTrigger.refresh();});
track.addEventListener('click',e=>{if(desktop.matches&&e.target.closest('summary'))e.preventDefault();});

function buildWorksMotion(){
  if(!hasGsap)return;
  gsap.registerPlugin(ScrollTrigger);
  worksMotion=gsap.matchMedia();
  // Pinned horizontal track: wide screens with a real pointer only; touch and reduced motion keep native vertical scroll.
  worksMotion.add('(min-width: 1024px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',()=>{
    works.classList.add('is-horizontal');
    const index=$('#works-index'),bar=$('#works-progress'),n=entries.length;
    const mark=pr=>{bar.style.transform=`scaleX(${pr})`;index.textContent=pad2(Math.min(n,Math.floor(pr*n)+1));};
    const distance=()=>Math.max(0,track.scrollWidth-viewport.clientWidth);
    const slide=gsap.to(track,{x:()=>-distance(),ease:'none',scrollTrigger:{trigger:works,start:'top top',end:()=>`+=${distance()}`,pin:true,scrub:1,invalidateOnRefresh:true,
      onUpdate:self=>mark(self.progress),onRefresh:self=>mark(self.progress)}});
    $$('.flow-steps').forEach(ol=>gsap.fromTo(ol,{'--thread':0},{'--thread':1,ease:'none',
      scrollTrigger:{trigger:ol,containerAnimation:slide,start:'left 90%',end:'left 45%',scrub:true}}));
    return()=>works.classList.remove('is-horizontal');
  });
  worksMotion.add('(max-width: 1023px) and (prefers-reduced-motion: no-preference)',()=>{
    $$('.case').forEach(card=>gsap.from(card,{y:28,opacity:0,duration:.8,ease:'power3.out',scrollTrigger:{trigger:card,start:'top 88%',once:true}}));
  });
}

function setLang(next){
  lang=next;$$('#projects-section,#toolset,#archive,#contact,.codex-foot').forEach(el=>{el.lang=next;}); // hero copy is English-only for now
  $$('[data-i18n]').forEach(el=>{el.textContent=copy[next][el.dataset.i18n];});
  $$('#lang-toggle [data-lang]').forEach(el=>el.classList.toggle('on',el.dataset.lang===next));
  $('#lang-toggle').setAttribute('aria-label',copy[next].switchLang);
  try{localStorage.setItem('berre-language',next);}catch{}
  // Reverting removes the pin spacer and shortens the page, so keep the reader's scroll position across the rebuild.
  const y=scrollY;
  if(worksMotion)worksMotion.revert();
  renderWorks();renderTools();renderLedger();syncTheme();buildWorksMotion();
  if(hasGsap){ScrollTrigger.refresh();if(lenis){lenis.resize();lenis.scrollTo(y,{immediate:true,force:true});}else scrollTo(0,y);}
}
$('#lang-toggle').addEventListener('click',()=>setLang(lang==='en'?'tr':'en'));
setLang(lang);
$('#foot-year').textContent=String(new Date().getFullYear());

// Archive entries settle in as they enter; created once, so a language re-render simply shows them.
if(animate){gsap.set('.entry',{y:22,opacity:0});ScrollTrigger.batch('.entry',{start:'top 92%',once:true,onEnter:batch=>gsap.to(batch,{y:0,opacity:1,duration:.7,ease:'power3.out',stagger:.07})});}

if(document.fonts&&hasGsap)document.fonts.ready.then(()=>ScrollTrigger.refresh());
