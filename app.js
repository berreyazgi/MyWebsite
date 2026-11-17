'use strict';

const translations={
 en:{
  skip:'Skip to content',navWork:'Projects',navAbout:'About',navExperience:'Experience',navCommunity:'Community',navContact:'Contact',
  heroBadge:'Open to internships &amp; collaboration',heroRole:'Software engineering student · Backend &amp; distributed systems',
  heroDescription:'Final-year Software Engineering student at TED University. I build backend services with C# and ASP.NET Core, applying Clean Architecture, CQRS and relational data modeling. Currently working with Docker, CI/CD pipelines and cloud deployment.',
  heroPrimary:'View projects',metaLocation:'Location',metaStack:'Primary stack',metaFocus:'Exploring',
  workEyebrow:'Projects',workTitle:'Selected projects',workNote:'Repositories with architecture notes, stack and current status.',
  inDevelopment:'In development',projectDetails:'Architecture notes',ecoDate:'Jan 2026',stackTitle:'Stack',
  stackLanguages:'Languages',stackFrameworks:'Frameworks',stackDevops:'DevOps &amp; tools',stackData:'Data &amp; architecture',
  aboutEyebrow:'About',aboutTitle:'Profile',
  aboutDescription:'I’m a final-year Software Engineering student at TED University, focused on backend development, software architecture, and distributed systems. I’ve gained professional experience through internships at ARD Bilişim and MYUNI, and I contribute to Oyuncak Kardeşliği as a volunteer software developer.',
  aboutStack:'Most of my work is in C# and ASP.NET Core, using Clean Architecture, CQRS, Dapper, and EF Core, with Docker, Jenkins, and CI/CD pipelines to build and ship it. I’m currently exploring Agentic AI, RAG, and cloud technologies.',
  eduLabel:'Education',studentFact:'Software Engineering · Final year',graduationFact:'Aug 2022 – Jun 2027 (expected)',nowLabel:'Current role',
  metricRoles:'internship &amp; volunteer roles',metricProjects:'documented projects',metricCommunity:'competitions &amp; communities',
  experienceEyebrow:'Experience',experienceTitle:'Work history',experienceNote:'Internships and volunteer engineering work.',
  expMyuniPeriod:'Apr – Oct 2026',expMyuniLocation:'Remote / Ankara',expMyuniRole:'Fullstack Developer Intern',expMyuniDesc:'Developed the interface and service integration for the digital content showcase (Dark Science magazine) on the collection page, and built responsive UI components with modern web standards.',
  expArdPeriod:'2025 – 2026',expArdLocation:'Ankara, Türkiye',expArdRole:'Software Engineering Intern · Two terms',expArdDesc:'Designed and developed modules for a corporate Expense Tracking System with ASP.NET Core MVC and N-Tier Architecture. Optimized the data-access layer with Dapper and SQL/LINQ, including reporting queries on the Northwind dataset; wrote edge-case unit test scenarios; and took part in daily stand-ups and sprint deliveries with an Agile/Scrum team. Returned for a second term to work on infrastructure improvements and refactoring.',
  expOyuncakPeriod:'2026 – Present',expOyuncakLocation:'Remote / Ankara',expOyuncakRole:'Volunteer Fullstack Developer',expOyuncakDesc:'Prepared the requirements analysis and technical architecture documentation for the association’s mobile app project, and designed the children’s theatre ticketing and dynamic toy-inventory categorization modules.',
  expMinistryPeriod:'Jul – Sep 2024',expMinistryLocation:'Ankara, Türkiye',expMinistryRole:'Volunteer Intern',ministryName:'Ministry of Environment, Urbanization and Climate Change',expMinistryDesc:'Observed the software development lifecycle of the ministry’s Java and AI teams and its public-sector IT integrations. Received technical training on network infrastructure, cloud systems, and security protocols.',
  communityEyebrow:'Community',communityTitle:'Competitions &amp; communities',kindHackathon:'Hackathon',kindCompetition:'Competition',kindCommunity:'Community',kindVolunteering:'Volunteering',seeEco:'Eco-Agent notes',
  comIbmDate:'Jan 2026',comIbmDesc:'Built Eco-Agent, an Agentic RAG event discovery assistant using watsonx.ai, Crawl4AI, and Streamlit.',
  comHuaweiDate:'2026',comHuaweiDesc:'Participant in the Cloud Track, with a Cloud Track certificate.',
  comEmlakDate:'2026',comEmlakDesc:'Took part with a web and real-estate solution prototype.',
  comGdgDate:'Oct 2024 – Present',comGdgDesc:'Event organizer and active member. Led the organization of “Network 101”, attended by ministry representatives, and prepared and presented materials on firewalls, NICs, and switches.',
  comAwsDate:'2026 – Present',comAwsDesc:'Active community member.',
  comEscDate:'2025',comEscDesc:'International volunteer in Spain, taking part in social responsibility projects with a multinational team.',
  contactEyebrow:'Contact',contactTitle:'Get in touch',contactText:'Open to internships and collaboration in .NET backend development, cloud and DevOps.',
  footerNote:'Static HTML · CSS · Motion',backTop:'Back to top ↑',projectNotes:'Architecture notes',closeProject:'Close',viewImage:'Open full-size image',
  switchLang:'Switch to Turkish',title:'Berre Yazgı — Software Engineer',
  description:'Berre Yazgı — software engineering student at TED University. Backend development with C# and ASP.NET Core, software architecture, distributed systems.'
 },
 tr:{
  skip:'İçeriğe geç',navWork:'Projeler',navAbout:'Hakkımda',navExperience:'Deneyim',navCommunity:'Topluluk',navContact:'İletişim',
  heroBadge:'Staj ve iş birliğine açık',heroRole:'Yazılım mühendisliği öğrencisi · Backend ve dağıtık sistemler',
  heroDescription:'TED Üniversitesi’nde son sınıf Yazılım Mühendisliği öğrencisiyim. C# ve ASP.NET Core ile backend servisleri geliştiriyor; Clean Architecture, CQRS ve ilişkisel veri modellemesi uyguluyorum. Şu anda Docker, CI/CD hatları ve bulut dağıtımı üzerinde çalışıyorum.',
  heroPrimary:'Projeleri incele',metaLocation:'Konum',metaStack:'Ana teknoloji',metaFocus:'Çalıştığım alanlar',
  workEyebrow:'Projeler',workTitle:'Seçili projeler',workNote:'Mimari notları, teknoloji yığını ve güncel durumuyla depolar.',
  inDevelopment:'Geliştiriliyor',projectDetails:'Mimari notlar',ecoDate:'Ocak 2026',stackTitle:'Teknoloji yığını',
  stackLanguages:'Diller',stackFrameworks:'Framework’ler',stackDevops:'DevOps &amp; araçlar',stackData:'Veritabanı &amp; mimari',
  aboutEyebrow:'Hakkımda',aboutTitle:'Profil',
  aboutDescription:'TED Üniversitesi’nde son sınıf Yazılım Mühendisliği öğrencisiyim; backend geliştirme, yazılım mimarisi ve dağıtık sistemlere odaklanıyorum. ARD Bilişim ve MYUNI’deki stajlarımda profesyonel deneyim kazandım; Oyuncak Kardeşliği Derneği’nde gönüllü yazılım geliştirici olarak katkı sağlıyorum.',
  aboutStack:'Çalışmalarımın çoğunu C# ve ASP.NET Core ile; Clean Architecture, CQRS, Dapper ve EF Core kullanarak geliştiriyor, Docker, Jenkins ve CI/CD hatlarıyla derleyip yayına alıyorum. Şu sıralar Agentic AI, RAG ve bulut teknolojileri üzerinde çalışıyorum.',
  eduLabel:'Eğitim',studentFact:'Yazılım Mühendisliği · Son sınıf',graduationFact:'Ağustos 2022 – Haziran 2027 (beklenen)',nowLabel:'Güncel rol',
  metricRoles:'staj ve gönüllü rol',metricProjects:'belgelenmiş proje',metricCommunity:'yarışma ve topluluk',
  experienceEyebrow:'Deneyim',experienceTitle:'İş deneyimi',experienceNote:'Stajlar ve gönüllü yazılım çalışmaları.',
  expMyuniPeriod:'Nisan – Ekim 2026',expMyuniLocation:'Uzaktan / Ankara',expMyuniRole:'Fullstack Developer Stajyeri',expMyuniDesc:'Koleksiyon sayfasındaki dijital içerik vitrininin (Dark Science dergisi) arayüzünü ve servis entegrasyonunu geliştirdim, modern web standartlarıyla duyarlı (responsive) arayüz bileşenleri kodladım.',
  expArdPeriod:'2025 – 2026',expArdLocation:'Ankara, Türkiye',expArdRole:'Yazılım Mühendisliği Stajyeri · 2 dönem',expArdDesc:'ASP.NET Core MVC ve N-Katmanlı Mimari ile kurumsal Gider Takip Sistemi modüllerini tasarlayıp geliştirdim. Dapper ve SQL/LINQ ile veri erişim katmanını optimize ettim ve Northwind veri kümesi üzerinde raporlama sorguları yazdım; edge-case birim test senaryoları kurguladım; Agile/Scrum ekibiyle günlük stand-up ve sprint teslimatlarına katıldım. İkinci staj dönemimde ekibe devam ederek altyapı iyileştirme ve refactoring çalışmalarını yürüttüm.',
  expOyuncakPeriod:'2026 – Devam ediyor',expOyuncakLocation:'Uzaktan / Ankara',expOyuncakRole:'Gönüllü Fullstack Developer',expOyuncakDesc:'Dernek operasyonlarına yönelik mobil uygulama projesinin gereksinim analizini ve teknik mimari dokümantasyonunu hazırladım; çocuk tiyatrosu biletleme ve envanterdeki oyuncakların dinamik kategorizasyonu modüllerini kurguladım.',
  expMinistryPeriod:'Temmuz – Eylül 2024',expMinistryLocation:'Ankara, Türkiye',expMinistryRole:'Gönüllü Stajyer',ministryName:'T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı',expMinistryDesc:'Bakanlığın Java ve yapay zekâ ekiplerinin yazılım geliştirme süreçlerini ve kamu bilişim entegrasyonlarını gözlemledim. Ağ altyapısı, bulut sistemleri ve güvenlik protokolleri üzerine teknik eğitimler aldım.',
  communityEyebrow:'Topluluk',communityTitle:'Yarışmalar ve topluluklar',kindHackathon:'Hackathon',kindCompetition:'Yarışma',kindCommunity:'Topluluk',kindVolunteering:'Gönüllülük',seeEco:'Eco-Agent notları',
  comIbmDate:'Ocak 2026',comIbmDesc:'watsonx.ai, Crawl4AI ve Streamlit ile Agentic RAG tabanlı etkinlik keşif asistanı Eco-Agent’ı geliştirdim.',
  comHuaweiDate:'2026',comHuaweiDesc:'Cloud Track katılımcısı; Cloud Track sertifikası.',
  comEmlakDate:'2026',comEmlakDesc:'Web ve gayrimenkul çözüm prototipiyle katıldım.',
  comGdgDate:'Ekim 2024 – Devam ediyor',comGdgDesc:'Etkinlik organizatörü ve aktif üye. Bakanlık temsilcilerinin katıldığı “Network 101” etkinliğinin organizasyonunu yönettim; firewall, NIC ve switch konulu sunum materyallerini hazırlayıp sundum.',
  comAwsDate:'2026 – Devam ediyor',comAwsDesc:'Aktif topluluk üyesi.',
  comEscDate:'2025',comEscDesc:'İspanya’da uluslararası gönüllü; çok uluslu bir ekiple sosyal sorumluluk projelerinde yer aldım.',
  contactEyebrow:'İletişim',contactTitle:'İletişime geçin',contactText:'.NET backend geliştirme, bulut ve DevOps alanlarında staj ve iş birliği fırsatlarına açığım.',
  footerNote:'Statik HTML · CSS · Motion',backTop:'Başa dön ↑',projectNotes:'Mimari notlar',closeProject:'Kapat',viewImage:'Görseli tam boyutta aç',
  switchLang:'İngilizceye geç',title:'Berre Yazgı — Yazılım Mühendisi',
  description:'Berre Yazgı — TED Üniversitesi yazılım mühendisliği öğrencisi. C# ve ASP.NET Core ile backend geliştirme, yazılım mimarisi, dağıtık sistemler.'
 }
};

