"use strict";
var slides = [
  { 
    className: '.slider-customers', 
    curSlide: 0
  },
  { 
    className: '.slider-video', 
    curSlide: 0
  },
  { 
    className: '.slider-why-answer-by-whatsapp', 
    curSlide: 0
  },
  { 
    className: '.slider-plans', 
    curSlide: 0
  },
  { 
    className: '.slider-discover', 
    curSlide: 0
  },
  { 
    className: '.slider-provedor-oficial', 
    curSlide: 0
  },
  { 
    className: '.slider-what-they-say', 
    curSlide: 0
  },
];

var mediaQuery = window.matchMedia('(max-width: 768px)')

function handleTabletChange(e) {
  if (e.matches) {
    slides.map(slide => {
      const elem = document.querySelectorAll(slide.className + ' .slide');
      elem.forEach((item, index) => {
        item.style.transform = `translateX(${index * 100}%)`;
      });
    });
    slides[3].curSlide = 0;
    nextSlide(0);
  }else{
    slides.map(slide => {
      const elem = document.querySelectorAll(slide.className + ' .slide');
      elem.forEach((item, index) => {
        item.style.transform = `none`;
      });
    });
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);


function prevSlide(index) {
  const element = document.querySelectorAll(slides[index].className + ' .slide');

  if (slides[index].curSlide === 0) {
    slides[index].curSlide = element.length - 1;
  } else {
    slides[index].curSlide--;
  }

  element.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - slides[index].curSlide)}%)`;
  });
  
};

function nextSlide(index) {
  const element = document.querySelectorAll(slides[index].className + ' .slide');

  if (slides[index].curSlide === element.length - 1) {
    slides[index].curSlide = 0;
  } else {
    slides[index].curSlide++;
  }

  element.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - slides[index].curSlide)}%)`;
  });
  
};

function tagManager(category, action, label){
  var addDataLayer = window.dataLayer || [];
  
  addDataLayer.push({
    'event': 'event',
    'eventCategory': category,
    'eventAction': action,
    'eventLabel': label
  })
}

// function openPopUpIdle(number) {
//   switch(number){
//     case 1:
//       var popup = document.getElementById("popup-idle1");
//       popup.style.visibility = "visible";
//       break;
//     case 2:
//       var popup = document.getElementById("popup-idle2");
//       popup.style.visibility = "visible";
//       break;
//     case 3:
//       var popup = document.getElementById("popup-idle3");
//       popup.style.visibility = "visible";
//     break;
//   }
// }

// function closePopUpIdle(number) {
//   switch(number){
//     case 1:
//       var popup = document.getElementById("popup-idle1");
//       popup.style.visibility = "hidden";
//       break;
//     case 2:
//       var popup = document.getElementById("popup-idle2");
//       popup.style.visibility = "hidden";
//       break;
//     case 3:
//       var popup = document.getElementById("popup-idle3");
//       popup.style.visibility = "hidden";
//     break;
//   }
// }

// var isThereAnyPopUpsOpen = () => document.getElementById("popup-idle1").style.visibility === 'visible' || document.getElementById("popup-idle2").style.visibility === 'visible' || document.getElementById("popup-idle3").style.visibility === 'visible'

// var inactivityTime = function () {
//   var time;
//   var number = 1;
//   window.onload = resetTimer;
//   document.onmousemove = resetTimer;
//   document.onkeydown = resetTimer;

//   function openPopUp() {
//     const video = document.getElementById('video-mutantwhats2');
//     if(video.paused && (isThereAnyPopUpsOpen() === false) ){
//       console.log(isThereAnyPopUpsOpen());
//       openPopUpIdle(number);
//       if(number < 3){
//         number++;
//       } else {
//         number = 1;
//       }
//     }
//   }

//   function resetTimer() {
//       clearTimeout(time);
//       time = setTimeout(openPopUp, 30000, number);
//       // 1000 milliseconds = 1 second
//   }
// };

// window.onload = function() {
//   inactivityTime();
// }

// window.onmousemove = function(e) {
//   if(e.clientX > window.screen.width * 0.10 && e.clientY < window.screen.height * 0.01 && (isThereAnyPopUpsOpen() === false)) {
//     openPopUpIdle(3);
//   }
// };