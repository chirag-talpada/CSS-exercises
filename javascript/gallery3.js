
alert("Click an Image for fullscreen!");
function get(url)
{
    var fulldiv=document.querySelector(".fullimg");
    fulldiv.style.display="block";

    var img=document.querySelector(".fullscreen");
    img.src=url;
}

function cl()
{   
    
    var fulldiv=document.querySelector(".fullimg");
    fulldiv.style.display="none";
}