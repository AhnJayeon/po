const img = document.querySelector(".showBox img");
const btns = document.querySelectorAll(".btns li");

const gallery = document.querySelector("#box2");
const hOne = gallery.querySelector("h1");

const str = gallery.querySelector("strong");
const sp = gallery.querySelector("span");

const total = btns.length;

sp.innerText = total;

// //for of 반복문
// for (let el of btns) {
//   el.addEventListener("click", (e) => {
//     e.preventDefault();



//     let clickA = el.querySelector("a");
//     let imgSrc = clickA.getAttribute("href");

//     let tit = clickA.innerText;
//     hOne.innerText = tit;

//     // el.querySelector("a").getAttribute("href");
//     img.setAttribute("src", imgSrc);

//     //버튼활성화
//     for (let el of btns) { el.classList.remove("on") }
//     el.classList.add("on");

//   })
// }

// 기본for문으로
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    str.innerText = i + 1;

    let clickA = btns[i].querySelector("a");
    let imgSrc = clickA.getAttribute("href");

    let tit = clickA.innerText;
    hOne.innerText = tit;

    // el.querySelector("a").getAttribute("href");
    img.setAttribute("src", imgSrc);

    for (let k = 0; k < btns.length; k++) { btns[k].classList.remove("on"); }
    btns[i].classList.add("on");

  })
}