'use strict';

const translations={
 en:{
  skip:'Skip to content',navWork:'Work <sup>03</sup>',navAbout:'About',navContact:'Let’s talk',heroEyebrow:'SOFTWARE ENGINEERING / ANKARA, TÜRKİYE',heroEdition:'A PORTFOLIO IN PROGRESS, JUST LIKE ME.',heroLine1:'Backend.',heroLine2:'And beyond.',
  heroDescription:'I’m Berre, a software engineering student at TED University. Building useful applications with C# and .NET. Exploring the space between code and cloud.',focusLabel:'CURRENT EXPLORATIONS',scrollHint:'SCROLL TO EXPLORE',workEyebrow:'SELECTED WORK',workNote:'A little context. A look inside. The code behind it.',workTitle:'Built to <em>figure it out.</em>',
  inventoryType:'SOFTWARE INVENTORY',inventorySummary:'Projects, people, and infrastructure in one place. A .NET MVC application with a data-driven interface and responsive layouts.',shopType:'E-COMMERCE / DOMAIN MODELING',shopSummary:'From product to cart to order. An e-commerce learning project exploring domain boundaries and modular architecture.',projectDetails:'Inside the project',takeLook:'TAKE A LOOK',inventoryCaption:'Project screenshot · Development version',shopCaption:'Interface design concept',inDevelopment:'In development',
  aboutEyebrow:'BEHIND THE BUILD',aboutLocation:'BASED IN ANKARA.<br>CURIOUS ABOUT EVERYWHERE.',aboutTitle:'I like knowing<br><em>how it all connects.</em>',aboutLead:'The data. The domain. The API. And the person using it.',aboutDescription:'I’m a final-year Software Engineering student at TED University, focused on backend development, software architecture, and distributed systems. I’ve gained professional experience through internships at ARD Bilişim and MYUNI, and I contribute to Oyuncak Kardeşliği as a volunteer software developer.',aboutPersonal:'Outside of software, I’m happiest on a nature walk or enjoying a quiet moment. There’s usually another question to follow when I’m back at my desk.',studentFact:'Software Engineering · Final year',
  navExperience:'Experience',graduationFact:'Expected graduation · June 2027',
  aboutStack:'Most of my work is in C# and ASP.NET Core, using Clean Architecture, CQRS, Dapper, and EF Core, with Docker, Jenkins, and CI/CD pipelines to build and ship it. I’m currently exploring Agentic AI, RAG, and cloud technologies.',
  ecoType:'AI EVENT ASSISTANT / IBM HACKATHON',ecoSummary:'An Agentic RAG-powered event discovery assistant built for an IBM Hackathon, combining asynchronous web crawling, watsonx.ai, and a Streamlit interface.',ecoCaption:'Image placeholder · Screenshot to be added',ecoStatus:'IBM Hackathon · Jan 2026',imagePlaceholder:'Screenshot coming soon',galleryPlaceholder:'A screenshot of this project hasn’t been added yet.',
  experienceEyebrow:'EXPERIENCE',experienceNote:'Internships and volunteer work.',experienceTitle:'Learning <em>on the job.</em>',
  expMyuniPeriod:'2026 – Present',expMyuniLocation:'Remote / Ankara',expMyuniRole:'Fullstack Developer Intern',expMyuniDesc:'Developing the interface and service integration for the digital content showcase (Dark Science magazine) on the collection page, and building responsive UI components with modern web standards.',
  expArdPeriod:'2025 – 2026',expArdLocation:'Ankara, Türkiye',expArdRole:'Software Engineering Intern · Two terms',expArdDesc:'Designed and developed modules for a corporate Expense Tracking System with ASP.NET Core MVC and N-Tier Architecture. Optimized the data-access layer with Dapper and SQL/LINQ, including reporting queries on the Northwind dataset; wrote edge-case unit test scenarios; and took part in daily stand-ups and sprint deliveries with an Agile/Scrum team. Returned for a second term to work on infrastructure improvements and refactoring.',
  expOyuncakPeriod:'2026 – Present',expOyuncakLocation:'Remote / Ankara',expOyuncakRole:'Volunteer Fullstack Developer',expOyuncakDesc:'Prepared the requirements analysis and technical architecture documentation for the association’s mobile app project, and designed the children’s theatre ticketing and dynamic toy-inventory categorization modules.',
  expMinistryPeriod:'Jul – Sep 2024',expMinistryLocation:'Ankara, Türkiye',expMinistryRole:'Volunteer Intern',ministryName:'Ministry of Environment, Urbanization and Climate Change',expMinistryDesc:'Observed the software development lifecycle of the ministry’s Java and AI teams and its public-sector IT integrations. Received technical training on network infrastructure, cloud systems, and security protocols.',
  communityEyebrow:'COMMUNITY &amp; COMPETITIONS',communityNote:'Hackathons, clubs, and volunteering.',communityTitle:'Beyond <em>the classroom.</em>',kindHackathon:'Hackathon',kindCompetition:'Competition',kindCommunity:'Community',kindVolunteering:'Volunteering',seeEco:'Eco-Agent project',
  comIbmDate:'Jan 2026',comIbmDesc:'Built Eco-Agent, an Agentic RAG event discovery assistant using watsonx.ai, Crawl4AI, and Streamlit.',
  comHuaweiDate:'2026',comHuaweiDesc:'Participant in the Cloud Track, with a Cloud Track certificate.',
  comEmlakDate:'2026',comEmlakDesc:'Took part with a web and real-estate solution prototype.',
  comGdgDate:'Oct 2024 – Present',comGdgDesc:'Event organizer and active member. Led the organization of “Network 101”, attended by ministry representatives, and prepared and presented materials on firewalls, NICs, and switches.',
  comAwsDate:'2026 – Present',comAwsDesc:'Active community member.',
  comEscDate:'2025',comEscDesc:'International volunteer in Spain, taking part in social responsibility projects with a multinational team.',
  tabLanguages:'Languages',tabFrameworks:'Frameworks',tabDevops:'DevOps &amp; Tools',tabData:'Data &amp; Architecture',
  languagesText:'The languages I use across backend services, data work, and interfaces.',frameworksText:'Frameworks and libraries from my projects and internships, from ASP.NET Core MVC and Web API to Blazor Server, React, and PyTorch.',devopsText:'Containerizing services, automating builds with Jenkins, and the everyday tools for messaging, API testing, and databases.',dataText:'Relational databases, plus the architectural patterns I apply to keep code testable and responsibilities clear.',
  ticker:['BACKEND DEVELOPMENT','IBM HACKATHON','DISTRIBUTED SYSTEMS','HUAWEI ICT COMPETITION','CLOUD &amp; DEVOPS','TEDU GDG'],
  toolboxEyebrow:'MY TOOLBOX',toolboxNote:'Tools I use. Ideas I’m exploring.',toolboxTitle:'Always<br><em>connecting dots.</em>',
  contactEyebrow:'OPEN TO INTERNSHIPS & COLLABORATION',contactTitle:'Let’s build<br><em>something good.</em>',contactText:'Interested in .NET backend development, cloud, and DevOps. Always open to a good learning opportunity.',footerNote:'MADE WITH CURIOSITY. MOVED WITH GSAP.',backTop:'BACK TO TOP',projectNotes:'PROJECT NOTES',overview:'Overview',gallery:'Gallery',zoomIn:'Zoom in +',zoomOut:'Zoom out −',galleryHelp:'Use Zoom in to inspect the details, then scroll or swipe inside the image.',galleryZoomHelp:'Zoomed view. Scroll or swipe inside the image to explore it.',motionOn:'Animations on — turn off',motionOff:'Animations off — turn on',motionSystem:'Animations off — following your system preference',motionUnavailable:'Animations unavailable — static view',openMenu:'Open navigation',closeMenu:'Close navigation',closeProject:'Close project notes',toolboxLabel:'Areas of interest'
 },
 tr:{
  skip:'İçeriğe geç',navWork:'Projeler <sup>03</sup>',navAbout:'Hakkımda',navContact:'Tanışalım',heroEyebrow:'YAZILIM MÜHENDİSLİĞİ / ANKARA, TÜRKİYE',heroEdition:'BU PORTFÖY DE BENİMLE BİRLİKTE GELİŞİYOR.',heroLine1:'Backend.',heroLine2:'Ötesini de.',
  heroDescription:'Ben Berre, TED Üniversitesi’nde yazılım mühendisliği öğrencisiyim. C# ve .NET ile işe yarayan uygulamalar geliştiriyor, kod ile bulut arasındaki dünyayı keşfediyorum.',focusLabel:'KEŞFETTİĞİM ALANLAR',scrollHint:'KEŞFETMEK İÇİN KAYDIR',workEyebrow:'SEÇİLİ PROJELER',workNote:'Kısa bir özet. İçeriden bir bakış. Arkasındaki kod.',workTitle:'Anlamak için <em>geliştiriyorum.</em>',
  inventoryType:'YAZILIM ENVANTERİ',inventorySummary:'Projeler, sorumlular ve altyapı bilgileri tek yerde. Veriye dayalı arayüzü ve farklı ekranlara uyumlu düzeniyle bir .NET MVC uygulaması.',shopType:'E-TİCARET / ALAN MODELLEME',shopSummary:'Üründen sepete, sepetten siparişe. Alan sınırlarını ve modüler mimariyi keşfettiğim bir e-ticaret öğrenme projesi.',projectDetails:'Projeyi yakından incele',takeLook:'YAKINDAN BAK',inventoryCaption:'Proje ekran görüntüsü · Geliştirme sürümü',shopCaption:'Arayüz tasarım konsepti',inDevelopment:'Geliştiriliyor',
  aboutEyebrow:'KODUN ARKASINDA',aboutLocation:'ANKARA’DAYIM.<br>MERAKIM HER YERDE.',aboutTitle:'Parçaların nasıl<br><em>birleştiğini merak ediyorum.</em>',aboutLead:'Veri. İş kuralları. API. Ve uygulamayı kullanan kişi.',aboutDescription:'TED Üniversitesi’nde son sınıf Yazılım Mühendisliği öğrencisiyim; backend geliştirme, yazılım mimarisi ve dağıtık sistemlere odaklanıyorum. ARD Bilişim ve MYUNI’deki stajlarımda profesyonel deneyim kazandım; Oyuncak Kardeşliği Derneği’nde gönüllü yazılım geliştirici olarak katkı sağlıyorum.',aboutPersonal:'Yazılımın dışında doğa yürüyüşlerini ve sakin anları seviyorum. Masama döndüğümde genellikle peşinden gideceğim yeni bir soru oluyor.',studentFact:'Yazılım Mühendisliği · Son sınıf',
  navExperience:'Deneyim',graduationFact:'Beklenen mezuniyet · Haziran 2027',
  aboutStack:'Çalışmalarımın çoğunu C# ve ASP.NET Core ile; Clean Architecture, CQRS, Dapper ve EF Core kullanarak geliştiriyor, Docker, Jenkins ve CI/CD hatlarıyla derleyip yayına alıyorum. Şu sıralar Agentic AI, RAG ve bulut teknolojilerini keşfediyorum.',
  ecoType:'YAPAY ZEKÂ ETKİNLİK ASİSTANI / IBM HACKATHON',ecoSummary:'IBM Hackathon kapsamında geliştirilen; asenkron web tarama, watsonx.ai ve Streamlit kullanarak etkinlik keşfi yapan Agentic RAG tabanlı yapay zekâ asistanı.',ecoCaption:'Görsel alanı · Ekran görüntüsü eklenecek',ecoStatus:'IBM Hackathon · Ocak 2026',imagePlaceholder:'Ekran görüntüsü yakında',galleryPlaceholder:'Bu projenin ekran görüntüsü henüz eklenmedi.',
  experienceEyebrow:'DENEYİM',experienceNote:'Stajlar ve gönüllü çalışmalar.',experienceTitle:'İş başında <em>öğreniyorum.</em>',
  expMyuniPeriod:'2026 – Devam ediyor',expMyuniLocation:'Uzaktan / Ankara',expMyuniRole:'Fullstack Developer Stajyeri',expMyuniDesc:'Koleksiyon sayfasındaki dijital içerik vitrininin (Dark Science dergisi) arayüzünü ve servis entegrasyonunu geliştiriyor, modern web standartlarıyla duyarlı (responsive) arayüz bileşenleri kodluyorum.',
  expArdPeriod:'2025 – 2026',expArdLocation:'Ankara, Türkiye',expArdRole:'Yazılım Mühendisliği Stajyeri · 2 dönem',expArdDesc:'ASP.NET Core MVC ve N-Katmanlı Mimari ile kurumsal Gider Takip Sistemi modüllerini tasarlayıp geliştirdim. Dapper ve SQL/LINQ ile veri erişim katmanını optimize ettim ve Northwind veri kümesi üzerinde raporlama sorguları yazdım; edge-case birim test senaryoları kurguladım; Agile/Scrum ekibiyle günlük stand-up ve sprint teslimatlarına katıldım. İkinci staj dönemimde ekibe devam ederek altyapı iyileştirme ve refactoring çalışmalarını yürüttüm.',
  expOyuncakPeriod:'2026 – Devam ediyor',expOyuncakLocation:'Uzaktan / Ankara',expOyuncakRole:'Gönüllü Fullstack Developer',expOyuncakDesc:'Dernek operasyonlarına yönelik mobil uygulama projesinin gereksinim analizini ve teknik mimari dokümantasyonunu hazırladım; çocuk tiyatrosu biletleme ve envanterdeki oyuncakların dinamik kategorizasyonu modüllerini kurguladım.',
  expMinistryPeriod:'Temmuz – Eylül 2024',expMinistryLocation:'Ankara, Türkiye',expMinistryRole:'Gönüllü Stajyer',ministryName:'T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı',expMinistryDesc:'Bakanlığın Java ve yapay zekâ ekiplerinin yazılım geliştirme süreçlerini ve kamu bilişim entegrasyonlarını gözlemledim. Ağ altyapısı, bulut sistemleri ve güvenlik protokolleri üzerine teknik eğitimler aldım.',
  communityEyebrow:'TOPLULUK &amp; YARIŞMALAR',communityNote:'Hackathon’lar, kulüpler ve gönüllülük.',communityTitle:'Sınıfın <em>ötesinde.</em>',kindHackathon:'Hackathon',kindCompetition:'Yarışma',kindCommunity:'Topluluk',kindVolunteering:'Gönüllülük',seeEco:'Eco-Agent projesi',
  comIbmDate:'Ocak 2026',comIbmDesc:'watsonx.ai, Crawl4AI ve Streamlit ile Agentic RAG tabanlı etkinlik keşif asistanı Eco-Agent’ı geliştirdim.',
  comHuaweiDate:'2026',comHuaweiDesc:'Cloud Track katılımcısı; Cloud Track sertifikası.',
  comEmlakDate:'2026',comEmlakDesc:'Web ve gayrimenkul çözüm prototipiyle katıldım.',
  comGdgDate:'Ekim 2024 – Devam ediyor',comGdgDesc:'Etkinlik organizatörü ve aktif üye. Bakanlık temsilcilerinin katıldığı “Network 101” etkinliğinin organizasyonunu yönettim; firewall, NIC ve switch konulu sunum materyallerini hazırlayıp sundum.',
  comAwsDate:'2026 – Devam ediyor',comAwsDesc:'Aktif topluluk üyesi.',
  comEscDate:'2025',comEscDesc:'İspanya’da uluslararası gönüllü; çok uluslu bir ekiple sosyal sorumluluk projelerinde yer aldım.',
  tabLanguages:'Diller',tabFrameworks:'Framework’ler',tabDevops:'DevOps &amp; Araçlar',tabData:'Veritabanı &amp; Mimari',
  languagesText:'Backend servislerinde, veri işlerinde ve arayüzlerde kullandığım diller.',frameworksText:'Projelerimde ve stajlarımda kullandığım framework ve kütüphaneler: ASP.NET Core MVC ve Web API’den Blazor Server, React ve PyTorch’a.',devopsText:'Servisleri container’a almak, Jenkins ile derlemeleri otomatikleştirmek ve mesajlaşma, API testi ve veritabanı için günlük araçlar.',dataText:'İlişkisel veritabanları ve kodu test edilebilir, sorumlulukları anlaşılır tutmak için uyguladığım mimari desenler.',
  ticker:['BACKEND GELİŞTİRME','IBM HACKATHON','DAĞITIK SİSTEMLER','HUAWEI ICT COMPETITION','BULUT &amp; DEVOPS','TEDU GDG'],
  toolboxEyebrow:'ARAÇ KUTUM',toolboxNote:'Kullandığım araçlar. Keşfettiğim fikirler.',toolboxTitle:'Parçaları<br><em>bir araya getiriyorum.</em>',
  contactEyebrow:'STAJ VE İŞ BİRLİĞİNE AÇIĞIM',contactTitle:'Birlikte güzel<br><em>bir şey geliştirelim.</em>',contactText:'.NET backend, bulut ve DevOps ile ilgileniyorum. İyi bir öğrenme fırsatına her zaman açığım.',footerNote:'MERAKLA GELİŞTİRİLDİ. GSAP İLE HAREKETLENDİ.',backTop:'BAŞA DÖN',projectNotes:'PROJE NOTLARI',overview:'Genel bakış',gallery:'Galeri',zoomIn:'Yakınlaştır +',zoomOut:'Uzaklaştır −',galleryHelp:'Ayrıntıları görmek için yakınlaştırın, ardından görselin içinde kaydırın.',galleryZoomHelp:'Yakınlaştırılmış görünüm. İncelemek için görselin içinde kaydırın.',motionOn:'Animasyonlar açık — kapat',motionOff:'Animasyonlar kapalı — aç',motionSystem:'Animasyonlar kapalı — sistem tercihine uyuluyor',motionUnavailable:'Animasyonlar kullanılamıyor — sabit görünüm',openMenu:'Menüyü aç',closeMenu:'Menüyü kapat',closeProject:'Proje notlarını kapat',toolboxLabel:'İlgi alanları'
 }
};

