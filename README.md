# Siddharth Singh — Personal Portfolio

Hey there! 👋 Welcome to the repository for my personal portfolio website. I built this to showcase my projects, skills, and to provide a way for people to get in touch with me.

Initially, this started as a purely frontend React application for my college assignment, but I've recently upgraded it by adding a custom Node.js/Express backend to handle data serving and form submissions dynamically.

## 🚀 Tech Stack

**Frontend:**
- **React 19** with **Vite**
- **React Router** for clean, client-side navigation
- **Pure CSS** (No UI frameworks used — fully custom styling with light/dark mode support)

**Backend:**
- **Node.js & Express** 
- **CORS & dotenv** for configuration and security
- **File System (`fs`)** for serving project data via JSON

## ✨ Features

- **Dynamic Projects Showcase**: Fetches all project details directly from the internal Express backend API.
- **Working Contact Form**: Submits messages seamlessly to the backend API, featuring full frontend validation.
- **Light & Dark Mode**: Persistent theme switching using `localStorage` so your preference is remembered.
- **Fully Responsive**: Carefully customized layout for desktop, tablet, and mobile viewing.
- **Accessible**: Built with semantic HTML, keyboard focus states, and WCAG contrast guidelines in mind.

## 🛠️ Setup & Installation

To get this up and running on your local machine, you'll need Node.js installed.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SidSin10-ux/React_Portfolio.git
   cd FSD
   ```

2. **Install Frontend Dependencies:**
   From the root folder, run:
   ```bash
   npm install
   ```

3. **Install Backend Dependencies:**
   ```bash
   cd server
   npm install
   ```

## 🏃‍♂️ Running Locally

Since the project now has a dedicated backend, you'll need to run both the frontend and backend servers concurrently.

**1. Start the Backend API:**
Open a terminal and start the Express server:
```bash
cd server
npm start
```
*The server will start on `http://localhost:5000`.*

**2. Start the Frontend App:**
Open a new terminal window at the root directory and run:
```bash
npm run dev
```
*The React app will be available at `http://localhost:5173`. Simply open that URL in your browser!*

## 🔌 API Endpoints

I've shifted the data management to this backend instead of hardcoding it in React. If you want to interact directly with the API, here are the available REST endpoints:

- `GET /api/projects` — Fetches all portfolio projects.
- `GET /api/projects/:id` — Fetches a specific project by its ID.
- `POST /api/contact` — Submits the contact form (requires `name`, `email`, and `message`).
- `GET /api/contact` — Retrieves all submitted contact messages.

## 📁 Project Structure

Here's a quick look at how I've organized the project:
```
├── server/               # Express backend API
│   ├── data/             # JSON data (like projects.json)
│   └── index.js          # API endpoints and configuration
├── src/                  # React frontend code
│   ├── components/       # Reusable UI elements (Navbar, Cards, etc.)
│   ├── pages/            # Page templates (Home, About, Projects)
│   ├── App.jsx           # Main routing & state setup
│   └── index.css         # Custom styling variables
└── ...
```

## 🔗 Links
- **GitHub Repository**: [SidSin10-ux/React_Portfolio](https://github.com/SidSin10-ux/React_Portfolio)
- **Google Drive Link**: [Project Files](https://drive.google.com/drive/folders/1aKKP_gDlw3RknhvU56UywyeeqT2DdFWq?usp=sharing)

---
*Feel free to reach out to me through the contact form on the site if you have any questions, feedback, or just want to connect!*
