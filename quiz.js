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