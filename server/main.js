const $ = (name) => document.querySelector(name);

const $$ = (name) => document.querySelectorAll(name);

let lenData = JSON.parse(localStorage.getItem("data")) || [];
console.log(lenData);
$(".shop-len").innerHTML = `${lenData.length}`;

function renderLocal() {
    let btn = document.createElement("button")
    let div = document.createElement("div")
    btn.className = "mark absolute top-2  -right-[100px] w-[40px] z-50  bg-[rgba(0,0,0,0.2)] rounded-md py-1 px-1  "
    btn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    div.className = "drower absolute w-1/2 top-0 h-screen transition-all duration-500 ease-in-out transform translate-x-[120%] justify-center items-center px-4 py-4 overflow-y-scroll overflow-x-auto grid grid-cols-3 gap-3 right-0 bg-[rgba(0,0,0,0.4)] z-40  "
  lenData.map((item) => {
    div.innerHTML += `<div data-path='products/${
        item.id
    }' class="w-full rounded-md  bg-white shadow-md  shadow-gray-400 flex overflow-hidden justify-between h-[350px] flex-col">
    <div data-path='products/${
        item.id
    }' class="w-full h-full overflow-hidden">
    <img data-path='products/${
        item.id
          }' class="w-full h-full object-contain" src="${item.image}" alt="">
        </div>
        
        <div data-path='products/${
          item.id
        }' class="w-full h-[30%] flex flex-col items-center gap-3 px-1 py-2 bg-white">
          <div data-path='products/${
            item.id
          }' class="text-base flex justify-center px-2 font-medium h-[50px] w-full overflow-hidden">
            <p data-path='products/${item.id}' class="truncate">${
      item.title
    }</p>
    </div>
    <div data-path='products/${
        item.id
    }' class="flex justify-between flex-col items-center text-sm">
    <div class="flex justify-center w-full">     
    <h1 data-path='products/${
              item.id
            }' class="text-sm font-semibold flex justify-center gap-3  text-gray-500"><span class=" line-through">$${
      item.price
    }</span>   <span class="font-bold text-gray-800 text-sm">$${(
      item.price -
      (item.price / 100) * 24
    ).toFixed(2)}</span><span class="text-red-500 text-sm">-24% Off</span></h1>
          </div>
    
          <div data-path='products/${
              item.id
            }' class="flex items-center justify-between w-full">
              <p data-path='products/${
                item.id
              }' class="text-yellow-500 font-medium">${item.rating.rate} ★</p>
              <p data-path='products/${item.id}' class="text-gray-500">(${
      item.rating.count
    })</p>
            </div>
          </div>
        </div>
      </div>
  `;
});
let son = lenData.reduce((acc,item)=>{
    return acc+item.id
     
},0)
div.innerHTML += `<div class="flex flex-col w-full">
<h1 class="text-white font-bold text-1xl">Total price: $${son}</h1>
<button class="py-1 px-3 bg-blue-500 text-white font-bold rounded-md">Go paymes</button>
</div>`


$("body").append(div,btn)
}
renderLocal()

$(".btn-shop").addEventListener("click",()=>{
    
    $(".drower").classList.toggle("translate-x-[0]")
    $(".mark").classList.toggle("left-[47%]")



})
$(".mark").addEventListener("click",()=>{
    $(".drower").classList.toggle("translate-x-[0]")
    $(".mark").classList.toggle("left-[47%]")

})
const slides = document.querySelectorAll(".carousel-slide");
let currentSlide = 0;

document.querySelector(".next-btn").addEventListener("click", () => {
  changeSlide(1);
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  changeSlide(-1);
});

function changeSlide(direction) {
  slides[currentSlide].classList.remove("opacity-100", "z-10");
  slides[currentSlide].classList.add("opacity-0", "z-0");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.remove("opacity-0", "z-0");
  slides[currentSlide].classList.add("opacity-100", "z-10");
}

setInterval(() => {
  changeSlide(1);
  let lenData = JSON.parse(localStorage.getItem("data")) || [];
  $(".shop-len").innerHTML = `${lenData.length}`;
}, 5000);
import { getData } from "./data.js";

getData("products");

$(
  ".catagory"
).innerHTML += `<button data-path="products" class="py-1 px-3 text-3xl font-bold capitalize" >all</button>`;
getData("products/categories").then((data) =>
  data.map((item) => {
    $(
      ".catagory"
    ).innerHTML += `<button data-path="products/category/${item}" class="py-1 px-3 text-3xl font-bold capitalize">${item}</button>`;
  })
);

