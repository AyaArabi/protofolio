var aboutSection=document.getElementById("about");
var nav=document.getElementById("navbar");
var serviceSection=document.getElementById("service");
var portfolioSection=document.getElementById("portfolio");
var resumeSection=document.getElementById("resume");
var changenavSection=document.getElementById("changenav");
var contactSection=document.getElementById("contact");

var loading=document.getElementById("loading");

var scrollTop=document.getElementById("scrollTop");
nav.style.transition='1s';
scrollTop.style.opacity= '0';
window.addEventListener('scroll',function(){
    if(window.scrollY<changenavSection.offsetTop){
        nav.style.backgroundColor="transparent";
        }
    if(window.scrollY>changenavSection.offsetTop){
        nav.style.backgroundColor="white";
        }
if(window.scrollY>=aboutSection.offsetTop){
    nav.style.backgroundColor="white";
    scrollTop.style.opacity='1';
}
if(window.scrollY<aboutSection.offsetTop){
    
    scrollTop.style.opacity='0';
}

if(window.scrollY>=serviceSection.offsetTop){
    nav.style.backgroundColor='#FF6107';
    
}

if(window.scrollY>=portfolioSection.offsetTop){
    nav.style.backgroundColor="#E9290F";
    
}
if(window.scrollY>=resumeSection.offsetTop){
    nav.style.backgroundColor="#C40018";
    
}


if(window.scrollY>=contactSection.offsetTop){
    nav.style.backgroundColor="white" ;
    
}
});
scrollTop.addEventListener("click",function(){
window.scroll({
top:0,
behavior:"smooth"
})
});

var links=document.querySelectorAll(".nav-link");

for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
        e.preventDefault;
        var currentID=e.target.getAttribute('herf');
        var currentSection=document.querySelector(currentID);
  
        window.scroll({
          top:currentSection.offsetTop,
          behavior:"smooth"
        })
    })
  
}

document.body.style.overflow='hidden';
window.addEventListener('load',function(){
setTimeout(
    function(){
        loading.style.opacity='0';
        loading.style.visibility='hidden';
        loading.style.transition='1s';
        document.body.style.overflow='auto';
      }
,2000)
});