const toolbox={languages:{text:'languagesText',chips:['C#','Python','SQL','JavaScript','HTML/CSS']},frameworks:{text:'frameworksText',chips:['ASP.NET Core MVC','Web API','EF Core','Dapper','Blazor Server','React','Tailwind CSS','PyTorch']},devops:{text:'devopsText',chips:['Docker','Docker Compose','Jenkins','Git','GitHub','Linux','RabbitMQ','Postman','DBeaver']},data:{text:'dataText',chips:['PostgreSQL','MS SQL Server','Clean Architecture','CQRS','N-Tier','SOLID','REST APIs','RAG']}};
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const dialog=$('#project-dialog');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
let language='en',userMotion=true,activeTool='languages',currentProject=null,projectView='overview',projectTrigger=null,motionContext=null,progressFrame=0,hasPlayedIntro=false;
try{const saved=localStorage.getItem('berre-language');if(saved==='tr'||saved==='en')language=saved;userMotion=localStorage.getItem('berre-motion')!=='off';}catch{}
const canAnimate=()=>!!window.gsap&&userMotion&&!reduceMotion.matches;
const t=key=>translations[language][key];

function updateMotionLabel(){
 const enabled=canAnimate(),button=$('#motion-toggle');
 const label=!window.gsap?t('motionUnavailable'):reduceMotion.matches?t('motionSystem'):enabled?t('motionOn'):t('motionOff');
 button.setAttribute('aria-label',label);button.title=label;button.setAttribute('aria-pressed',String(enabled));button.disabled=!window.gsap||reduceMotion.matches;
 document.documentElement.classList.toggle('no-motion',!enabled);
}
function updateMenuLabel(){$('#menu-toggle').setAttribute('aria-label',t($('#mobile-nav').hidden?'openMenu':'closeMenu'));}
function closeMenu(){$('#mobile-nav').hidden=true;$('#menu-toggle').setAttribute('aria-expanded','false');updateMenuLabel();}

