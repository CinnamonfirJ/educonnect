# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# EduConnect Frontend Documentation

## Overview

EduConnect is a React-based web application built with Vite. This documentation covers the frontend architecture, setup process, and development guidelines.

## Tech Stack

- **React**: Frontend library for building user interfaces
- **Vite**: Next-generation frontend tooling
- **ESLint**: Code linting and style enforcement
- **Babel**: JavaScript compiler for using the latest ECMAScript features
- **Tailwind CSS**: Utility-first CSS framework for styling
- **PostCSS**: Tool for transforming CSS with JavaScript

## Project Structure

\`\`\`
educonnect/
├── public/ # Static assets
│ └── favicon.ico
├── src/ # Source code
│ ├── assets/ # Images, fonts, etc.
│ ├── components/ # Reusable React components
│ │ ├── common/ # Shared components like Button, Input, etc.
│ │ └── layout/ # Layout components like Header, Footer, etc.
│ ├── hooks/ # Custom React hooks
│ ├── pages/ # Page components
│ ├── services/ # API services and other business logic
│ ├── styles/ # Global styles and Tailwind CSS config
│ ├── utils/ # Utility functions and helpers
│ ├── App.jsx # Main App component
│ └── main.jsx # Entry point for the application
├── tests/ # Test files
├── .eslintrc.js # ESLint configuration
├── .gitignore # Git ignore rules
├── index.html # Entry HTML file
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js # Vite configuration
└── README.md # Project readme
\`\`\`
