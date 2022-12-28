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
//로그인 창
document.querySelector("#show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add("on");
});
document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove("on");
});

//카카오 로그인
window.Kakao.init("20657c743f4cbb1aaff6dbb2e6e714e3");
function KakaoLogin(){
    window.Kakao.Auth.login({
        scope:'profile, account_email, gender',
        success: function(authObj){
            console.log(authObj);
            window.Kakao.API.request({
                url:'/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account);
                }
            });
        }
    })
}
// //LET'S 디자인
// const lets = document.querySelector('.row h2');
// const it = lets.innerText;
// let tags = '';
// for (const letter of it) tags += `<span>${letter}</span>`;
// lets.innerHTML = tags;

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



