# Лендинг студии шугаринга — план реализации

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Цель:** одностраничный лендинг студии шугаринга «Сахар» в светлых карамельно-бежевых тонах по спецификации `docs/superpowers/specs/2026-07-18-sugaring-landing-design.md`.

**Архитектура:** три файла без сборки — `index.html` (разметка), `styles.css` (дизайн-система на CSS-переменных, mobile-first), `script.js` (ванильный JS: аккордеон, бургер-меню, липкая шапка, reveal-анимации). Работает с `file://` и любого статического хостинга.

**Стек:** HTML5, CSS3 (custom properties, grid, flex, clamp), ванильный JS (ES6+), Google Fonts (Playfair Display + Manrope) с системным фолбэком.

**Примечание про git:** репозиторий не инициализирован — шаги коммитов опущены. По желанию пользователя выполнить `git init` и коммитить после каждой задачи.

**Спецификация контента (единый источник для всех задач):**
- Телефон: `+7 (900) 000-00-00`, ссылка `tel:+79000000000`
- WhatsApp: `https://wa.me/79000000000`
- Telegram: `https://t.me/username`
- Адрес: «г. Москва, ул. Примерная, д. 1», ежедневно 10:00–20:00

---

### Task 1: `index.html` — разметка всех секций

**Files:**
- Create: `index.html`

