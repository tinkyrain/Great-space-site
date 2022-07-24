$(document).ready(function () {
  function getData(){
    $.getJSON('https://api.nasa.gov/planetary/apod?api_key=wffQwaINBeDDvIWQlcaKYsqu9rDD1lzSwg990G6n', function(data){
      $('#info__h2').html(data.title);
      $('#info__text').html(data.explanation);
      $('#photo').attr('src', data.hdurl);


    })
  }
  getData();

  setTimeout(function(){
	   document.body.classList.add('body_visible');
   },400);
});
