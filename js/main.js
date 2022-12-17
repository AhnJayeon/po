//btnCall
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
btnCall.onclick = function(e){
    e.preventDefault();
    btnCall.classList.toggle("on");
    menuMo.classList.toggle("on");
}

//mobile 메뉴 내 close 버튼
const close = document.querySelector(".close");
close.onclick = function(e){
  e.preventDefault();
  close.classList.toggle("on");
  menuMo.classList.toggle('on');
}

//gallery 문자열 바뀜
const SHOWING_CLASS = "showing";
const firstSlide = document.querySelector(".slider_item:first-child");

function slide(){
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    if(currentSlide){
        currentSlide.classList.remove(SHOWING_CLASS);
        const nextSlide = currentSlide.nextElementSibling;
        if(nextSlide){
            nextSlide.classList.add(SHOWING_CLASS);
        } else {
            firstSlide.classList.add(SHOWING_CLASS);
        }
    } else {
        firstSlide.classList.add(SHOWING_CLASS);
    }
}
slide();
setInterval(slide, 3000); 



