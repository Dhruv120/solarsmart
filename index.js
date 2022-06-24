AOS.init({
	duration: 1000,
    //once: true,
    disable: 'mobile'
});

// Menu JS
$(document).ready(function(){
  $(".mobile__menu").click(function(){
    $(this).toggleClass("show");
    $(".navbar").toggleClass("show");
  });
});
// Menu JS

// Header Fixed JS
jQuery(document).ready(function()
{
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();
    
        if (scroll >= 100) {
            jQuery("header").addClass("fixed-header");
        } else {
            jQuery("header").removeClass("fixed-header");
        }
    });
});
// Header Fixed JS

//for section move on click
$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 100
  }, 800);
});

// Page Redirect To Section JS

// Get all sections that have an ID defined

const sections = document.querySelectorAll("section[id]");
// Add an event listener listening for scroll

window.addEventListener("scroll", navHighlighter);
function navHighlighter() {

  // Get current scroll position
  let scrollY = window.pageYOffset; 
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;
    sectionId = current.getAttribute("id");   

    /*

    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it

    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector

    */

    if (
      scrollY > sectionTop - 100 &&
      scrollY <= sectionTop + sectionHeight - 100
    ){
      document.querySelector(".menu__bar a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".menu__bar a[href*=" + sectionId + "]").classList.remove("active");
    }
    if ($(window).width() < 1600) {
        if (
          scrollY > sectionTop - 80 &&
          scrollY <= sectionTop + sectionHeight - 80
        ){
          document.querySelector(".menu__bar a[href*=" + sectionId + "]").classList.add("active");
        } else {
          document.querySelector(".menu__bar a[href*=" + sectionId + "]").classList.remove("active");
        }
    }
    if ($(window).width() < 1025) {
        if (
          scrollY > sectionTop - 90 &&
          scrollY <= sectionTop + sectionHeight - 90
        ){
          document.querySelector(".menu__bar a[href*=" + sectionId + "]").classList.add("active");
        } else {
          document.querySelector(".menu__bar a[href*=" + sectionId + "]").classList.remove("active");
        }
    }

  });
}
// Page Redirect To Section JS
