const info_section = document.getElementById('info');
const info_h2 = document.getElementById('info__h2');
const info_text = document.getElementById('info__text');
const photo = document.getElementById('body');
const eye = document.getElementById('eye');

let hiding = false;

setTimeout(function(){
   document.body.classList.add('body_visible');
 },300);

eye.src = 'IMG/eye.png'

async function getData(){
  const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=wffQwaINBeDDvIWQlcaKYsqu9rDD1lzSwg990G6n');
  const data = await response.json();
  const result = await data;

  info_h2.innerText = data.title;
  info_text.innerText = data.explanation;
  photo.style.backgroundImage = `url(${data.hdurl})`;
}

function hidingInfo(){
  if(hiding == false){
    hiding = true;

    info_section.style.display = 'none';
    eye.src = 'IMG/close-eye.png'
  } else {
    hiding = false;

    info_section.style.display = 'flex'
    eye.src = 'IMG/eye.png'
  }
}

getData();

eye.onclick = hidingInfo;
