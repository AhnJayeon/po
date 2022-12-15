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




