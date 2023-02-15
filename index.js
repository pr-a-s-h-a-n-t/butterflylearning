// nav bar
let menus = document.querySelector(".nav-bar");
let menus_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");
let close_btnid = document.querySelector("#close-btn");

let resnav = document.querySelector(".nav-item-wrapper");
console.log(resnav,"-----");

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
});

  






// collaspe

$('.collapse').collapse({ toggle: false });
function myfunction(){
   $('.collapse').collapse('show');
}
function myfunction2(){
  $('.collapse').collapse('hide');
}













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


var tl = gsap.timeline({scrollTrigger:{
    trigger:"#main",
    // markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});
tl
.to(".text",{
    top: "-7%",
},'a')
.to("#card-one",{
    top: "65%",
},'a')
.to("#card-two",{
    top: "130%"
},'a')
.to("#card-two",{
    top: "62%"
},'b')
.to("#card-one",{
    width: "65%",
    height: "65vh"
},'b')
.to("#card-three",{
    top: "130%"
}, 'b')
.to("#card-three",{
    top: "50%"
}, 'c')
.to("#card-two",{
    width: "70%",
    height: "70vh"
},'c')

/* ------our service animations end ---- */