$(".products").innerHTML = "";
getData("products").then((data) =>
  data.map((item) => {
    $(".products").innerHTML += `<div data-path='products/${
      item.id
    }' class="w-full rounded-md bg-white shadow-md shadow-gray-400 flex overflow-hidden justify-between h-[350px] flex-col">
    <div data-path='products/${item.id}' class="w-full h-full overflow-hidden">
      <img data-path='products/${
        item.id
      }' class="w-full h-full object-contain" src="${item.image}" alt="">
    </div>
    
    <div data-path='products/${
      item.id
    }' class="w-full h-[30%] flex flex-col items-center gap-3 px-1 py-2 bg-white">
      <div data-path='products/${
        item.id
      }' class="text-base flex justify-center px-2 font-medium h-[50px] w-full overflow-hidden">
        <p data-path='products/${item.id}' class="truncate">${item.title}</p>
      </div>
      <div data-path='products/${
        item.id
      }' class="flex justify-between flex-col items-center text-sm">
      <div class="flex justify-center w-full">     
        <h1 data-path='products/${
          item.id
        }' class="text-sm font-semibold flex justify-center gap-3  text-gray-500"><span class=" line-through">$${
      item.price
    }</span>   <span class="font-bold text-gray-800 text-sm">$${(
      item.price -
      (item.price / 100) * 24
    ).toFixed(2)}</span><span class="text-red-500 text-sm">-24% Off</span></h1>
      </div>

        <div data-path='products/${
          item.id
        }' class="flex items-center justify-between w-full">
          <p data-path='products/${
            item.id
          }' class="text-yellow-500 font-medium">${item.rating.rate} ★</p>
          <p data-path='products/${item.id}' class="text-gray-500">(${
      item.rating.count
    })</p>
        </div>
      </div>
    </div>
  </div>
  `;
  })
);

$(".catagory").addEventListener("click", (e) => {
  const path = e.target.dataset.path;
  if (path) {
    $(".products").innerHTML = "";
    getData(path).then((data) =>
      data.map((item) => {
        $(".products").innerHTML += `<div data-path='products/${
          item.id
        }' class="w-full rounded-md bg-white shadow-md shadow-gray-400 flex overflow-hidden justify-between h-[350px] flex-col">
        <div data-path='products/${
          item.id
        }' class="w-full h-full overflow-hidden">
          <img data-path='products/${
            item.id
          }' class="w-full h-full object-contain" src="${item.image}" alt="">
        </div>
        
        <div data-path='products/${
          item.id
        }' class="w-full h-[30%] flex flex-col items-center gap-3 px-1 py-2 bg-white">
          <div data-path='products/${
            item.id
          }' class="text-base flex justify-center px-2 font-medium h-[50px] w-full overflow-hidden">
            <p data-path='products/${item.id}' class="truncate">${
          item.title
        }</p>
          </div>
          <div data-path='products/${
            item.id
          }' class="flex justify-between flex-col items-center text-sm">
          <div class="flex justify-center w-full">     
            <h1 data-path='products/${
              item.id
            }' class="text-sm font-semibold flex justify-center gap-3  text-gray-500"><span class=" line-through">$${
          item.price
        }</span>   <span class="font-bold text-gray-800 text-sm">$${(
          item.price -
          (item.price / 100) * 24
        ).toFixed(
          2
        )}</span><span class="text-red-500 text-sm">-24% Off</span></h1>
          </div>
    
            <div data-path='products/${
              item.id
            }' class="flex items-center justify-between w-full">
              <p data-path='products/${
                item.id
              }' class="text-yellow-500 font-medium">${item.rating.rate} ★</p>
              <p data-path='products/${item.id}' class="text-gray-500">(${
          item.rating.count
        })</p>
            </div>
          </div>
        </div>
      </div>
      `;
      })
    );
  }
});

$(".products").addEventListener("click", (e) => {
  let path = e.target.dataset.path;

  path == "products/category/men"
    ? (path = "products/category/men's%20clothing")
    : path;
  if (path) {
    getData(path).then((data) => saveLocal(data));
  }
});

function saveLocal(data) {
  let localData = JSON.parse(localStorage.getItem("data")) || [];

  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (!localData.some((localItem) => localItem.id === item.id)) {
        localData.push(item);
      }
    });
    localStorage.setItem("data", JSON.stringify(localData));
  } else if (typeof data === "object" && data !== null) {
    if (!localData.some((localItem) => localItem.id === data.id)) {
      localData = [data, ...localData];
    }
    localStorage.setItem("data", JSON.stringify(localData));
  }
}
