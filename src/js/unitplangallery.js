
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
          "download",
          "thumbs",
          "close"
      ]   
  });
});