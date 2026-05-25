# James Eboka — Personal Portfolio 🌐

A clean, minimal multi-page portfolio website showcasing my projects and journey as a self-taught frontend developer. Built with React and React Router, styled with Tailwind CSS.

**Live Demo:** (https://james-eboka.vercel.app/project)
---

## ✨ Features

- 🧭 Multi-page navigation powered by React Router v7
- 📌 Sticky navbar that stays visible while scrolling
- 🎨 Clean, minimalist black and white design
- 📱 Fully mobile responsive
- 📧 Working contact form integrated with Formspree
- ⚡ Smooth client-side navigation (no page reloads)

---

## 🛠️ Built With

React • Vite • React Router v7 • Tailwind CSS • Formspree • Vercel

---

## 🗺️ Page Structure

| Route | Page | Content |
|---|---|---|
| `/` | Home | Hero section with intro |
| `/about` | About | About me + Skills |
| `/projects` | Projects | Showcase of my deployed projects |
| `/contact` | Contact | Contact form + Social media links |

---

## 📚 What I Learned

This was originally built as a single-page React app, then refactored into a multi-page experience to practice React Router:

- Setting up `BrowserRouter`, `Routes`, and `Route` components
- Internal navigation with `<Link>` instead of `<a>` tags
- Organizing code into `pages/` and `components/` folders
- Sticky navigation with Tailwind's `sticky top-0 z-50`
- Refactoring existing code without breaking functionality
- Reading and debugging React Router error messages

---

## 🚀 Getting Started

```bash
git clone https://github.com/jameschibueze25-ux/your-portfolio.git
cd your-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📂 Project Structure

```
src/
 ├── components/
 │    ├── NavBarSection.jsx
 │    ├── HeroSection.jsx
 │    ├── AboutSection.jsx
 │    ├── SkillSection.jsx
 │    ├── ProjectSection.jsx
 │    ├── SocialMediaSection.jsx
 │    └── ContactSection.jsx
 ├── pages/
 │    ├── HomePage.jsx
 │    ├── AboutPage.jsx
 │    ├── ProjectPage.jsx
 │    └── ContactPage.jsx
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

## 🎨 Design Philosophy

Inspired by minimalist designer portfolios. The focus is on clarity, readability, and letting the work speak for itself. No flashy animations, no loud colors — just clean typography, generous spacing, and a single accent of black against white.

---

## 📈 Version History

**v2 (current)** — Refactored into multi-page app with React Router

**v1** — Single-page scrolling site (initial release)

---

## 👤 Author

**James Eboka** — Self-taught Frontend Developer

- LinkedIn: [james-eboka](https://www.linkedin.com/in/james-eboka-a99a77235/)
- GitHub: [jameschibueze25-ux](https://github.com/jameschibueze25-ux)
- Email: JamesChibueze25@gmail.com

---

*Built as part of my self-taught journey from warehouse worker to frontend developer.* 🙏
