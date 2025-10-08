const links=document.querySelectorAll("nav a");
links.forEach(l=>l.addEventListener("click",e=>{
  e.preventDefault();
  document.querySelector(l.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start"});
  links.forEach(a=>a.classList.remove("active"));
  l.classList.add("active");
}));
window.addEventListener("scroll",()=>{
  let current="";
  document.querySelectorAll("section").forEach(s=>{if(scrollY>=s.offsetTop-100)current=s.id;});
  links.forEach(l=>l.classList.remove("active"));
  links.forEach(l=>{if(l.getAttribute("href")==`#${current}`)l.classList.add("active");});
});
