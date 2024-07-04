let country = document.getElementById("country");
let text = document.getElementById("text");
let list = document.getElementById("list");

country.addEventListener("click", () => {
  list.classList.toggle("hidden");
});
function myfunction(frk) {
  text.innerHTML = frk;
}

let eng_tag = document.getElementById("eng_tag");
let hin_eng = document.querySelector(".hin_eng");
let language = document.querySelector(".language");
language.addEventListener("click", () => {
  hin_eng.classList.toggle("display_div");
});

function languageolx(anyone) {
  eng_tag.innerHTML = anyone;
}

let girls_img_id = document.getElementById("girl_img_id");
let dropdown = document.querySelector(".dropdown");

girls_img_id.addEventListener("click", () => {
  dropdown.classList.toggle("block_div");
});

//  ============================= Load More ================================
let lode_more_id = document.getElementById("lode_more_id");
let lode_more_products_id = document.getElementById("lode_more_products_id");

lode_more_id.addEventListener("click", () => {
  lode_more_products_id.style = "display:block";
  lode_more_id.style = "display:none";
});