function setLanguage(next,{initial=false}={}){
 language=next;document.documentElement.lang=next;
 $$('[data-i18n]').forEach(el=>{el.innerHTML=t(el.dataset.i18n);});
 $('#lang-en').classList.toggle('selected',next==='en');$('#lang-tr').classList.toggle('selected',next==='tr');
 $('#language-toggle').setAttribute('aria-label',next==='en'?'Switch to Turkish':'İngilizceye geç');
 $('.brand').setAttribute('aria-label',next==='en'?'Berre Yazgı home':'Berre Yazgı ana sayfa');
 $('.toolbox-tabs').setAttribute('aria-label',t('toolboxLabel'));
 $$('.project-image-button').forEach(button=>button.setAttribute('aria-label',next==='en'?`Explore ${projects[button.dataset.project].name}`:`${projects[button.dataset.project].name} projesini incele`));
 $('#dialog-close').setAttribute('aria-label',t('closeProject'));
 updateMotionLabel();updateMenuLabel();renderTicker();renderToolbox(false);
 if(currentProject)renderProject();
 document.title=next==='en'?'Berre Yazgı — Backend & Beyond':'Berre Yazgı — Backend ve Ötesi';
 $('meta[name="description"]').content=next==='en'?'Berre Yazgı — software engineering student in Ankara. C#/.NET projects, thoughtful systems, and a path into cloud and DevOps.':'Berre Yazgı — Ankara’da yazılım mühendisliği öğrencisi. C#/.NET projelerim ve bulut ile DevOps öğrenme yolculuğum.';
 try{localStorage.setItem('berre-language',next);}catch{}
 if(!initial)rebuildAnimations(false);
}

