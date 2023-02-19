// nav bar
let menus = document.querySelector(".nav-bar");
 
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");
let close_btnid = document.querySelector("#close-btn");
 
let resnav = document.querySelector(".nav-item-wrapper");
 

menus_btn.addEventListener("click", function () {
    console.log("menu opened");
  menus.classList.add("active2");
  resnav.style.display= "flex"
  close_btnid.style.display="block";
  menus_btn.style.display= "none"
  


});

close_btn.addEventListener("click", function () {
    console.log("menu closed");
    menus.classList.remove("active2");
  resnav.style.display= "none"
  close_btnid.style.display="none";
  menus_btn.style.display= "block";
   ;

});

// hero section animation
 
// end


// testimonials horizontal drag scroll
var testimonialsCard = document.querySelector('.testimonials_card-scroll-wrapper');
var isDragging = false;
var startX, scrollLeft;

testimonialsCard.addEventListener('mousedown', function(e) {
  isDragging = true;
  startX = e.pageX - testimonialsCard.offsetLeft;
  scrollLeft = testimonialsCard.scrollLeft;
});

testimonialsCard.addEventListener('mouseup', function(e) {
  isDragging = false;
});

testimonialsCard.addEventListener('mousemove', function(e) {
  if (!isDragging) return;
  e.preventDefault();
  var x = e.pageX - testimonialsCard.offsetLeft;
  var walk = (x - startX) * 3;
  testimonialsCard.scrollLeft = scrollLeft - walk;
});

testimonialsCard.addEventListener('wheel', function(e) {
  e.preventDefault();
  var delta = e.wheelDelta;
  testimonialsCard.scrollLeft += (delta > 0 ? -1 : 1) * 30;
});

testimonialsCard.addEventListener('scroll', function() {
  var scrollRight = testimonialsCard.scrollWidth - testimonialsCard.clientWidth - testimonialsCard.scrollLeft;
  if (scrollRight <= 0) {
    document.body.style.overflowX = 'auto';
    // console.log("1nhale")
  } else {
    document.body.style.overflowX = 'hidden';
    // console.log("case")
  }
});