- [ ] **Step 1: Создать `index.html` с полной разметкой**

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Студия шугаринга «Сахар» — гладкая кожа надолго</title>
  <meta name="description" content="Студия шугаринга «Сахар». Профессиональная сахарная эпиляция: ноги, руки, бикини. Стерильно, безопасно, с заботой о вас.">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍯</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="header" id="header">
    <div class="container header__inner">
      <a class="logo" href="#hero">Сахар</a>
      <nav class="nav" id="nav" aria-label="Основная навигация">
        <a href="#services" class="nav__link">Услуги и цены</a>
        <a href="#faq" class="nav__link">Вопросы</a>
        <a href="#contacts" class="nav__link">Контакты</a>
        <a href="https://wa.me/79000000000" class="btn btn--small">Записаться</a>
      </nav>
      <button class="burger" id="burger" aria-label="Открыть меню" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <main>
    <section class="hero" id="hero">
      <div class="container hero__inner">
        <div class="hero__text reveal">
          <p class="hero__badge">Студия шугаринга</p>
          <h1>Гладкая кожа надолго — <span class="accent">без боли и раздражения</span></h1>
          <p class="hero__subtitle">Сахарная эпиляция в студии «Сахар»: стерильные материалы, сертифицированный мастер и натуральная паста. Результат — до 4 недель гладкости.</p>
          <div class="hero__actions">
            <a class="btn" href="https://wa.me/79000000000">Записаться в WhatsApp</a>
            <a class="btn btn--ghost" href="https://t.me/username">Мы в Telegram</a>
          </div>
          <ul class="hero__points">
            <li>100% стерильность</li>
            <li>Натуральная паста</li>
            <li>Опыт мастера 7 лет</li>
          </ul>
        </div>
        <div class="hero__visual reveal" aria-hidden="true">
          <div class="blob blob--1"></div>
          <div class="blob blob--2"></div>
          <div class="hero-card">
            <span class="hero-card__emoji">🍯</span>
            <p class="hero-card__title">3–4 недели</p>
            <p class="hero-card__text">гладкой кожи после одной процедуры</p>
          </div>
          <div class="hero-chip hero-chip--1">Без вросших волос</div>
          <div class="hero-chip hero-chip--2">Подходит чувствительной коже</div>
        </div>
      </div>
    </section>

    <section class="section services" id="services">
      <div class="container">
        <h2 class="reveal">Услуги и цены</h2>
        <p class="section__subtitle reveal">Цены указаны за процедуру. При первом визите — консультация мастера в подарок.</p>
        <div class="services__grid">
          <article class="service-card reveal">
            <h3>Глубокое бикини</h3>
            <p class="service-card__desc">Полное удаление волос в зоне бикини. Деликатно и быстро.</p>
            <p class="service-card__price">2 500 ₽</p>
            <p class="service-card__time">≈ 40 минут</p>
            <a class="btn btn--small" href="https://wa.me/79000000000?text=Здравствуйте!%20Хочу%20записаться%20на%20глубокое%20бикини">Записаться</a>
          </article>
          <article class="service-card reveal">
            <h3>Бикини классическое</h3>
            <p class="service-card__desc">Аккуратная линия бикини по краю белья.</p>
            <p class="service-card__price">1 500 ₽</p>
            <p class="service-card__time">≈ 25 минут</p>
            <a class="btn btn--small" href="https://wa.me/79000000000?text=Здравствуйте!%20Хочу%20записаться%20на%20классическое%20бикини">Записаться</a>
          </article>
          <article class="service-card reveal">
            <h3>Ноги полностью</h3>
            <p class="service-card__desc">Голени и бёдра. Кожа гладкая и ухоженная надолго.</p>
            <p class="service-card__price">2 000 ₽</p>
            <p class="service-card__time">≈ 60 минут</p>
            <a class="btn btn--small" href="https://wa.me/79000000000?text=Здравствуйте!%20Хочу%20записаться%20на%20ноги%20полностью">Записаться</a>
          </article>
          <article class="service-card reveal">
            <h3>Голени</h3>
            <p class="service-card__desc">Удаление волос ниже колена. Успеете в обеденный перерыв.</p>
            <p class="service-card__price">1 000 ₽</p>
            <p class="service-card__time">≈ 30 минут</p>
            <a class="btn btn--small" href="https://wa.me/79000000000?text=Здравствуйте!%20Хочу%20записаться%20на%20голени">Записаться</a>
          </article>
          <article class="service-card reveal">
            <h3>Руки полностью</h3>
            <p class="service-card__desc">От кистей до плеч. Мягкая паста не травмирует тонкую кожу.</p>
            <p class="service-card__price">900 ₽</p>
            <p class="service-card__time">≈ 30 минут</p>
            <a class="btn btn--small" href="https://wa.me/79000000000?text=Здравствуйте!%20Хочу%20записаться%20на%20руки%20полностью">Записаться</a>
          </article>
          <article class="service-card reveal">
            <h3>Подмышки</h3>
            <p class="service-card__desc">Всего 10–15 минут, а результат держится до месяца.</p>
            <p class="service-card__price">800 ₽</p>
            <p class="service-card__time">≈ 15 минут</p>
            <a class="btn btn--small" href="https://wa.me/79000000000?text=Здравствуйте!%20Хочу%20записаться%20на%20подмышки">Записаться</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section faq" id="faq">
      <div class="container container--narrow">
        <h2 class="reveal">Частые вопросы</h2>
        <div class="faq__list">
          <div class="faq-item reveal">
            <button class="faq-item__question" aria-expanded="false">
              Это больно?
              <span class="faq-item__icon" aria-hidden="true"></span>
            </button>
            <div class="faq-item__answer">
              <p>Ощущения индивидуальны, но шугаринг переносится легче воска: паста снимается по направлению роста волос и не травмирует кожу. С каждой процедурой волосы становятся тоньше, а дискомфорт — меньше.</p>
            </div>
          </div>
          <div class="faq-item reveal">
            <button class="faq-item__question" aria-expanded="false">
              Как подготовиться к процедуре?
              <span class="faq-item__icon" aria-hidden="true"></span>
            </button>
            <div class="faq-item__answer">
              <p>За 2–3 дня сделайте лёгкий скраб, в день визита не наносите кремы и масла, приходите в свободной одежде. Длина волос — от 4–5 мм.</p>
            </div>
          </div>
          <div class="faq-item reveal">
            <button class="faq-item__question" aria-expanded="false">
              Сколько держится эффект?
              <span class="faq-item__icon" aria-hidden="true"></span>
            </button>
            <div class="faq-item__answer">
              <p>В среднем 3–4 недели. При регулярных процедурах волосы растут медленнее и становятся тоньше, а интервалы между визитами увеличиваются.</p>
            </div>
          </div>
          <div class="faq-item reveal">
            <button class="faq-item__question" aria-expanded="false">
              Какой длины должны быть волосы?
              <span class="faq-item__icon" aria-hidden="true"></span>
            </button>
            <div class="faq-item__answer">
              <p>Оптимально 4–5 мм — это примерно две недели после бритья. Если волосы длиннее 8 мм, мастер аккуратно укоротит их перед процедурой.</p>
            </div>
          </div>
          <div class="faq-item reveal">
            <button class="faq-item__question" aria-expanded="false">
              Какие есть противопоказания?
              <span class="faq-item__icon" aria-hidden="true"></span>
            </button>
            <div class="faq-item__answer">
              <p>Повреждения и воспаления кожи в зоне процедуры, кожные заболевания в стадии обострения, сахарный диабет в стадии декомпенсации. При беременности и варикозе — предварительно проконсультируйтесь с врачом.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section contacts" id="contacts">
      <div class="container">
        <h2 class="reveal">Контакты</h2>
        <div class="contacts__grid">
          <div class="contacts__info reveal">
            <p><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1</p>
            <p><strong>Часы работы:</strong> ежедневно с 10:00 до 20:00</p>
            <p><strong>Телефон:</strong> <a href="tel:+79000000000">+7 (900) 000-00-00</a></p>
            <p><strong>Запись:</strong> в WhatsApp или Telegram — ответим в течение 15 минут.</p>
            <div class="contacts__actions">
              <a class="btn" href="https://wa.me/79000000000">WhatsApp</a>
              <a class="btn btn--ghost" href="https://t.me/username">Telegram</a>
            </div>
          </div>
          <div class="contacts__map reveal" role="img" aria-label="Схема проезда: ул. Примерная, д. 1"></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer__inner">
      <p>© 2026 Студия шугаринга «Сахар»</p>
      <div class="footer__social">
        <a href="https://t.me/username">Telegram</a>
        <a href="https://wa.me/79000000000">WhatsApp</a>
        <a href="tel:+79000000000">+7 (900) 000-00-00</a>
      </div>
    </div>
  </footer>

  <script src="script.js" defer></script>
