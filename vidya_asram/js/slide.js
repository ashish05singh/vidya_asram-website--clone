let flag=0;

function arrowcontroller(x){
    flag=flag + x; 
    slideshow(flag);
}
// alwase print 1st image
slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName("slid");
    if(num==slides.length){
        flag=0;
        num=0;
    }
    if(num<0){
        flag=slides.length - 1;
        num=slides.length - 1;
    }

    for(let non of slides ){
        non.style.display="none";

    }
slides[num].style.display="block";
}
