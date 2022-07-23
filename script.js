function getData(){
  $.getJSON('https://api.nasa.gov/planetary/apod?api_key=wffQwaINBeDDvIWQlcaKYsqu9rDD1lzSwg990G6n', function(data){
    $('#info__text').html(data.explanation);
    $('#photo').attr('src', data.hdurl);
  })
}

getData();
