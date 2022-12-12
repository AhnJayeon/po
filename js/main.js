//btnCall
const btnCall = document.querySelector(".btnCall");
const menuMo = document.querySelector(".menuMo");
btnCall.onclick = function(e){
    e.preventDefault();
    btnCall.classList.toggle("on");
    menuMo.classList.toggle('on');
}
//mobile 메뉴 내 close 버튼
const close = document.querySelector(".close");
close.onclick = function(e){
  e.preventDefault();
  close.classList.toggle("on");
  menuMo.classList.toggle('on');
}




// main page basic slide
let curPos = 0;
let postion = 0;
const IMAGE_WIDTH = 590;
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const images = document.querySelector(".images")
 
function prev(){
  if(curPos > 0){
    nextBtn.removeAttribute("disabled")
    postion += IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos - 1;
  }
  if(curPos == 0){
    prevBtn.setAttribute('disabled', 'true')
  }
}
function next(){
  if(curPos < 4){
    prevBtn.removeAttribute("disabled")
    postion -= IMAGE_WIDTH;
    images.style.transform = `translateX(${postion}px)`;
    curPos = curPos + 1;
  }
  if(curPos == 4){
    nextBtn.setAttribute('disabled', 'true')
  }
}
 
function init(){
  prevBtn.setAttribute('disabled', 'true')
  prevBtn.addEventListener("click", prev)
  nextBtn.addEventListener("click", next)
}
 
init(); 
