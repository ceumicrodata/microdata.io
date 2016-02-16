

$(function() {

  var nav = $(".ceu-navbar-menuBar");
  var fixedClass = "ceu-navbar-menuBar-fixed";
//  var fixedContents = $(".ceu-navbar-visibleOnFixedNavbar");
  
  function menuBarPos() {
    return $(".ceu-whitePanel").offset().top;
  }

  //fixedContents.hide();
  
  $( window ).scroll(function() {
    
      if ( nav.hasClass(fixedClass) ) {
        if ($(window).scrollTop() < menuBarPos() ) {
          nav.removeClass(fixedClass);
//          fixedContents.fadeOut();
        }
      } else {
        if ($(window).scrollTop() >= menuBarPos() ) {
          nav.addClass(fixedClass);
//          fixedContents.fadeIn();
        }
      }
    
  });

});