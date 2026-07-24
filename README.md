# Alex Johnson — Personal Portfolio Website

A clean, professional, and fully responsive personal portfolio website built with **HTML**, **JavaScript**, and **Tailwind CSS** (via CDN). Designed for frontend developers seeking recruiter-friendly presentation.

## 🌐 Live Demo

Deploy instantly on **GitHub Pages** or **Netlify** — no build step required!

## ✨ Features

- **Dark / Light Mode** — toggle with one click, preference saved in `localStorage`
- **Animated Hero** — typed-text role cycling, floating gradient blobs
- **Scroll Reveal** — elements animate in as you scroll using IntersectionObserver
- **Project Modal** — click any project image to preview it full-size
- **Responsive Navbar** — hamburger menu on mobile, active link highlighting on scroll
- **Skill Bars & Badges** — visual proficiency indicators with hover animations
- **Contact Form** — client-side validation with friendly feedback messages
- **Glassmorphism Navbar** — subtle blur on scroll

## 📁 File Structure

```
Portofolio/
├── index.html              # Main HTML file (all sections)
├── README.md               # This file
└── assets/
    ├── css/
    │   └── input.css       # Custom base styles (Tailwind extended)
    ├── js/
    │   └── main.js         # Dark mode, menu, animations, modal, form
    └── images/
        ├── profile.png     # Profile photo
        ├── project-1.png   # Analytics Dashboard
        ├── project-2.png   # E-Commerce Store
        └── project-3.png   # Task Manager App
```

## 🛠️ Tech Stack

| Technology       | Purpose                        |
|-----------------|--------------------------------|
| HTML5           | Semantic page structure        |
| Tailwind CSS    | Utility-first styling (CDN)    |
| Vanilla JS      | Interactions & animations      |
| Google Fonts    | Inter typeface                 |

## 🚀 Deployment

### GitHub Pages
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages → Source → main branch**
3. Your site will be live at `https://yourusername.github.io/repo-name/`

### Netlify
1. Drag & drop the project folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Instantly live — no configuration needed

## 🎨 Customization

| What to change          | Where                            |
|------------------------|----------------------------------|
| Name & role            | `index.html` → Hero section      |
| Profile photo          | Replace `assets/images/profile.png` |
| Projects               | `index.html` → Projects section   |
| Skills & percentages   | `index.html` → Skills section     |
| Contact links          | `index.html` → Contact section    |
| Typed roles            | `assets/js/main.js` → `roles` array |
| Color palette          | `index.html` → Tailwind config    |

## 📄 License

MIT — free to use and customize for personal and commercial projects.
