// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, {});
//   });
$(window).scroll(function() {
  $('#ame-img').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("fadeInUp");
      $(this).addClass("mostrar");
    }
  });
});

$(window).scroll(function() {
  $('#about-me').each(function(){
  var imagePos = $(this).offset().top;

  var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+400) {
      $(this).addClass("fadeInUp");
      $(this).addClass("mostrar");
    }
  });
});



$(document).ready(function(){
  $('.sidenav').sidenav();
});

  
$(document).ready(function(){
  $(window).scroll(function(){
  if($(window).scrollTop()>500){
    $('nav').addClass('color');
  }else{
    $('nav').removeClass('color');
  }
})
})