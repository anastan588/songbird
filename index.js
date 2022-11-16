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
let lang = document.querySelector(".language_choice");
let languageText = document.querySelector(".language_text");
let descriptionText = document.querySelector(".description_text");

function setLang() {
  if (localStorage.getItem("birdsLang") === "RU") {
    lang.setAttribute("src", "./assets/icons/russia.svg");
  }
  if (localStorage.getItem("birdsLang") === "ENG") {
    lang.setAttribute("src", "./assets/icons/britain.svg");
  }
  if (localStorage.getItem("birdsLang") === null) {
    localStorage.setItem("birdsLang", "ENG");

    translate();
  }
}
setLang();

function translate() {
  if (localStorage.getItem("birdsLang") === "RU") {
    pageTitle = "Викторина про птиц";
    languageText.innerHTML = "Язык";
    descriptionText.innerHTML =
      "Игра, в которой вам необходимо угадать птиц по их голосам.";
    playButton.innerHTML = "Играть";
    galleryButton.innerHTML = "Галерея";
  }
}

function changeLang() {
  if (lang.src === "./assets/icons/russia.svg") {
    lang.setAttribute("src", "./assets/icons/britain.svg");
    localStorage.setItem("birdsLang", "ENG");
    location.reload();
  } else {
    lang.setAttribute("src", "./assets/icons/russia.svg");
    localStorage.setItem("birdsLang", "RUS");
    location.reload();
  }
}

lang.addEventListener("click", changeLang);
