"use strict";
var slides = [
  { 
    className: '.slider-plans', 
    curSlide: 0
  },
  { 
    className: '.slider-segmentos', 
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
    slides[0].curSlide = 0;
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