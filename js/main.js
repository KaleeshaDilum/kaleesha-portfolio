
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const R=document.documentElement,M=matchMedia("(prefers-color-scheme:dark)");
let st=null;try{st=localStorage.getItem("theme")}catch(e){}
function setT(t){R.dataset.theme=t;$("#tp").setAttribute("d",t==="dark"?"M12 3v2M12 19v2M4.200 4.200l1.400 1.400M18.400 18.400l1.400 1.400M3 12h2M19 12h2M4.200 19.800l1.400-1.400M18.400 5.600l1.400-1.400M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z":"M21 12.800A9 9 0 1 1 11.200 3a7 7 0 0 0 9.800 9.800z")}
setT(st||(M.matches?"dark":"light"));
$("#th").onclick=()=>{const t=R.dataset.theme==="dark"?"light":"dark";setT(t);try{localStorage.setItem("theme",t)}catch(e){}};
const hd=$("#hd"),on=()=>hd.classList.toggle("s",scrollY>10);on();addEventListener("scroll",on,{passive:true});
const mb=$("#menu"),lk=$("#links");
mb.onclick=()=>{const o=lk.classList.toggle("open");mb.setAttribute("aria-expanded",o)};
lk.onclick=e=>{if(e.target.tagName==="A"){lk.classList.remove("open");mb.setAttribute("aria-expanded","false")}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach(el=>{const p=el.parentElement;el.style.transitionDelay=Math.min([...p.children].indexOf(el),5)*70+"ms";io.observe(el)});
const ids=["home","about","experience","skills","projects","education","contact"],ln=$$(".links a");
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ln.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+e.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
ids.forEach(i=>so.observe(document.getElementById(i)));
