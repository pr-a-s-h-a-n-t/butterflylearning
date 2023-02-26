// nav bar
let menus = document.querySelector(".nav-bar");
 
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");
let close_btnid = document.querySelector("#close-btn");
 
let resnav = document.querySelector(".nav-item-wrapper");
let header = document.querySelector("#header");
let body = document.querySelector(".box");
let nav = document.querySelector(".nav-bar");


// js code for truncating the service cards text
window.onload = function () {
  let para_truncate1 = document.querySelector("#truncate_para_1")
  let para_truncate2 = document.querySelector("#truncate_para_2")
  let para_truncate3 = document.querySelector("#truncate_para_3")
  var targetWidth = 768;
  if ($(window).width() <= targetWidth) {
      para_truncate1.classList.add("truncate-line-clamp_true");
      para_truncate2.classList.add("truncate-line-clamp_true");
      para_truncate3.classList.add("truncate-line-clamp_true");
      console.log("para_truncate.classList.remove")

  }
  else {
      //Add your javascript for screens smaller than 768 here
  }
}

menus_btn.addEventListener("click", function () {
  console.log("menu opened");
  menus.classList.add("active2");
  resnav.style.display = "flex";
  close_btnid.style.display = "block";
  menus_btn.style.display = "none";
  body.style.display = "block";
  header.style.visibility = "hidden";
  nav.style.visibility = "visible";

  // translateHeroIcon.classList.add("translate");
});

// sticky navbar scroll
// Add a scroll event listener to the window
// window.addEventListener('scroll', () => {
//   // If the user has scrolled 30% down the page
//   if (window.scrollY > (window.innerHeight * 0.3)) {
//     // Add the sticky-top class to the header element
//     header.classList.add('sticky-top');
//     header.classList.add('shadow');
    
//     // Show the book consultation button
//     bookConsultationBtn.style.display = 'block';
//   } else {
//     // Remove the sticky-top class from the header element
//     header.classList.remove('sticky-top');
//     header.classList.remove('shadow');
    
//     // Hide the book consultation button
//     bookConsultationBtn.style.display = 'none';
//   }
// });


close_btn.addEventListener("click", function () {
  console.log("menu closed");
  menus.classList.remove("active2");
  resnav.style.display = "none";
  close_btnid.style.display = "none";
  menus_btn.style.display = "block";
  body.style.display = "none";
  header.style.visibility = "visible";
  nav.style.visibility = "hidden";
  // translateHeroIcon.classList.remove("translate");
});

// collaspe

// document.querySelector('.collapse').collapse({ toggle: false });
// function myfunction(){
//    $('.collapse').collapse('show');
// }
// function myfunction2(){
//   $('.collapse').collapse('hide');
// }

// console.warn("Hello Coder>>> "  )
// let scrollDiv = document.querySelector('#scroll')

// scrollDiv.addEventListener("scroll", ()=>{
//     if(scrollDiv.scrollHeight - scrollDiv.scrollTop === scrollDiv.clientHeight) {
//         window.scrollTo({
//             top: document.body.scrollHeight,
//             behavior: "smooth scroll"
//         })
//     }
// })

/* ------ our service animations start ---- */

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    // markers:true,
    start: "38% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});
tl.to(
  ".text",
  {
    top: "-7%",
  },
  "a"
)
  .to(
    "#card-one",
    {
      top: "65%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "130%",
    },
    "a"
  )
  .to(
    "#card-two",
    {
      top: "62%",
    },
    "b"
  )
  .to(
    "#card-one",
    {
      width: "65%",
      height: "65vh",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "130%",
    },
    "b"
  )
  .to(
    "#card-three",
    {
      top: "50%",
    },
    "c"
  )
  .to(
    "#card-two",
    {
      width: "70%",
      height: "70vh",
    },
    "c"
  );

/* ------our service animations end ---- */

// testimonials horizontal drag scroll
var testimonialsCard = document.querySelector(
  ".testimonials_card-scroll-wrapper"
);
var isDragging = false;
var startX, scrollLeft;

testimonialsCard.addEventListener("mousedown", function (e) {
  isDragging = true;
  startX = e.pageX - testimonialsCard.offsetLeft;
  scrollLeft = testimonialsCard.scrollLeft;
});

testimonialsCard.addEventListener("mouseup", function (e) {
  isDragging = false;
});

testimonialsCard.addEventListener("mousemove", function (e) {
  if (!isDragging) return;
  e.preventDefault();
  var x = e.pageX - testimonialsCard.offsetLeft;
  var walk = (x - startX) * 1;
  testimonialsCard.scrollLeft = scrollLeft - walk;
});