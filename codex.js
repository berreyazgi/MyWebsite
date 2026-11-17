'use strict';

const root=document.documentElement;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=matchMedia('(hover: hover) and (pointer: fine)').matches;
const hasGsap=!!(window.gsap&&window.ScrollTrigger);
if(!hasGsap)root.classList.remove('motion');
const animate=hasGsap&&!reduce;

/* ---------- Live corner readouts ---------- */
const clock=$('#clock'),scrollPct=$('#scroll-pct');
const timeFmt=new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Istanbul',hour:'2-digit',minute:'2-digit',second:'2-digit'});
const tickClock=()=>{clock.textContent=timeFmt.format(new Date());};
tickClock();setInterval(tickClock,1000);
const pad=(n,len=4)=>String(Math.max(0,Math.round(n))).padStart(len,'0');
const updateScroll=()=>{const max=document.documentElement.scrollHeight-innerHeight;scrollPct.textContent=pad(max>0?scrollY/max*100:0,3);};
addEventListener('scroll',updateScroll,{passive:true});updateScroll();

/* ---------- Smooth scroll (Lenis driven by the GSAP ticker so ScrollTrigger stays in sync) ---------- */
if(animate&&window.Lenis){
  const lenis=new Lenis({lerp:.09,wheelMultiplier:1});
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
    scrollTrigger:{trigger:document.body,start:'top top',end:'bottom bottom',scrub:1.2}});
  gsap.to('[data-section-draw]',{strokeDashoffset:0,ease:'none',stagger:.2,
    scrollTrigger:{trigger:'.flow',start:'top 85%',end:'bottom 45%',scrub:1}});
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
  addEventListener('pointermove',e=>{follow.x(e.clientX);follow.y(e.clientY);},{passive:true});
  document.addEventListener('pointerleave',()=>gsap.to(lens,{opacity:0,duration:.2}));
  document.addEventListener('pointerenter',()=>gsap.to(lens,{opacity:1,duration:.2}));

  $$('[data-lens]').forEach(el=>{
    el.addEventListener('pointerenter',()=>{
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

if(document.fonts&&hasGsap)document.fonts.ready.then(()=>ScrollTrigger.refresh());
