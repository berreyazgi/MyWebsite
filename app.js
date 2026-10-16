'use strict';

const translations={
 en:{
  skip:'Skip to content',navWork:'Work <sup>02</sup>',navAbout:'About',navContact:'Let’s talk',heroEyebrow:'SOFTWARE ENGINEERING / ANKARA, TÜRKİYE',heroEdition:'A PORTFOLIO IN PROGRESS, JUST LIKE ME.',heroLine1:'Backend.',heroLine2:'And beyond.',
  heroDescription:'I’m Berre, a software engineering student at TED University. Building useful applications with C# and .NET. Exploring the space between code and cloud.',focusLabel:'CURRENT EXPLORATIONS',scrollHint:'SCROLL TO EXPLORE',workEyebrow:'SELECTED WORK',workNote:'A little context. A look inside. The code behind it.',workTitle:'Built to <em>figure it out.</em>',
  inventoryType:'SOFTWARE INVENTORY',inventorySummary:'Projects, people, and infrastructure in one place. A .NET MVC application with a data-driven interface and responsive layouts.',shopType:'E-COMMERCE / DOMAIN MODELING',shopSummary:'From product to cart to order. An e-commerce learning project exploring domain boundaries and modular architecture.',projectDetails:'Inside the project',takeLook:'TAKE A LOOK',inventoryCaption:'Project screenshot · Development version',shopCaption:'Interface design concept',inDevelopment:'In development',
  aboutEyebrow:'BEHIND THE BUILD',aboutLocation:'BASED IN ANKARA.<br>CURIOUS ABOUT EVERYWHERE.',aboutTitle:'I like knowing<br><em>how it all connects.</em>',aboutLead:'The data. The domain. The API. And the person using it.',aboutDescription:'I’m a fourth-year software engineering student at TED University, working with C# and ASP.NET Core. My projects are where I turn questions about architecture and databases into something I can build, test, and understand.',aboutPersonal:'Outside of software, I’m happiest on a nature walk or enjoying a quiet moment. There’s usually another question to follow when I’m back at my desk.',studentFact:'Software Engineering · 4th year',
  toolboxEyebrow:'MY TOOLBOX',toolboxNote:'Tools I use. Ideas I’m exploring.',toolboxTitle:'Always<br><em>connecting dots.</em>',tabBuild:'Build',tabModel:'Structure',tabShip:'Explore',buildText:'Working with C# and ASP.NET Core to connect application behavior, APIs, and user interfaces.',modelText:'Exploring how data models, domain boundaries, and clear responsibilities help the pieces fit together.',shipText:'My learning direction: connecting local development with repeatable builds, containers, and cloud deployment.',
  contactEyebrow:'OPEN TO INTERNSHIPS & COLLABORATION',contactTitle:'Let’s build<br><em>something good.</em>',contactText:'Interested in .NET backend development, cloud, and DevOps. Always open to a good learning opportunity.',footerNote:'MADE WITH CURIOSITY. MOVED WITH GSAP.',backTop:'BACK TO TOP',projectNotes:'PROJECT NOTES',overview:'Overview',gallery:'Gallery',zoomIn:'Zoom in +',zoomOut:'Zoom out −',galleryHelp:'Use Zoom in to inspect the details, then scroll or swipe inside the image.',galleryZoomHelp:'Zoomed view. Scroll or swipe inside the image to explore it.',motionOn:'Animations on — turn off',motionOff:'Animations off — turn on',motionSystem:'Animations off — following your system preference',motionUnavailable:'Animations unavailable — static view',openMenu:'Open navigation',closeMenu:'Close navigation',closeProject:'Close project notes',toolboxLabel:'Areas of interest'
 },
 tr:{
  skip:'İçeriğe geç',navWork:'Projeler <sup>02</sup>',navAbout:'Hakkımda',navContact:'Tanışalım',heroEyebrow:'YAZILIM MÜHENDİSLİĞİ / ANKARA, TÜRKİYE',heroEdition:'BU PORTFÖY DE BENİMLE BİRLİKTE GELİŞİYOR.',heroLine1:'Backend.',heroLine2:'Ötesini de.',
  heroDescription:'Ben Berre, TED Üniversitesi’nde yazılım mühendisliği öğrencisiyim. C# ve .NET ile işe yarayan uygulamalar geliştiriyor, kod ile bulut arasındaki dünyayı keşfediyorum.',focusLabel:'KEŞFETTİĞİM ALANLAR',scrollHint:'KEŞFETMEK İÇİN KAYDIR',workEyebrow:'SEÇİLİ PROJELER',workNote:'Kısa bir özet. İçeriden bir bakış. Arkasındaki kod.',workTitle:'Anlamak için <em>geliştiriyorum.</em>',
  inventoryType:'YAZILIM ENVANTERİ',inventorySummary:'Projeler, sorumlular ve altyapı bilgileri tek yerde. Veriye dayalı arayüzü ve farklı ekranlara uyumlu düzeniyle bir .NET MVC uygulaması.',shopType:'E-TİCARET / ALAN MODELLEME',shopSummary:'Üründen sepete, sepetten siparişe. Alan sınırlarını ve modüler mimariyi keşfettiğim bir e-ticaret öğrenme projesi.',projectDetails:'Projeyi yakından incele',takeLook:'YAKINDAN BAK',inventoryCaption:'Proje ekran görüntüsü · Geliştirme sürümü',shopCaption:'Arayüz tasarım konsepti',inDevelopment:'Geliştiriliyor',
  aboutEyebrow:'KODUN ARKASINDA',aboutLocation:'ANKARA’DAYIM.<br>MERAKIM HER YERDE.',aboutTitle:'Parçaların nasıl<br><em>birleştiğini merak ediyorum.</em>',aboutLead:'Veri. İş kuralları. API. Ve uygulamayı kullanan kişi.',aboutDescription:'TED Üniversitesi’nde dördüncü sınıf yazılım mühendisliği öğrencisiyim. C# ve ASP.NET Core ile çalışıyorum. Projelerim, mimari ve veritabanları hakkındaki sorularımı geliştirebileceğim, test edebileceğim ve anlayabileceğim uygulamalara dönüştürdüğüm yer.',aboutPersonal:'Yazılımın dışında doğa yürüyüşlerini ve sakin anları seviyorum. Masama döndüğümde genellikle peşinden gideceğim yeni bir soru oluyor.',studentFact:'Yazılım Mühendisliği · 4. sınıf',
  toolboxEyebrow:'ARAÇ KUTUM',toolboxNote:'Kullandığım araçlar. Keşfettiğim fikirler.',toolboxTitle:'Parçaları<br><em>bir araya getiriyorum.</em>',tabBuild:'Geliştir',tabModel:'Tasarla',tabShip:'Keşfet',buildText:'C# ve ASP.NET Core ile uygulama davranışını, API’leri ve kullanıcı arayüzlerini birbirine bağlıyorum.',modelText:'Veri modellerinin, alan sınırlarının ve anlaşılır sorumlulukların parçaları nasıl birleştirdiğini keşfediyorum.',shipText:'Öğrenme yönüm: yerel geliştirmeyi tekrarlanabilir derlemeler, container’lar ve bulut dağıtımıyla birleştirmek.',
  contactEyebrow:'STAJ VE İŞ BİRLİĞİNE AÇIĞIM',contactTitle:'Birlikte güzel<br><em>bir şey geliştirelim.</em>',contactText:'.NET backend, bulut ve DevOps ile ilgileniyorum. İyi bir öğrenme fırsatına her zaman açığım.',footerNote:'MERAKLA GELİŞTİRİLDİ. GSAP İLE HAREKETLENDİ.',backTop:'BAŞA DÖN',projectNotes:'PROJE NOTLARI',overview:'Genel bakış',gallery:'Galeri',zoomIn:'Yakınlaştır +',zoomOut:'Uzaklaştır −',galleryHelp:'Ayrıntıları görmek için yakınlaştırın, ardından görselin içinde kaydırın.',galleryZoomHelp:'Yakınlaştırılmış görünüm. İncelemek için görselin içinde kaydırın.',motionOn:'Animasyonlar açık — kapat',motionOff:'Animasyonlar kapalı — aç',motionSystem:'Animasyonlar kapalı — sistem tercihine uyuluyor',motionUnavailable:'Animasyonlar kullanılamıyor — sabit görünüm',openMenu:'Menüyü aç',closeMenu:'Menüyü kapat',closeProject:'Proje notlarını kapat',toolboxLabel:'İlgi alanları'
 }
};

