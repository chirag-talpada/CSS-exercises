let image=document.querySelectorAll('.container-photo .image img');
let imageachivement=document.querySelectorAll(".container-achivement .achievement-images img");
let imageawards=document.querySelectorAll(".container-awards .image .banner span");
let gallarysection=document.querySelectorAll('[class|=container]');
let navlinks=document.querySelectorAll("nav .navbtn");
let imagetype="My Photos";

image.forEach((el)=>{
    el.setAttribute("onclick","fullimg1(this.src)");
});

imageawards.forEach((el)=>{
    el.setAttribute("onclick","fullimg3(this)");
});

imageachivement.forEach((el)=>{
    el.setAttribute("onclick","fullimg2(this.src)");
});

function fullimg3(url)
{
    document.querySelector(".fullscreen").style.display="block";
    document.querySelector("body").style.overflow="hidden";
    document.querySelector(".fullscreen .preview img").src=url.getAttribute("data-src");
    document.querySelector(".fullscreen .preview .preview-head h4").innerText=imagetype;   
}


function fullimg1(url)
{
    document.querySelector(".fullscreen").style.display="block";
    document.querySelector("body").style.overflow="hidden";
    document.querySelector(".fullscreen .preview img").src=url;
    document.querySelector(".fullscreen .preview .preview-head h4").innerText=imagetype;   
}

function fullimg2(url)
{
    document.querySelector(".fullscreen-2").style.display="block";
    document.querySelector("body").style.overflow="hidden";
    document.querySelector(".fullscreen-2 .preview-2 img").src=url;
    document.querySelector(".fullscreen-2 .preview-2 .preview-head-2 h4").innerText=imagetype;   
}

document.querySelector(".fullscreen .preview .preview-head span").addEventListener("click",function(){
    document.querySelector(".fullscreen").style.display="none";
    document.querySelector("body").style.overflow="auto";
});

document.querySelector(".fullscreen-2 .preview-2 .preview-head-2 span").addEventListener("click",function(){
    document.querySelector(".fullscreen-2").style.display="none";
    document.querySelector("body").style.overflow="auto";
});

document.querySelector("nav").addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON")
    {
        navlinks.forEach((el)=>{
            el.classList.remove("active");
        });
        
        event.target.classList.add("active");

        gallarysection.forEach((el)=>{
            el.classList.remove("show");
            el.classList.add("hide");

            if(event.target.innerText==el.getAttribute("data-type"))
            {
                el.classList.remove("hide");
                el.classList.add("show");
                imagetype=el.getAttribute("data-type");
                return;
            }
        });
        
    }
    
});