const bodyOfBirds = document.querySelector(".body");
const flickrApi = "7d49541786e1d23bb1393c9f71ce8c59";
const unsplashApi = "lY2dFZqkz9qKmxXVKQERUz-RShvhZeUyRswDWpAPnF4";

let theme = "birds";
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);

async function setBg() {
  const img = new Image();
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${theme}&client_id=${unsplashApi}`;

  /*const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrApi}&tags=${theme}&extras=url_l&format=json&nojsoncallback=1`;*/
  const res = await fetch(url);
  const data = await res.json();
  console.log(res.json);
  console.log(data);
  /*img.src = data.photos.photo[parseInt(randomNumber, 10)].url_l;*/
  img.src = data.urls.regular;
  img.onload = () => {
    bodyOfBirds.style.backgroundImage = `url(${img.src})`;
  };
}

window.addEventListener("load", setBg);
window.addEventListener("click", setBg);

let pageTitle = document.querySelector(".h1_text");
let playButton = document.querySelector(".play");
let galleryButton = document.querySelector(".gallery");
let description = document.querySelector(".description");
let langEng = document.querySelector(".eng");
let langRus = document.querySelector(".rus");
let languageText = document.querySelector(".language_text");
let descriptionText = document.querySelector(".description_text");

function setLang() {
  if (localStorage.getItem("birdsLang") === "RUS") {
    translate();
  }
  if (localStorage.getItem("birdsLang") === "ENG") {
  }
  if (localStorage.getItem("birdsLang") === null) {
    localStorage.setItem("birdsLang", "ENG");
  }
}
setLang();

function translate() {
  if (localStorage.getItem("birdsLang") === "RUS") {
    pageTitle = "Викторина про птиц";
    languageText.innerHTML = "Язык";
    descriptionText.innerHTML =
      "Вам необходимо угадать птиц по их голосам.";
    playButton.innerHTML = "Играть";
    galleryButton.innerHTML = "Галерея";
  }
}

function changeLangRus() {
  localStorage.setItem("birdsLang", "RUS");
  location.reload();
}

function changeLangEng() {
  localStorage.setItem("birdsLang", "ENG");
  location.reload();
}

langEng.addEventListener("click", changeLangEng);
langRus.addEventListener("click", changeLangRus);