</body>
</html>
```

- [ ] **Step 2: Проверить структуру разметки**

Run:
```bash
grep -o 'id="hero"\|id="services"\|id="faq"\|id="contacts"\|id="header"\|id="nav"\|id="burger"' index.html | sort | uniq -c
```
Expected: по одному вхождению каждого из 7 id.

Run:
```bash
grep -c 'class="service-card reveal"' index.html && grep -c 'faq-item__question' index.html
```
Expected: `6` и `5`.

Run:
```bash
grep -c 'href="styles.css"' index.html && grep -c 'src="script.js"' index.html
```
Expected: `1` и `1`.

---

### Task 2: `styles.css` — дизайн-система и адаптив

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Создать `styles.css`**

```css
/* ============ Дизайн-токены ============ */
:root {
  --bg: #FDF9F4;
  --card: #FFFFFF;
  --text: #3E2F25;
  --text-light: #8A7663;
  --accent: #C8956C;
  --accent-dark: #A9714B;
  --accent-soft: #F5E7D9;
  --radius: 20px;
  --shadow: 0 10px 30px rgba(169, 113, 75, 0.12);
  --font-head: 'Playfair Display', Georgia, serif;
  --font-body: 'Manrope', -apple-system, 'Segoe UI', sans-serif;
}

/* ============ База ============ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-body);
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.container--narrow { max-width: 760px; }

h1, h2, h3 { font-family: var(--font-head); line-height: 1.2; }

h1 { font-size: clamp(2rem, 5vw, 3.4rem); }
h2 { font-size: clamp(1.7rem, 4vw, 2.5rem); text-align: center; }

.section { padding: 90px 0; }
.section__subtitle {
  text-align: center;
  color: var(--text-light);
  max-width: 560px;
  margin: 16px auto 48px;
}

section[id] { scroll-margin-top: 84px; }

/* ============ Кнопки ============ */
.btn {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 999px;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(200, 149, 108, 0.35);
  transition: background 0.25s, transform 0.25s, box-shadow 0.25s;
}
.btn:hover { background: var(--accent-dark); transform: translateY(-2px); }
.btn--ghost {
  background: transparent;
  color: var(--accent-dark);
  border: 2px solid var(--accent);
  box-shadow: none;
}
.btn--ghost:hover { background: var(--accent-soft); transform: translateY(-2px); }
.btn--small { padding: 10px 22px; font-size: 0.95rem; }

/* ============ Шапка ============ */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(253, 249, 244, 0.85);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  transition: box-shadow 0.3s;
}
.header--scrolled { box-shadow: 0 4px 20px rgba(62, 47, 37, 0.08); }
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.logo {
  font-family: var(--font-head);
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--accent-dark);
  text-decoration: none;
}
.nav { display: flex; align-items: center; gap: 28px; }
.nav__link {
  color: var(--text);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}
.nav__link:hover { color: var(--accent-dark); }

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}
.burger span {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s;
}
.burger--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger--open span:nth-child(2) { opacity: 0; }
.burger--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ============ Герой ============ */
.hero { padding: 72px 0 96px; overflow: hidden; }
.hero__inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 60px;
  align-items: center;
}
.hero__badge {
  display: inline-block;
  padding: 6px 16px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-dark);
  font-weight: 600;
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.accent { color: var(--accent-dark); }
.hero__subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
  margin: 24px 0 32px;
  max-width: 480px;
}
.hero__actions { display: flex; gap: 16px; flex-wrap: wrap; }
.hero__points {
  list-style: none;
  display: flex;
  gap: 24px;
  margin-top: 36px;
  flex-wrap: wrap;
}
.hero__points li {
  position: relative;
  padding-left: 24px;
  font-weight: 500;
  font-size: 0.95rem;
}
.hero__points li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent-dark);
  font-weight: 700;
}

