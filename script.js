const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function firstPageAnim() {
  var tl = gsap.timeline();
  tl.from("nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelem", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
      delay: -1,
      stagger: 0.2,
    })
    .from("herofooter", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
var timeout;
Shery.mouseFollower();
Shery.hoverWithMediaCircle(".elem", { images: ["./plug.png","./ixperience.png","./home.webp"],
  });

// function circleband() {
//   var xscale = 1;
//   var yscale = 1;

//   var xprev = 0;
//   var yprev = 0;

//   window.addEventListener("mousemove", function (dets) {
//     clearTimeout(timeout);
//     xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
//     yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

//     xprev = dets.clientX;
//     yprev = dets.clientY;

//     circlemover(xscale, yscale);

//     timeout = setTimeout(function () {
//       document.querySelector(
//         "#minicircle"
//       ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
//     }, 100);
//   });
// }

// function circlemover(xscale, yscale) {
//   window.addEventListener("mousemove", function (dets) {
//     document.querySelector(
//       "#minicircle"
//     ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
//   });
// }
// document.querySelectorAll(".elem").forEach(function (elem) {
//   elem.addEventListener("mouseleave", function (dets) {
    
    
//     gsap.to(elem.querySelector("img"), {
//       opacity: 0,
//       ease: Power1,
//       // duration: ,
//     });
//   });
// });  
// document.querySelectorAll(".elem").forEach(function (elem){
//   var rotate = 0;
//   var diffrot = 0;
//   elem.addEventListener("mousemove", function (details) {
//     var diff = details.clientY - elem.getBoundingClientRect().top;
//     diffrot = details.clientX -rotate;
//     rotate = details.clientX;  
//     gsap.to(elem.querySelector("img"), {
//       opacity:2,
//       ease: Power3,
//       top: diff,
//       left: details.clientX,
//       rotate: gsap.utils.clamp(-15,15, diffrot),
//     });

//   });
// });
// circleband();
// circlemover();
firstPageAnim();
