$(document).ready(function() {

  "use strict";

  $("#slides .slides-container").slick({
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        pauseOnHover: false,
        speed: 1000,
        autoplaySpeed: 10000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false
      });

  /*$('#slides').superslides({

    animation: 'fade',

    play: 10000,

    animation_speed: 'normal',

    animation_easing: 'linear',

    pagination: true,

    inherit_width_from: window,

    inherit_height_from: '.banner-main'

  });*/

  $('#popClose').click(function(e){
    e.preventDefault();
    $('#homePop').fadeOut(300);
  });


  if ($('#news').length>0) {

    $('#news').vTicker('init', {

      speed: 400, 

      pause: 5000,

      showItems: 3,

      padding:4

    });

  }



  $(".toggle-accordion").on("click", function() {

    var accordionId = $(this).attr("accordion-id"),

      numPanelOpen = $(accordionId + ' .collapse.in').length; 

    $(this).toggleClass("active");

    if (numPanelOpen == 0) {

      openAllPanels(accordionId);

    } else {

      closeAllPanels(accordionId);

    }

  });



  $('nav#menus').mmenu({

    extensions:['effect-slide-menu','pageshadow'],

    searchfield:false,

    offCanvas:{position:"right"}

  });

    
  $(".alert button.close").click(function (e) {
      $(this).parent().fadeOut('slow');
  });

}); 



$(document).ready(function() {

  "use strict";

  $('.fancybox').fancybox({

    maxWidth  : 900,

    maxHeight : 600,

    fitToView : false,

    width   : '70%',

    height    : '60%',

    autoSize  : false,

    closeClick  : false,

    openEffect  : 'none',

    closeEffect : 'none',

    iframe: {

      scrolling : 'auto',

      preload   : true

    }

  });



  $("#flexiselDemo2").flexisel({

    visibleItems: 6,

    enableResponsiveBreakpoints: true,

    responsiveBreakpoints: { 

      portrait: { 

        changePoint:480,

        visibleItems: 1

      }, 

      landscape: { 

        changePoint:640,

        visibleItems: 2

      },

      tablet: { 

        changePoint:768,

        visibleItems: 3

      }

    }

  });

  $('.bod-img-3 img').css('opacity', 0)
  setTimeout(function() {
    $('.bod-img-3 img').css('opacity', 1)
  }, 30000)

});



// All collup panel



openAllPanels = function(aId) {

  console.log("setAllPanelOpen");

  $(aId + ' .panel-collapse:not(".in")').collapse('show');

}



closeAllPanels = function(aId) {

  console.log("setAllPanelclose");

  $(aId + ' .panel-collapse.in').collapse('hide');

}

/*

$(".nano").nanoScroller({

sliderMaxHeight: 200,

sliderMinHeight: 40

});*/





/* 
 * Sticky Nav bar
 ------------------*/
 window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/*
$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('#navbar').addClass('sticky');
    } else {
        $('#navbar').removeClass('sticky');
    }
});
*/
