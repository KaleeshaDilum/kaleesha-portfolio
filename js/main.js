const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const R=document.documentElement,M=matchMedia("(prefers-color-scheme:dark)");
let st=null;try{st=localStorage.getItem("theme")}catch(e){}
const SUN="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",MOON="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z";
function setT(t){R.dataset.theme=t;$("#tp").setAttribute("d",t==="dark"?SUN:MOON)}
setT(st||(M.matches?"dark":"light"));
$("#th").onclick=()=>{const t=R.dataset.theme==="dark"?"light":"dark";setT(t);try{localStorage.setItem("theme",t)}catch(e){}};
const hd=$("#hd"),sc=()=>hd.classList.toggle("s",scrollY>10);sc();addEventListener("scroll",sc,{passive:true});
const mb=$("#menu"),lk=$("#links");
mb.onclick=()=>{const o=lk.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
lk.onclick=e=>{if(e.target.tagName==="A"){lk.classList.remove("open");mb.setAttribute("aria-expanded","false")}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach(el=>{el.style.transitionDelay=Math.min([...el.parentElement.children].indexOf(el),4)*70+"ms";io.observe(el)});
const ln=$$(".links a"),so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ln.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
["home","about","experience","skills","projects","education","contact"].forEach(i=>so.observe(document.getElementById(i)));

const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const nm=$("#name");nm.innerHTML=[...nm.textContent].map((c,i)=>`<span aria-hidden="true" style="animation-delay:${.1+i*.045}s">${c===" "?"&nbsp;":c}</span>`).join("");
const W=["user access","incident support","application monitoring","troubleshooting","release validation","UAT"],ty=$("#typed");
if(!RM){let w=0,i=W[0].length,d=1;(function t(){const s=W[w];i+=d?-1:1;ty.textContent=s.slice(0,i);let ms=d?30:60;if(!d&&i===s.length){d=1;ms=1800}else if(d&&!i){d=0;w=(w+1)%W.length;ms=300}setTimeout(t,ms)})()}
if(!RM&&matchMedia("(hover:hover)").matches){const tl=$("#tilt");
tl.addEventListener("pointermove",e=>{const r=tl.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tl.style.transform=`perspective(900px) rotateY(${x*10}deg) rotateX(${-y*10}deg)`});
tl.addEventListener("pointerleave",()=>tl.style.transform="")}