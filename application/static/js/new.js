// Wrap every letter in a span
var textWrapper = document.querySelector('.ml10 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml10 .letter',
    rotateY: [-90, 0],
    duration: 1300,
    delay: (el, i) => 45 * i
  }).add({
    targets: '.ml10',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 5000
  });


//   // Wrap every letter in a span
// var textWrapper = document.querySelector('.ml13');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({loop: true})
//   .add({
//     targets: '.ml13 .letter',
//     translateY: [100,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 4400,
//     delay: (el, i) => 300 + 30 * i
//   }).add({
//     targets: '.ml13 .letter',
//     translateY: [0,-100],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 20000,
//     delay: (el, i) => 100 + 30 * i
//   });