const stack={
 stackLanguages:['C#','Python','SQL','JavaScript','HTML/CSS'],
 stackFrameworks:['ASP.NET Core MVC','Web API','EF Core','Dapper','Blazor Server','React','Tailwind CSS','PyTorch'],
 stackDevops:['Docker','Docker Compose','Jenkins','Git','GitHub','Linux','RabbitMQ','Postman','DBeaver'],
 stackData:['PostgreSQL','MS SQL Server','Clean Architecture','CQRS','N-Tier','SOLID','REST APIs','RAG']
};

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const dialog=$('#project-dialog'),M=window.Motion,ease=[.22,1,.36,1];
const motionOn=()=>!!M&&document.documentElement.classList.contains('motion')&&!matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!M)document.documentElement.classList.remove('motion');
let language='en',currentProject=null,projectTrigger=null;
try{const saved=localStorage.getItem('berre-language');if(saved==='tr'||saved==='en')language=saved;}catch{}
const t=key=>translations[language][key];
const pipeline=flow=>flow.map(step=>`<li>${step}</li>`).join('');

function setLanguage(next){
 language=next;document.documentElement.lang=next;
 $$('[data-i18n]').forEach(el=>{el.innerHTML=t(el.dataset.i18n);});
 $$('[data-summary]').forEach(el=>{el.textContent=projects[el.dataset.summary][next].summary;});
 $$('[data-alt]').forEach(el=>{el.alt=projects[el.dataset.alt].imageAlt[next];});
 $$('[data-flow]').forEach(el=>{el.innerHTML=pipeline(projects[el.dataset.flow][next].flow);});
 $('#stack-list').innerHTML=Object.entries(stack).map(([key,chips])=>`<div><dt>${t(key)}</dt><dd>${chips.map(c=>`<span>${c}</span>`).join('')}</dd></div>`).join('');
 $('#lang-en').classList.toggle('selected',next==='en');$('#lang-tr').classList.toggle('selected',next==='tr');
 $('#language-toggle').setAttribute('aria-label',t('switchLang'));
 $('#dialog-close').setAttribute('aria-label',t('closeProject'));
 document.title=t('title');$('meta[name="description"]').content=t('description');
 if(currentProject)renderProject();
 try{localStorage.setItem('berre-language',next);}catch{}
}