.hero__visual { position: relative; height: 420px; }
.blob { position: absolute; border-radius: 50%; }
.blob--1 {
  width: 340px;
  height: 340px;
  right: 0;
  top: 20px;
  background: linear-gradient(135deg, #F0D5BC, #E4B98F);
}
.blob--2 {
  width: 200px;
  height: 200px;
  left: 0;
  bottom: 0;
  background: linear-gradient(135deg, #F8E9DA, #EFD3B8);
}
.hero-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 36px 32px;
  text-align: center;
  width: 240px;
}
.hero-card__emoji { font-size: 2.6rem; }
.hero-card__title {
  font-family: var(--font-head);
  font-size: 1.8rem;
  color: var(--accent-dark);
  margin: 8px 0 4px;
}
.hero-card__text { color: var(--text-light); font-size: 0.95rem; }
.hero-chip {
  position: absolute;
  background: var(--card);
  border-radius: 999px;
  box-shadow: var(--shadow);
  padding: 10px 18px;
  font-size: 0.85rem;
  font-weight: 600;
}
.hero-chip--1 { top: 40px; left: 10px; }
.hero-chip--2 { bottom: 30px; right: 0; }

/* ============ Услуги ============ */
.services {
  background: linear-gradient(180deg, var(--bg), #FBF2E9 50%, var(--bg));
}
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.service-card {
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s;
}
.service-card:hover { transform: translateY(-6px); }
.service-card h3 { font-size: 1.35rem; margin-bottom: 10px; }
.service-card__desc { color: var(--text-light); font-size: 0.95rem; flex-grow: 1; }
.service-card__price {
  font-family: var(--font-head);
  font-size: 1.7rem;
  color: var(--accent-dark);
  margin: 18px 0 2px;
}
.service-card__time { color: var(--text-light); font-size: 0.85rem; margin-bottom: 20px; }
.service-card .btn { align-self: flex-start; }

/* ============ FAQ ============ */
.faq__list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 48px;
}
.faq-item {
  background: var(--card);
  border-radius: 16px;
  box-shadow: var(--shadow);
  overflow: hidden;
}
.faq-item__question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 22px 26px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-body);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text);
  text-align: left;
}
.faq-item__icon { position: relative; flex-shrink: 0; width: 18px; height: 18px; }
.faq-item__icon::before,
.faq-item__icon::after {
  content: '';
  position: absolute;
  background: var(--accent-dark);
  border-radius: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.faq-item__icon::before { width: 18px; height: 2px; }
.faq-item__icon::after { width: 2px; height: 18px; transition: transform 0.3s; }
.faq-item--open .faq-item__icon::after { transform: translate(-50%, -50%) scaleY(0); }
.faq-item__answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s ease;
}
.faq-item--open .faq-item__answer { grid-template-rows: 1fr; }
.faq-item__answer > p {
  overflow: hidden;
  padding: 0 26px;
  color: var(--text-light);
}
.faq-item--open .faq-item__answer > p { padding-bottom: 24px; }

