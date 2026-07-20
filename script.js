'use strict';

// Помечаем, что JS работает: CSS прячет .reveal-элементы только при наличии этого класса
document.documentElement.classList.add('js');

// ===== Липкая шапка: тень при скролле =====
const header = document.getElementById('header');
const onScroll = () => {
  header.classList.toggle('header--scrolled', window.scrollY > 8);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Бургер-меню =====
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  burger.classList.toggle('burger--open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
});

// Закрываем мобильное меню при переходе по ссылке
nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    burger.classList.remove('burger--open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// ===== FAQ-аккордеон (пункты открываются независимо) =====
document.querySelectorAll('.faq-item__question').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.toggle('faq-item--open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

// ===== Каскадные задержки появления внутри групп =====
document.querySelectorAll('[data-stagger]').forEach((group) => {
  group.querySelectorAll('.reveal').forEach((el, index) => {
    el.style.setProperty('--d', `${Math.min(index * 90, 540)}ms`);
  });
});

// ===== Появление блоков при скролле =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ===== Прорисовка «тропы из мёда» в секции шагов =====
const stepsSection = document.querySelector('.steps');
if (stepsSection) {
  const stepsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stepsSection.classList.add('steps--inview');
          stepsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  stepsObserver.observe(stepsSection);
}

// ===== Лёгкий параллакс визуала героя за курсором =====
const hero = document.querySelector('.hero');
const heroVisual = document.querySelector('.hero__visual');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

if (hero && heroVisual && finePointer && !reduceMotion) {
  const layers = [
    { el: heroVisual.querySelector('.hero__blob'), depth: 18 },
    { el: heroVisual.querySelector('.polaroid'), depth: 10 },
  ].filter((layer) => layer.el);
  let rafId = null;
  let targetX = 0;
  let targetY = 0;

  hero.addEventListener('mousemove', (event) => {
    const rect = heroVisual.getBoundingClientRect();
    targetX = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
    targetY = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        layers.forEach(({ el, depth }) => {
          el.style.translate = `${targetX * depth}px ${targetY * depth}px`;
        });
        rafId = null;
      });
    }
  });
  hero.addEventListener('mouseleave', () => {
    layers.forEach(({ el }) => { el.style.translate = '0px 0px'; });
  });
}

// ===== Липкая кнопка «Записаться» на мобильных: появляется, когда герой ушёл из вида =====
const stickyCta = document.querySelector('.sticky-cta');
const heroSection = document.getElementById('hero');
if (stickyCta && heroSection) {
  const ctaObserver = new IntersectionObserver(
    ([entry]) => {
      stickyCta.classList.toggle('sticky-cta--visible', !entry.isIntersecting);
    },
    { rootMargin: '-76px 0px 0px 0px' }
  );
  ctaObserver.observe(heroSection);
}
