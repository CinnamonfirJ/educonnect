# EduConnect

## React + Vite

This project uses React with Vite for a minimal setup with Hot Module Replacement (HMR) and ESLint rules.

### Vite Plugins

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh

## Tech Stack

- React
- Vite
- ESLint
- Tailwind CSS
- PostCSS

## Project Structure

\`\`\`
educonnect/
├── public/
│ └── favicon.ico
│
├── src/
│ ├── assets/
│ │ └── images/
│ │
│ ├── components/
│ │ ├── common/
│ │ │ ├── Button.jsx
│ │ │ └── Input.jsx
│ │ │
│ │ └── layout/
│ │ ├── Header.jsx
│ │ └── Footer.jsx
│ │
│ ├── hooks/
│ │ └── useForm.js
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ └── About.jsx
│ │
│ ├── services/
│ │ └── api.js
│ │
│ ├── styles/
│ │ └── index.css
│ │
│ ├── utils/
│ │ └── helpers.js
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── tests/
│ └── App.test.js
│
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
\`\`\`

This structure provides a clear overview of the project organization:

- `public/`: Contains static assets like favicon
- `src/`: Main source code directory
  - `assets/`: For images and other media files
  - `components/`: Reusable React components
  - `hooks/`: Custom React hooks
  - `pages/`: Individual page components
  - `services/`: API and other services
  - `styles/`: Global styles and CSS files
  - `utils/`: Utility functions and helpers
- `tests/`: Test files for the application
- Configuration files are at the root level
