# 🎯 React.js Week 3 Project - TaskFlow

A modern, responsive React application built with Vite, featuring task management, API integration, and dark mode support.

## 🚀 Features

- **📱 Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **🎨 Dark/Light Mode** - Toggle between themes with persistence
- **✅ Task Management** - Add, complete, delete, and filter tasks
- **🌐 API Integration** - Fetch and display data from JSONPlaceholder
- **⚡ Modern React** - Built with React 18, Hooks, and Context API
- **🎯 Tailwind CSS** - Utility-first styling with custom animations

## 🛠️ Tech Stack

- **Frontend**: React.js 18, JSX
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Build Tool**: Vite
- **State Management**: React Hooks & Context API

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd react-week3-project
Install dependencies

bash
npm install
Start development server

bash
npm run dev
Build for production

bash
npm run build
🎮 Usage
Task Management
Add new tasks using the input form

Mark tasks as completed using checkboxes

Filter tasks by status (All, Active, Completed)

Delete individual tasks or clear all completed tasks

API Demo
Browse posts from JSONPlaceholder API

Search through posts using the search bar

Load more posts with pagination

View loading and error states

Theme Switching
Toggle between light and dark modes using the theme button

Theme preference is saved in localStorage

📁 Project Structure
text
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI components (Button, Card, Navbar)
│   ├── layout/         # Layout components (Layout, Footer)
│   └── tasks/          # Task-specific components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── context/            # React Context providers
└── utils/              # Utility functions and constants
🎨 Styling
This project uses Tailwind CSS with the following features:

Responsive design utilities

Dark mode variant classes

Custom animations and transitions

Component-based styling with @apply directive

🔧 Customization
Adding New Components
Create component file in appropriate folder

Export component as default

Import and use in pages

Modifying Themes
Edit tailwind.config.js to customize:

Color palette

Typography

Spacing

Animations

📱 Responsive Breakpoints
sm: 640px and up

md: 768px and up

lg: 1024px and up

xl: 1280px and up

🚀 Deployment
Vercel
bash
npm install -g vercel
vercel
Netlify
bash
npm run build
# Drag dist folder to Netlify
GitHub Pages
bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
npm run deploy
📄 License
MIT License - feel free to use this project for learning and development.

👨‍💻 Author
Built as part of React.js Week 3 curriculum assignment.

Happy Coding! 🎉

text

## 🚀 Deployment Instructions

### Vercel Deployment
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy

### Netlify Deployment
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Your app will be deployed automatically

### GitHub Pages
Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
Then run:

bash
npm run deploy