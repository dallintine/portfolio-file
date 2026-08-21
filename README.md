# Samuel Egwu - Professional Portfolio

A clean, modern, and responsive portfolio website built with React, Vite, and Tailwind CSS. This website showcases my projects, skills, and professional experience as a Full-Stack .NET Developer.

## 🚀 Quick Start

Follow these steps to get the project running on your local machine.

### 1. Prerequisites

Ensure you have the following installed:
- **Node.js**: Version 18.0 or higher
- **npm**: (Comes with Node.js) or **Yarn**

### 2. Installation

1. **Clone the repository** (if applicable) or download the source code.
2. **Open your terminal** and navigate to the project root directory.
3. **Install dependencies**:
   ```bash
   npm install
   ```

### 3. Development Server

Start the local development server:
```bash
npm run dev
```
Once the server starts, you can view the website at `http://localhost:3000`.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

---

## 📁 Project Structure

- `src/constants.ts`: **The data hub.** Update this file to change your biography, projects, skills levels, and work history.
- `src/App.tsx`: The main application structure and UI components.
- `src/index.css`: Global styles and theme configurations (colors, fonts, custom gradients).
- `src/types.ts`: TypeScript interfaces for consistent data structures.

---

## 🎨 Customization

The portfolio is designed to be easily updated:
1. **Change Colors**: Modify the `@theme` block in `src/index.css`.
2. **Update Content**: Edit `PERSONAL_INFO`, `PROJECTS`, or `SKILLS` in `src/constants.ts`.
3. **Add Assets**: Place images in the `public/` directory and reference them in your components.

---

## 📦 Building for Production

To create an optimized production build:
```bash
npm run build
```
The output will be in the `dist/` folder, ready to be hosted on platforms like Vercel, Netlify, or your own Linux dedicated server.