function renderTicker(){
 const items=t('ticker').map(item=>`<span>${item}</span><i>✳</i>`).join('');
 $('#ticker-track').innerHTML=items.repeat(3);
}
function renderToolbox(animate=true){
 const panel=$('#toolbox-panel'),data=toolbox[activeTool];
 panel.innerHTML=`<p>${t(data.text)}</p><div class="toolbox-chips">${data.chips.map(chip=>`<span>${chip}</span>`).join('')}</div>`;
 panel.setAttribute('aria-labelledby','tab-'+activeTool);
 if(animate&&canAnimate())gsap.fromTo(panel,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.35,overwrite:true,ease:'power2.out'});
}
function selectTool(key){
 activeTool=key;$$('[data-toolbox]').forEach(button=>{const active=button.dataset.toolbox===key;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});renderToolbox();
}
function handleTabKeys(event,buttons,onSelect){
 const index=buttons.indexOf(event.target);if(index<0)return;
 let next=index;
 if(event.key==='ArrowRight')next=(index+1)%buttons.length;else if(event.key==='ArrowLeft')next=(index+buttons.length-1)%buttons.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=buttons.length-1;else return;
 event.preventDefault();buttons[next].focus();onSelect(buttons[next]);
}
$$('[data-toolbox]').forEach(button=>button.addEventListener('click',()=>selectTool(button.dataset.toolbox)));
$('.toolbox-tabs').addEventListener('keydown',event=>handleTabKeys(event,$$('[data-toolbox]'),button=>selectTool(button.dataset.toolbox)));

