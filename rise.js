//Rise 0.3
//hide all rise-element by opacity
document.write("<style>.rise{opacity:0}</style>");
var speed = 500;
var false_time = 1000;

$(function(){

  window.setTimeout(show_on_false, false_time);
  function show_on_false() {
    rise($(".rise"));
  }

  var rises = [];
  var urls = [];
  var counts = [];

  var newImages = [];

  $(".rise").each(function() {
    var tmp = [];
    var images = $(this).find('img');
    if (images.length) {
      rises.push(this);
      images.each(function(index, el){
        tmp.push(el.src);
      });
      urls.push(tmp)
      counts.push(images.length);
    }
    else{
      //if no images in rise-element
      rise(this);
    }
  });

  function imageLoad (index, el) {
    counts[index]--;
    if (counts[index]==0){
      rise(rises[index]);
    }
  }
  $.each(urls, function(i, element) {
    $.each(element, function(k, el) {
      newImage = new Image();
      newImage.onLoad=imageLoad(i, el);
      newImage.scr = el;
      newImages.push(newImage);
    });
  });

});
function rise(object) {
    $(object).animate({'opacity': 1}, speed, function() {

    });
}
