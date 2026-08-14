const gate=document.querySelector('.gate');
const closeGate=()=>{gate.classList.add('gate--closed');sessionStorage.setItem('selva-access','1')};
const openGate=()=>gate.classList.remove('gate--closed');
document.getElementById('gateForm').addEventListener('submit',e=>{e.preventDefault();closeGate()});
document.getElementById('skip').addEventListener('click',closeGate);
document.getElementById('access').addEventListener('click',openGate);
document.getElementById('requestAccess').addEventListener('click',openGate);
if(sessionStorage.getItem('selva-access'))closeGate();

const header=document.querySelector('header');
addEventListener('scroll',()=>header.classList.toggle('header--scrolled',scrollY>48),{passive:true});
const menu=document.getElementById('menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('nav--open'));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('nav--open')));

const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced){
  const items=document.querySelectorAll('.manifesto>*,.numbers article,.section-title>*,.residence__copy>*,.features__intro>*,.features li,.location__copy>*,.private>*');
  items.forEach(item=>item.classList.add('scroll-reveal'));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -7%'});
  items.forEach(item=>observer.observe(item));
}
