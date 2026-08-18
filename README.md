# Siddharth Singh — Portfolio (React · Assignment 2)

A personal portfolio website built with **React + Vite + react-router-dom**.  
This project is the React continuation of the HTML/CSS Assignment 1 portfolio.

---

## 1. Project Overview

A multi-page portfolio showcasing projects, skills, and a contact form.  
Demonstrates core React concepts required for Assignment 2:
**functional components, props, prop drilling, useState, useEffect, react-router-dom, controlled forms, and localStorage persistence.**

---

## 2. Technologies

| Tool | Purpose |
|------|---------|
| React 19 | UI library |
| Vite 8 | Build tool / dev server |
| react-router-dom 7 | Client-side routing |
| Plain CSS (App.css / index.css) | All styling — no UI frameworks |

---

## 3. Installation

```bash

npm install
```

> `node_modules` is **not** included in the submission ZIP.

---

## 4. Running Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 5. Build Command

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 6. Component Structure

```
src/
├── assets/               # SVG project images
├── components/
│   ├── Navbar.jsx        # Sticky nav bar with theme toggle + mobile menu
│   ├── Footer.jsx        # Persistent footer
│   ├── ProjectCard.jsx   # Reusable card; owns its own "showDetails" state
│   ├── ProjectInfo.jsx   # Tech-stack + link (receives props from ProjectCard)
│   ├── Skills.jsx        # Renders any array of skills as pills
│   └── ContactForm.jsx   # Controlled form with validation
├── data/
│   └── projects.js       # Single source of truth for all project data
├── pages/
│   ├── Home.jsx          # Hero + skills highlight; useEffect loading
│   ├── About.jsx         # Bio, education, full skills
│   ├── Projects.jsx      # Maps projects.js → <ProjectCard>
│   ├── ProjectDetails.jsx# Dynamic /projects/:projectId page
│   ├── Contact.jsx       # Contact info + <ContactForm>
│   └── NotFound.jsx      # 404 catch-all
├── App.jsx               # Routes + shared layout + lifted theme state
├── App.css               # All CSS variables, animations, responsive rules
└── main.jsx              # React root + BrowserRouter
```

---

## 7. Props

Every piece of data that flows **between** components is passed as props:

- `<Navbar theme={theme} onToggleTheme={toggleTheme} />` — theme state + toggle function from App
- `<ProjectCard id title description image techStack link />` — all fields from projects.js
- `<ProjectInfo techStack={techStack} link={link} />` — forwarded from ProjectCard
- `<Skills skills={[...]} title="..." />` — reusable with any skill array

---

## 8. Prop Drilling

Prop drilling is explicitly demonstrated across **two component levels**:

```
Projects.jsx
  reads projects.js, passes fields → to ProjectCard

ProjectCard.jsx
  receives all props, forwards techStack + link → to ProjectInfo

ProjectInfo.jsx
  renders tech pills + GitHub link — never touches projects.js directly
```

Comments in each file mark the drilling levels for easy viva explanation.

---

## 9. useState

| Component | State | Purpose |
|-----------|-------|---------|
| `App.jsx` | `theme` | Current colour theme ("light" or "dark") |
| `Navbar.jsx` | `menuOpen` | Mobile hamburger menu open/closed |
| `ProjectCard.jsx` | `showDetails` | Per-card "View Details" toggle |
| `ContactForm.jsx` | `formData` | Controlled input values |
| `ContactForm.jsx` | `errors` | Per-field validation messages |
| `ContactForm.jsx` | `submitted` | Success message flag |
| `Home.jsx` | `isLoading` | Loading screen before content shows |

---

## 10. State Lifting

`theme` state lives in `App.jsx` (not Navbar) so the body class switch applies
globally and both Navbar (toggle button) and the entire CSS variable system can
read it from one source. This is the "lift state to the nearest common ancestor"
pattern.

```jsx

const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

<Navbar theme={theme} onToggleTheme={toggleTheme} />
```

---

## 11. useEffect

**Effect 1 — Home loading sequence** (`Home.jsx`):
```jsx
useEffect(() => {
  const timer = setTimeout(() => setIsLoading(false), 1000);
  return () => clearTimeout(timer); 
}, []); 
```

**Effect 2 — Theme persistence** (`App.jsx`):
```jsx
useEffect(() => {
  localStorage.setItem("theme", theme);
  document.body.className = theme === "dark" ? "theme-dark" : "theme-light";
}, [theme]); 
```

---

## 12. localStorage

On first load, `useState` reads the saved theme:
```jsx
const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
```
Whenever theme changes, `useEffect` writes it back:
```jsx
localStorage.setItem("theme", theme);
```
This means the chosen theme survives a page refresh with no flash.

---

## 13. Routing

All routes are declared in `App.jsx` using `<Routes>` and `<Route>`:

| Path | Component |
|------|-----------|
| `/` | Home |
| `/Home` | Home |
| `/about` | About |
| `/projects` | Projects |
| `/projects/:projectId` | ProjectDetails |
| `/contact` | Contact |
| `*` | NotFound (404) |

Navigation uses `<NavLink>` / `<Link>` — never plain `<a href>` — so the browser
does not do a full page reload.

---

## 14. Dynamic Project Route

`/projects/:projectId` (e.g. `/projects/qtrack`) is handled by a single
`ProjectDetails.jsx` component:

```jsx
const { projectId } = useParams();          
const project = projects.find(p => p.id === projectId);


If the ID is unknown, a "Project Not Found" message is displayed instead of crashing.

---

## 15. Form Validation

`ContactForm.jsx` is a fully **controlled** form:
- Every input has `value={formData.field}` and `onChange={handleChange}`
- A `validate()` function checks name (required), email (required + regex), message (required)
- Errors are stored in `errors` state and displayed below each field
- The submit button is `disabled` until all fields pass validation
- `aria-invalid` and `aria-describedby` connect error messages accessibly
- On success, a confirmation message is shown; no backend/API is needed

---

## 16. Responsive Design

Three layout tiers via CSS media queries:

| Breakpoint | Layout change |
|------------|--------------|
| > 768px (desktop) | 3-column project grid, 2-column contact layout |
| ≤ 768px (tablet) | 2-column project grid, stacked contact, hamburger nav |
| ≤ 480px (mobile) | 1-column project grid, stacked hero buttons |

---

## 17. Accessibility

- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Every form input has a `<label htmlFor>` and matching `id`
- Error messages use `aria-describedby` + `aria-invalid`
- Every interactive element has a visible `:focus-visible` outline
- `prefers-reduced-motion` media query disables all animations for users who need it
- WCAG 2.1 AA contrast targets for all text/background combinations
- Hamburger button uses `aria-expanded` and `aria-controls`
- Images have descriptive `alt` text

---

## 18. AI Assistance Disclosure

Parts of this project were developed with the assistance of an AI coding
assistant (Google Antigravity). The AI helped with:
- Reviewing WCAG contrast ratios
- Writing comments explaining assignment concepts

Github repository