/* ============ Контакты ============ */
.contacts__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-top: 48px;
  align-items: stretch;
}
.contacts__info {
  background: var(--card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 36px;
}
.contacts__info p { margin-bottom: 14px; }
.contacts__info a { color: var(--accent-dark); text-decoration: none; font-weight: 600; }
.contacts__actions { display: flex; gap: 14px; margin-top: 24px; flex-wrap: wrap; }
.contacts__map {
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  min-height: 280px;
  background:
    radial-gradient(circle at 60% 40%, rgba(200, 149, 108, 0.25), transparent 45%),
    repeating-linear-gradient(0deg, transparent 0 38px, rgba(169, 113, 75, 0.12) 38px 40px),
    repeating-linear-gradient(90deg, transparent 0 38px, rgba(169, 113, 75, 0.12) 38px 40px),
    linear-gradient(135deg, #F7EBDD, #EFDCC6);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.contacts__map::before {
  content: '📍';
  font-size: 3rem;
  filter: drop-shadow(0 6px 10px rgba(62, 47, 37, 0.25));
}
.contacts__map::after {
  content: 'ул. Примерная, д. 1';
  position: absolute;
  bottom: 22px;
  background: var(--card);
  border-radius: 999px;
  padding: 8px 18px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: var(--shadow);
}

/* ============ Футер ============ */
.footer { background: #F4E8DB; padding: 32px 0; }
.footer__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.footer__social { display: flex; gap: 20px; flex-wrap: wrap; }
.footer__social a { color: var(--accent-dark); text-decoration: none; font-weight: 600; }

/* ============ Reveal-анимации ============ */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal--visible { opacity: 1; transform: none; }

@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; transition: none; }
  * { transition-duration: 0.01ms !important; }
}

/* ============ Адаптив ============ */
@media (max-width: 900px) {
  .hero__inner { grid-template-columns: 1fr; gap: 48px; }
  .hero__visual { height: 340px; }
  .services__grid { grid-template-columns: repeat(2, 1fr); }
  .contacts__grid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .section { padding: 64px 0; }
  .hero { padding: 48px 0 64px; }
  .services__grid { grid-template-columns: 1fr; }
  .burger { display: flex; }
  .nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    background: var(--bg);
    padding: 20px 24px 28px;
    gap: 18px;
    box-shadow: 0 24px 30px rgba(62, 47, 37, 0.12);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .nav--open { transform: translateY(0); opacity: 1; pointer-events: auto; }
}
```

- [ ] **Step 2: Проверить баланс скобок и наличие токенов**

Run:
```bash
python3 -c "s=open('styles.css').read(); print('braces diff:', s.count('{') - s.count('}'))"
```
Expected: `braces diff: 0`.

Run:
```bash
grep -c -- '--accent:\|--accent-dark:\|--bg:' styles.css
```
Expected: `3`.

---

### Task 3: `script.js` — интерактив

**Files:**
- Create: `script.js`

- [ ] **Step 1: Создать `script.js`**

```js
'use strict';

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
```

- [ ] **Step 2: Проверить синтаксис JS**

Run:
```bash
if command -v node >/dev/null 2>&1; then node --check script.js && echo "JS OK"; else echo "node не найден — синтаксис проверим в браузере на Task 4"; fi
```
Expected: `JS OK` либо сообщение о пропуске проверки.

- [ ] **Step 3: Проверить, что все селекторы из JS существуют в HTML/CSS**

Run:
```bash
grep -c 'id="header"\|id="burger"\|id="nav"' index.html
grep -c 'header--scrolled\|nav--open\|burger--open\|faq-item--open\|reveal--visible' styles.css
```
Expected: `3` и `9` (строки: 1 × header--scrolled, 3 × burger--open, 3 × faq-item--open, 1 × nav--open, 1 × reveal--visible).

---

### Task 4: Проверка в браузере (Playwright)

**Files:**
- Modify (при найденных проблемах): `index.html`, `styles.css`, `script.js`

- [ ] **Step 1: Запустить локальный сервер**

Run:
```bash
python3 -m http.server 8137
```
в фоне. Expected: сервер отвечает на `http://localhost:8137`.

- [ ] **Step 2: Десктоп — рендер и консоль**

Открыть `http://localhost:8137` в Playwright (viewport по умолчанию ~1280px), дождаться загрузки, сделать полностраничный скриншот `desktop.png`. Забрать console-сообщения уровня error.
Expected: страница рендерится, все секции видны; ошибок JS в консоли нет (возможные сетевые предупреждения о Google Fonts при офлайне — допустимы, фолбэк-шрифты подхватятся).

- [ ] **Step 3: Мобильная ширина — рендер и меню**

Изменить viewport на 375×800, перезагрузить, скриншот `mobile.png`. Кликнуть `#burger`, проверить, что у `#nav` появился класс `nav--open`, а `aria-expanded` у `#burger` стал `true`. Кликнуть ссылку «Услуги и цены» — меню закрылось, страница проскроллилась к `#services`.
Expected: всё так, горизонтального скролла нет.

- [ ] **Step 4: FAQ-аккордеон**

Кликнуть первый `.faq-item__question`. Expected: у родительского `.faq-item` появился класс `faq-item--open`, у кнопки `aria-expanded="true"`, ответ виден. Повторный клик — закрывает.

- [ ] **Step 5: Исправить найденные проблемы и повторить проверку**

Если что-то не сошло (overflow, неработающий аккордеон, ошибки консоли) — исправить в соответствующем файле и повторить Steps 2–4. После успеха остановить сервер (Ctrl+C / kill фоновой задачи).

- [ ] **Step 6: Финальный отчёт пользователю**

Кратко: что сделано, как открыть (`index.html` двойным кликом или через `python3 -m http.server`), какие строки контента заменить на свои (телефон, `wa.me/79000000000`, `t.me/username`, адрес, цены).