const toolbox={build:{text:'buildText',chips:['C#','ASP.NET Core','REST APIs','Vanilla JS']},model:{text:'modelText',chips:['PostgreSQL','Dapper','EF Core','CQRS','Domain modeling']},ship:{text:'shipText',chips:['Docker','Jenkins','CI/CD','Cloud']}};
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
const dialog=$('#project-dialog');
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
const finePointer=matchMedia('(hover: hover) and (pointer: fine)');
let language='en',userMotion=true,activeTool='build',currentProject=null,projectView='overview',projectTrigger=null,motionContext=null,progressFrame=0,hasPlayedIntro=false;
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
 updateMotionLabel();updateMenuLabel();renderToolbox(false);
 if(currentProject)renderProject();
 document.title=next==='en'?'Berre Yazgı — Backend & Beyond':'Berre Yazgı — Backend ve Ötesi';
 $('meta[name="description"]').content=next==='en'?'Berre Yazgı — software engineering student in Ankara. C#/.NET projects, thoughtful systems, and a path into cloud and DevOps.':'Berre Yazgı — Ankara’da yazılım mühendisliği öğrencisi. C#/.NET projelerim ve bulut ile DevOps öğrenme yolculuğum.';
 try{localStorage.setItem('berre-language',next);}catch{}
 if(!initial)rebuildAnimations(false);
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
 $('#dialog-content').innerHTML=`<p class="eyebrow">${copy.category}</p><h2 class="dialog-title" id="dialog-title">${p.name}<span class="title-dot">.</span></h2><p class="dialog-summary">${copy.summary}</p><div class="dialog-tags">${p.tags.map(tag=>`<span>${tag}</span>`).join('')}</div><div class="dialog-tabs" role="tablist" aria-label="${t('projectNotes')}"><button id="project-tab-overview" role="tab" aria-controls="project-panel-overview" aria-selected="${projectView==='overview'}" tabindex="${projectView==='overview'?0:-1}" data-project-view="overview" type="button">${t('overview')}</button><button id="project-tab-gallery" role="tab" aria-controls="project-panel-gallery" aria-selected="${projectView==='gallery'}" tabindex="${projectView==='gallery'?0:-1}" data-project-view="gallery" type="button">${t('gallery')}</button></div><div id="project-panel-overview" class="dialog-panel" role="tabpanel" tabindex="0" aria-labelledby="project-tab-overview" ${projectView==='overview'?'':'hidden'}>${copy.sections.slice(0,3).map(([title,body])=>`<section class="dialog-section"><h3>${title}</h3><p>${body}</p></section>`).join('')}</div><div id="project-panel-gallery" class="dialog-panel" role="tabpanel" tabindex="0" aria-labelledby="project-tab-gallery" ${projectView==='gallery'?'':'hidden'}><div class="gallery-toolbar"><span>${p.imageCaption[language]}</span><button id="zoom-toggle" class="zoom-button" type="button" aria-pressed="false" aria-controls="project-image-viewport">${t('zoomIn')}</button></div><div id="project-image-viewport" class="image-viewport" tabindex="0" role="region" aria-label="${p.imageAlt[language]}" aria-describedby="gallery-help"><img class="gallery-image" src="${p.image}" alt="${p.imageAlt[language]}" loading="lazy"></div><p id="gallery-help" class="gallery-note">${t('galleryHelp')}</p></div><div class="dialog-footer"><a class="button-accent" href="${p.url}" target="_blank" rel="noopener noreferrer"><span>${copy.cta}</span><span aria-hidden="true">↗</span></a><p class="dialog-note">${copy.note}</p></div>`;
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