function renderProject(){
 const p=projects[currentProject],c=p[language];
 $('#dialog-content').innerHTML=`<header><p class="label">${c.category}</p><h2 id="dialog-title">${p.name}</h2><p class="muted">${c.summary}</p></header>`
  +`<ul class="tags mono">${p.tags.map(tag=>`<li>${tag}</li>`).join('')}</ul>`
  +`<ol class="pipeline mono" aria-label="Pipeline">${pipeline(c.flow)}</ol>`
  +(p.image?`<a class="dialog-shot" href="${p.image}" target="_blank" rel="noopener" aria-label="${t('viewImage')}"><img src="${p.image}" alt="${p.imageAlt[language]}"></a><p class="mono small muted">${p.imageCaption[language]}</p>`:'')
  +c.sections.map(([title,body])=>`<section><h3>${title}</h3><p>${body}</p></section>`).join('')
  +`<div class="dialog-note"><p class="small muted">${c.note}</p><div class="hero-actions"><a class="btn btn-primary btn-sm" href="${p.url}" target="_blank" rel="noopener noreferrer">${c.cta} <span aria-hidden="true">↗</span></a></div></div>`;
}

function openProject(key,trigger){
 currentProject=key;projectTrigger=trigger;renderProject();dialog.showModal();dialog.scrollTop=0;
 if(motionOn())M.animate(dialog,{opacity:[0,1],y:[8,0],scale:[.98,1]},{duration:.25,ease});
}
$$('[data-project]').forEach(btn=>btn.addEventListener('click',()=>openProject(btn.dataset.project,btn)));
$('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
dialog.addEventListener('close',()=>{currentProject=null;if(projectTrigger){projectTrigger.focus();projectTrigger=null;}});
$('#language-toggle').addEventListener('click',()=>setLanguage(language==='en'?'tr':'en'));

// Cursor spotlight on cards: one delegated listener writes CSS vars, styles.css draws the gradient.
document.addEventListener('pointermove',e=>{
 const card=e.target.closest&&e.target.closest('[data-card]');if(!card)return;
 const r=card.getBoundingClientRect();card.style.setProperty('--mx',`${e.clientX-r.left}px`);card.style.setProperty('--my',`${e.clientY-r.top}px`);
},{passive:true});

$('#footer-year').textContent=String(new Date().getFullYear());
setLanguage(language);

if(motionOn()){
 M.animate('[data-hero]',{opacity:[0,1],y:[12,0]},{duration:.6,ease,delay:M.stagger(.07)});
 M.inView('[data-reveal]',el=>{M.animate(el,{opacity:[0,1],y:[12,0]},{duration:.5,ease});},{amount:.2});
 M.inView('[data-stagger]',el=>{M.animate([...el.children],{opacity:[0,1],y:[16,0]},{duration:.5,ease,delay:M.stagger(.06)});},{amount:.1});
 M.hover('.project-card',card=>{
  const img=card.querySelector('.shot img');if(!img)return;
  M.animate(img,{scale:1.02},{duration:.4,ease});
  return()=>M.animate(img,{scale:1},{duration:.4,ease});
 });
}
