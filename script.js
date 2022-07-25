const info_h2 = document.getElementById('info__h2');
const info_text = document.getElementById('info__text');
const photo = document.getElementById('photo');

setTimeout(function(){
   document.body.classList.add('body_visible');
 },300);

async function getData(){
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=wffQwaINBeDDvIWQlcaKYsqu9rDD1lzSwg990G6n');
  const data = await response.json();
  const result = await data;

  info_h2.innerText = data.title;
  info_text.innerText = data.explanation;
  photo.src = data.hdurl;
}

getData();
