//key : 0b209493cdb5598f801c755a108f8fa9 
// pw : 0bd526d8666cb9cd
// https://www.flickr.com/services/rest/?method=flickr.test.echo&name=value

//<tag id="1234" author="12037949754@N01" raw="woo yay">wooyay</tag>
// https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg
//API Explorer : flickr.interestingness.getList

const base = "https://www.flickr.com/services/rest/?";
const method = "flickr.interestingness.getList";
const key = "0b209493cdb5598f801c755a108f8fa9";
const per_page = 500;
const format = "json";

const url =`
${base}method=${method}&api_key=${key}&per_page=${per_page}&format=${format}&nojsoncallback=1`;

const frame = document.querySelector("#list");


fetch(url)
.then(data=>{
    let result = data.json();
    return result;
})
.then(json=>{
    let items = json.photos.photo;
    
    let htmls = "";
    items.map(data=>{

        let imgSrc =`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_m.jpg`;

        let imgSrcBig = `https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}_b.jpg`;

        htmls += `
                <li class="item">
                    <div>
                        <a href=${imgSrcBig}>
                            <img src=${imgSrc}>
                        </a>
                        <p>${data.title}</p>
                    </div>
                </li>
            `;
    })

    frame.innerHTML = htmls;

    const imgs = frame.querySelectorAll("img");
    const len = imgs.length;
    let count = 0;

    for(let el of imgs){
        el.onload = ()=>{
            count++;
            if (count == len) isoLayout();
            }
        }
})
function IsoLayout() {
    frame.classList.add("on");
    new Isotope("#list", {
        itemSelector: ".item",
        columnWidth: ".item",
        transitioinDuration: "0.5s",
    });
}