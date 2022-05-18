"use strict";

// バーガーメニュー
{
  const header = document.querySelector('header');
  const BergerBtn = document.getElementById('berger-btn');
  const mask = document.getElementById('mask');
  const nav = document.getElementById('nav');
  
  BergerBtn.addEventListener('click', ()=> {
    header.classList.toggle('open');
  });
  
  mask.addEventListener('click', ()=> {
    header.classList.remove('open');
  });

}

// スムーススクロール
{
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 80;
      const target = rect + offset - gap;
      
      const header = document.querySelector('header');
      header.classList.remove('open');
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }
}

// #pickup スライダー
{
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1.6,
    loop: true,
    spaceBetween: 20,
    centeredSlides : true,
    breakpoints: {
      600: {
        slidesPerView: 3.6,
        spaceBetween: 60,
      }
    },
  });
}

// #feature フェードイン
{
  let fadeInTarget = document.querySelectorAll('.fade-in');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++){
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 150) {
        fadeInTarget[i].classList.add('scroll-in');
      }
    }
  });
}