function renderProject(){
 const p=projects[currentProject],copy=p[language];
 $('#dialog-content').innerHTML=`<p class="eyebrow">${copy.category}</p><h2 class="dialog-title" id="dialog-title">${p.name}<span class="title-dot">.</span></h2><p class="dialog-summary">${copy.summary}</p><div class="dialog-tags">${p.tags.map(tag=>`<span>${tag}</span>`).join('')}</div><div class="dialog-tabs" role="tablist" aria-label="${t('projectNotes')}"><button id="project-tab-overview" role="tab" aria-controls="project-panel-overview" aria-selected="${projectView==='overview'}" tabindex="${projectView==='overview'?0:-1}" data-project-view="overview" type="button">${t('overview')}</button><button id="project-tab-gallery" role="tab" aria-controls="project-panel-gallery" aria-selected="${projectView==='gallery'}" tabindex="${projectView==='gallery'?0:-1}" data-project-view="gallery" type="button">${t('gallery')}</button></div><div id="project-panel-overview" class="dialog-panel" role="tabpanel" tabindex="0" aria-labelledby="project-tab-overview" ${projectView==='overview'?'':'hidden'}>${copy.sections.slice(0,3).map(([title,body])=>`<section class="dialog-section"><h3>${title}</h3><p>${body}</p></section>`).join('')}</div><div id="project-panel-gallery" class="dialog-panel" role="tabpanel" tabindex="0" aria-labelledby="project-tab-gallery" ${projectView==='gallery'?'':'hidden'}>${p.image?`<div class="gallery-toolbar"><span>${p.imageCaption[language]}</span><button id="zoom-toggle" class="zoom-button" type="button" aria-pressed="false" aria-controls="project-image-viewport">${t('zoomIn')}</button></div><div id="project-image-viewport" class="image-viewport" tabindex="0" role="region" aria-label="${p.imageAlt[language]}" aria-describedby="gallery-help"><img class="gallery-image" src="${p.image}" alt="${p.imageAlt[language]}" loading="lazy"></div><p id="gallery-help" class="gallery-note">${t('galleryHelp')}</p>`:`<div class="gallery-toolbar"><span>${p.imageCaption[language]}</span></div><div class="image-viewport image-viewport-empty"><div class="image-placeholder"><span class="placeholder-star" aria-hidden="true">✳</span><span>${t('imagePlaceholder')}</span><span class="placeholder-lines" aria-hidden="true"><i></i><i></i><i></i></span></div></div><p class="gallery-note">${t('galleryPlaceholder')}</p>`}</div><div class="dialog-footer"><a class="button-accent" href="${p.url}" target="_blank" rel="noopener noreferrer"><span>${copy.cta}</span><span aria-hidden="true">↗</span></a><p class="dialog-note">${copy.note}</p></div>`;
}
function selectProjectView(view){
 projectView=view;
 $$('[data-project-view]').forEach(button=>{const active=button.dataset.projectView===view;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
 ['overview','gallery'].forEach(key=>{$('#project-panel-'+key).hidden=key!==view;});
 const panel=$('#project-panel-'+view);
 if(canAnimate())gsap.fromTo(panel,{autoAlpha:0,y:12},{autoAlpha:1,y:0,duration:.35,ease:'power2.out',overwrite:true});
}
function openProject(key,trigger){
 currentProject=key;projectTrigger=trigger;projectView=trigger.classList.contains('project-image-button')?'gallery':'overview';renderProject();dialog.showModal();dialog.scrollTop=0;document.body.classList.add('dialog-open');$('#dialog-close').focus();
 if(canAnimate())gsap.fromTo(dialog,{autoAlpha:0,y:30,scale:.97},{autoAlpha:1,y:0,scale:1,duration:.4,ease:'power3.out',overwrite:true});
}
$$('[data-project]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.project,button)));
$('#dialog-close').addEventListener('click',()=>dialog.close());
$('#dialog-content').addEventListener('click',event=>{
 const tab=event.target.closest('[data-project-view]');if(tab){selectProjectView(tab.dataset.projectView);return;}
 const zoom=event.target.closest('#zoom-toggle');if(zoom){const viewport=$('#project-image-viewport'),active=zoom.getAttribute('aria-pressed')!=='true';zoom.setAttribute('aria-pressed',String(active));zoom.textContent=t(active?'zoomOut':'zoomIn');viewport.classList.toggle('zoomed',active);if(!active){viewport.scrollTop=0;viewport.scrollLeft=0;}$('#gallery-help').textContent=t(active?'galleryZoomHelp':'galleryHelp');}
});
$('#dialog-content').addEventListener('keydown',event=>{if(event.target.matches('[data-project-view]'))handleTabKeys(event,$$('[data-project-view]'),button=>selectProjectView(button.dataset.projectView));});
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{if(window.gsap)gsap.killTweensOf(dialog);dialog.style.removeProperty('opacity');dialog.style.removeProperty('visibility');dialog.style.removeProperty('transform');document.body.classList.remove('dialog-open');currentProject=null;if(projectTrigger){projectTrigger.focus();projectTrigger=null;}});

$('#language-toggle').addEventListener('click',()=>setLanguage(language==='en'?'tr':'en'));
$('#menu-toggle').addEventListener('click',()=>{const open=$('#mobile-nav').hidden;$('#mobile-nav').hidden=!open;$('#menu-toggle').setAttribute('aria-expanded',String(open));updateMenuLabel();});
$$('#mobile-nav a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!$('#mobile-nav').hidden){closeMenu();$('#menu-toggle').focus();}});
matchMedia('(max-width: 640px)').addEventListener('change',event=>{if(!event.matches)closeMenu();});

function updateProgress(){
 progressFrame=0;const total=document.documentElement.scrollHeight-innerHeight;
 $('#reading-progress').style.transform=`scaleX(${total>0?Math.min(1,Math.max(0,scrollY/total)):0})`;
}
function requestProgress(){if(!progressFrame)progressFrame=requestAnimationFrame(updateProgress);}
addEventListener('scroll',requestProgress,{passive:true});addEventListener('resize',requestProgress,{passive:true});

function rebuildAnimations(intro=false){
 if(motionContext){motionContext.revert();motionContext=null;}
 updateMotionLabel();requestProgress();
 if(!canAnimate()){
  if(window.gsap){gsap.killTweensOf('.toolbox-panel,.dialog-panel,.project-dialog');gsap.set('.toolbox-panel,.dialog-panel,.project-dialog',{clearProps:'opacity,visibility,transform'});}
  return;
 }
 if(window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
 motionContext=gsap.matchMedia();
 motionContext.add({motion:'(prefers-reduced-motion: no-preference)',desktop:'(min-width: 850px)',pointer:'(hover: hover) and (pointer: fine)'},context=>{
  if(!context.conditions.motion)return;
  const cleanup=[];
  if(intro&&!hasPlayedIntro){hasPlayedIntro=true;gsap.timeline({defaults:{ease:'power3.out'}}).from('.title-line',{yPercent:115,duration:1.05,stagger:.13,clearProps:'transform'},.05).from('.hero-kicker,.hero-bottom',{autoAlpha:0,y:18,duration:.7,stagger:.15,clearProps:'all'},.35).from('.orbit-scene',{autoAlpha:0,scale:.65,rotation:-25,duration:1.1,clearProps:'all'},.2);}
  if(window.ScrollTrigger){
   $$('.reveal').forEach(el=>gsap.from(el,{autoAlpha:0,y:30,duration:.8,ease:'power2.out',clearProps:'all',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
   gsap.to('.hero-star',{rotation:135,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.2}});
   gsap.fromTo('.ticker-track',{xPercent:-8},{xPercent:-25,ease:'none',scrollTrigger:{trigger:'.ticker',start:'top bottom',end:'bottom top',scrub:1.2}});
   $$('.project-image-button').forEach(el=>{
    gsap.from(el,{y:35,autoAlpha:.3,duration:.9,ease:'power2.out',clearProps:'opacity,visibility,transform',scrollTrigger:{trigger:el,start:'top 92%',once:true}});
    if(context.conditions.desktop)gsap.fromTo(el.querySelector('.image-browser'),{y:18},{y:-18,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}});
   });
   gsap.set('.community-card',{autoAlpha:0,y:30});
   ScrollTrigger.batch('.community-card',{start:'top 92%',once:true,onEnter:batch=>gsap.to(batch,{autoAlpha:1,y:0,duration:.7,stagger:.08,ease:'power2.out',clearProps:'all'})});
   $$('.community-star').forEach(el=>gsap.fromTo(el,{rotation:-60},{rotation:60,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1.4}}));
   gsap.from('.about-mark i',{rotation:-70,scrollTrigger:{trigger:'.about-section',start:'top bottom',end:'bottom top',scrub:1.4}});
   gsap.from('.contact-main h2',{y:25,autoAlpha:0,duration:.9,clearProps:'all',scrollTrigger:{trigger:'.contact-main',start:'top 90%',once:true}});
  }
  if(context.conditions.pointer){
   $$('.project-image-button').forEach(card=>{
    const image=card.querySelector('.image-browser'),moveX=gsap.quickTo(image,'rotationY',{duration:.6,ease:'power2.out'}),moveY=gsap.quickTo(image,'rotationX',{duration:.6,ease:'power2.out'}),scale=gsap.quickTo(image,'scale',{duration:.5,ease:'power2.out'});
    const move=event=>{const r=card.getBoundingClientRect();moveX(((event.clientX-r.left)/r.width-.5)*8);moveY(-((event.clientY-r.top)/r.height-.5)*7);scale(1.035);};
    const leave=()=>{moveX(0);moveY(0);scale(1);};card.addEventListener('pointermove',move);card.addEventListener('pointerleave',leave);cleanup.push(()=>{card.removeEventListener('pointermove',move);card.removeEventListener('pointerleave',leave);});
   });
   const link=$('.contact-main'),arrow=$('.contact-arrow'),move=gsap.quickTo(arrow,'x',{duration:.4,ease:'power2.out'}),rise=gsap.quickTo(arrow,'y',{duration:.4,ease:'power2.out'});
   const enter=()=>{move(12);rise(-12);},leave=()=>{move(0);rise(0);};link.addEventListener('pointerenter',enter);link.addEventListener('pointerleave',leave);cleanup.push(()=>{link.removeEventListener('pointerenter',enter);link.removeEventListener('pointerleave',leave);});
  }
  return()=>cleanup.forEach(remove=>remove());
 });
 if(window.ScrollTrigger)ScrollTrigger.refresh();
}
$('#motion-toggle').addEventListener('click',()=>{userMotion=!userMotion;try{localStorage.setItem('berre-motion',userMotion?'on':'off');}catch{}rebuildAnimations(false);});
reduceMotion.addEventListener('change',()=>rebuildAnimations(false));
$('#footer-year').textContent=String(new Date().getFullYear());
setLanguage(language,{initial:true});
rebuildAnimations(true);
$$('img').forEach(img=>img.addEventListener('load',()=>{if(window.ScrollTrigger)ScrollTrigger.refresh();requestProgress();},{once:true}));
if(document.fonts)document.fonts.ready.then(()=>{if(window.ScrollTrigger)ScrollTrigger.refresh();requestProgress();});
