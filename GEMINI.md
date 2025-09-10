# Project Overview

This is a React-based web application for "Jewels of Kashmir," a service that seems to offer houseboat stays and tours in Kashmir. The application is built using Vite for fast development and bundling. It uses React Router for navigation and Tailwind CSS for styling. The codebase is written in JavaScript (JSX) and includes various components for different pages of the website, such as Home, About, Contact, Rooms, and Tours.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install Dependencies:**
    Open a terminal in the `client` directory and run the following command to install the necessary packages:
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    After the installation is complete, start the development server:
    ```bash
    npm run dev
    ```
    This will launch the application in your default web browser, typically at `http://localhost:5173`.

3.  **Build for Production:**
    To create a production-ready build of the application, run:
    ```bash
    npm run build
    ```
    The optimized and minified files will be placed in the `dist` directory.

4.  **Linting:**
    To check the code for any linting errors, run:
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Styling:** The project uses [Tailwind CSS](https://tailwindcss.com/) for styling. Utility classes are used directly in the JSX files.
*   **Routing:** The application uses [React Router](https://reactrouter.com/) for client-side routing. All the routes are defined in the `src/App.jsx` file.
*   **Component-Based Architecture:** The application is structured into reusable components, which are located in the `src/components` directory. Pages are located in the `src/Pages` directory.
*   **Lazy Loading:** To improve performance, the page components are lazy-loaded using `React.lazy()` and `Suspense`.
*   **Linting:** The project uses ESLint to enforce code quality and consistency. The configuration can be found in the `eslint.config.js` file.
