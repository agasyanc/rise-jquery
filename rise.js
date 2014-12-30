//Rise 0.2
document.write("<style>.rise{opacity:0}</style>");
var speed = 500
$(function(){
  var rises = $(".rise");
  var urls = [];
  var counts = [];

  var newImages = [];

  rises.each(function() {
    var tmp = [];
    var images = $(this).find('img');
    images.each(function(index, el){
      tmp.push(el.src);
    });
    urls.push(tmp);
    counts.push(0);

    var loaders = [];

  });

  function imageLoad (index, el) {
    counts[index]++;

        if (counts[index] == el.length) {
          setTimeout(function() {
            rise(rises[index])
          }, 200);
        }
  }

  $.each(urls, function(index, el) {
    $.each(el, function(k, url) {
      newImage = new Image();
      newImage.onLoad=imageLoad(index, el);
      newImage.scr = el;
      newImages.push(newImage);
    });
      
    });

  function rise (object) {
      $(object).animate({
        'opacity': 1,
          },
        speed, function() {
        
      });
  }
})