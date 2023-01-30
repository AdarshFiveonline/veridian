$(document).ready(function(){
  $('.floorplangallery > div.floorplanbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="floorplangallery"></a>');
  });
  $('.floorplangallery a').each(function(){
    var link = $(this).children('.floorplanbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});

$(document).ready(function(){
  $('.unitplangallery > div.unitplanbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="unitplangallery"></a>');
  });
  $('.unitplangallery a').each(function(){
    var link = $(this).children('.unitplanbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});



$(document).ready(function(){
  $('.exteriorsgallery > div.exteriorsbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="exteriorsgallery"></a>');
  });
  $('.exteriorsgallery a').each(function(){
    var link = $(this).children('.exteriorsbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});

$(document).ready(function(){
  $('.interiorsgallery > div.interiorsbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="interiorsgallery"></a>');
  });
  $('.interiorsgallery a').each(function(){
    var link = $(this).children('.interiorsbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});



$(document).ready(function(){
  $('.amenitiesgallery > div.amenitiesbg').each(function(){
    $(this).wrapAll('<a href="" data-fancybox="amenitiesgallery"></a>');
  });
  $('.amenitiesgallery a').each(function(){
    var link = $(this).children('.amenitiesbg').css('background-image');
    console.log(link);
    link = link.replace(/(url\(|\)|")/g,'');
    $(this).attr('href', link);
  });
  $("[data-fancybox]").fancybox({
    loop: true,
    buttons: [
          "zoom",
          "share",
          "slideShow",
          "fullScreen",
          // "download",
          "thumbs",
          "close"
      ]   
  });
});

