const vidList = document.querySelector(".vidList");
const key = "AIzaSyD6FdxHuuL1gKVBwUSTYuoE_Tf4A6QVNxw";
const playlistId = "PL6IEOLxx7x4hMvmn8f119TodmRLCTZmRk";
const num = 10;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

fetch(url)
  .then((data) => {
    return data.json();
  })
  .then((json) => {
    let items = json.items;
    console.log(items);
    let result = '';

    items.map((el) => {

      let title = el.snippet.title;
      //조건문으로 만약 타이틀의 길이가 30글자보다 크면
      //타이틀 = 타이틀.문자열자르는매서드 +"...";
      if (title.length > 30) {
        title = title.substr(0, 20) + "...";
      }
      //문자열.substr(start, length) : 특정 문자인덱스에서 부터 특정 갯수만큼 문자열을 자름
      let con = el.snippet.description;
      if (con.length > 100) {
        con = con.substr(0, 40) + "...";
      }
      let date = el.snippet.publishedAt;
      //문자열을 T를 기준으로 분리해서 배열로 반환한뒤
      //배열의 0인텍스만 취해서 date에 대입한다
      date = date.split("T")[0];

      result += `
        <article>
          <a href="${el.snippet.resourceId.videoId}" class="pic">
            <img src="${el.snippet.thumbnails.medium.url}">
          </a>
          <div class="con">
            <h2>${title}</h2>
            <p>${con}</p>
            <span>${date}</span>
          </div>
        </article>
      `;
    })

    vidList.innerHTML = result;
  });

vidList.addEventListener("click", (e) => {
  e.preventDefault();

  //

  if (!e.target.closest("a")) return;
  //이벤트위임의 단점인 이벤트 범위가 커져서 부작용이 발생하는데 그것을 이벤트발생의 목표가 아니라면 return하게 함으로 극복한다
  const vidId = e.target.closest("article").querySelector("a").getAttribute("href");
  //아티클에 이벤트가 걸쳐서 이벤트위임 현상을 발생시킴
  //부득이하게 이벤트위임을 걸쳐서 사용해야하는 경우에는
  //클릭한 요소의 부모태그가 a요소가 아니라면 어떻게 해야하는가는 고려해야합니다



  //만약 클릭이벤트가 a태그에만 있는것이 아니라면?

  // const vidId = e.target.closest("a").getAttribute("href"); //범위를 좁혀서 확실하게 a를 타겟팅하는 코드
  //이렇게 범위를 좁혀서 적용하는것이 가장 바람직한 코드

  let pop = document.createElement("figure");
  pop.classList.add("pop");
  pop.innerHTML = `
      <iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>
      <span class="btnClose">close</span>
    `;
  vidList.append(pop);
})

//이벤트위임을 해서 vidList에 클릭이벤트를 걸어준다
vidList.addEventListener("click", (e) => {
  const pop = vidList.querySelector(".pop");//이안에서 pop을 찾아서

  if (pop) { //pop이 있는지를 물어봄
    //조건문으로 pop을 찾았다면 pop안의 span를 찾아서
    const close = pop.querySelector("span");
    if (e.target == close) pop.remove();
    //조건문으로 내가 클릭한 대상이 span태그인지를 물어봐서
    //맞다면 pop이라는 변수에 담은 figure태그를 모두 없앰


  }
})


//클릭한 대상이 close라면 pop이라는 클래스를 remove함


// const main = document.querySelector("main");
// const key = "AIzaSyD6FdxHuuL1gKVBwUSTYuoE_Tf4A6QVNxw";
// const playListId = "PL6IEOLxx7x4jjLX1PFTbPYh9SVNA1yyNx";
// const num = 6;
// const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;


// /*
// jason 배열
// */

// fetch(url)
// .then((data) => {
//     return data.json();
//     console.log(data);
// })
// .then((json) => {
//     //console.log(json);
//     let items = json.items;
//     console.log(items);

//     let result = "";

//     items.map((el) => {
//       result += `
//         <article>
//         <a href="${el.snippet.resourceId.videoId}"></a>
//           <img src="${el.snippet.thumbnails.medium.url}">
//           <h1>${el.snippet.title}</h1>
//         </article>
//       `;
//     });
//     main.innerHTML = result;
//   })
// //article은 각각에 이벤트를 부여하는 것이 아니라 이벤트 위임으로 부모인 main에 이벤트를 위임함
//   main.addEventListener("click",(e)=>{
//     e.preventDefault();

//     const vidId = e.target.closest("article").querySelector("a").getAttribute('href');

//     let pop = document.createElement("figure");
//     pop.innerHTML = `
//     <iframe src="https://www.youtube.com/embed/${vidId}"></iframe>
//     `;
//     main.append(pop);
//   })
// /*target - 클릭한 대상
// current target - main으로 main에서 article을 찾으라는 말은 6개를 모두 지칭하므로 특정 즉 클릭한 article을 찾을 수 없다
// addEventListener 있는 것*/

