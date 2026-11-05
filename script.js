const partners=[
 {name:"VELS University",word:"VELS",sub:"UNIVERSITY · CHENNAI",cls:"",url:"https://www.velscollege.in/"},
 {name:"Casagrand",word:"CASAGRAND",sub:"building aspirations",cls:"casagrand",url:"https://www.casagrand.co.in/"},
 {name:"Pothys",word:"POTHYS",sub:"",cls:"pothys",url:"https://www.pothys.com/"},
 {name:"VGP",word:"VGP",sub:"",cls:"vgp",url:"https://www.vgp.com/"},
 {name:"DAC",word:"DAC",sub:"DEVELOP · BUILD · INSPIRE",cls:"dac",url:"https://www.dacdevelopers.com/"}
];
let current=0,timer;
const logo=document.getElementById("partnerLogo"),link=document.getElementById("partnerLink"),caption=document.getElementById("partnerCaption"),dots=document.getElementById("partnerDots");
function renderPartner(){
 const p=partners[current];logo.className="partner-wordmark "+p.cls;
 logo.innerHTML=p.word+(p.sub?`<small>${p.sub}</small>`:"");
 link.href=p.url;link.setAttribute("aria-label","Visit "+p.name+" official website");caption.textContent=p.name;
 [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===current));
}
partners.forEach((p,i)=>{const d=document.createElement("button");d.className="dot";d.setAttribute("aria-label","Show "+p.name);d.addEventListener("click",()=>{current=i;renderPartner();restart();});dots.appendChild(d)});
function next(){current=(current+1)%partners.length;renderPartner()}
function prev(){current=(current-1+partners.length)%partners.length;renderPartner()}
function restart(){clearInterval(timer);timer=setInterval(next,3500)}
document.getElementById("next").addEventListener("click",()=>{next();restart()});
document.getElementById("prev").addEventListener("click",()=>{prev();restart()});
renderPartner();restart();
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("enquiry").addEventListener("submit",e=>{e.preventDefault();const d=new FormData(e.currentTarget);const msg=`Hello SK LED Arts, I have an enquiry.%0AName: ${encodeURIComponent(d.get("name"))}%0APhone: ${encodeURIComponent(d.get("phone"))}%0AProduct: ${encodeURIComponent(d.get("product"))}%0ADetails: ${encodeURIComponent(d.get("message"))}`;window.open("https://wa.me/919791820399?text="+msg,"_blank","noopener")});
