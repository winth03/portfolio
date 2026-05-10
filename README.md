# Nutpapop Yasawut's Portfolio

[![Built With Next.js](https://img.shields.io/badge/Built%20With-Next.js-000000.svg?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Built With React](https://img.shields.io/badge/Built%20With-React-61DAFB.svg?style=for-the-badge&logo=react)](https://react.dev/)
[![Built With TypeScript](https://img.shields.io/badge/Built%20With-TypeScript-3178C6.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

This repository hosts the personal portfolio website of Nutpapop Yasawut, a professional specializing in the intersection of **DevOps infrastructure** and **game prototyping**. The site showcases expertise in building efficient systems, from fixing deployment pipelines to testing new game mechanics. It features an interactive resume, detailed experience, and future sections for projects, all designed with a clean, modern aesthetic.

## Features

*   **Dynamic Navigation**: Smooth scrolling navigation with active section highlighting, ensuring users always know where they are on the page.
*   **Professional Introduction**: A compelling 'Hero' section introducing Nutpapop Yasawut and outlining key professional interests and philosophy.
*   **Detailed Experience Section**: Comprehensive overview of professional roles, responsibilities, and key achievements, including work with AI-driven automation pipelines and full-stack development.
*   **Resume Access**: Direct link to download the professional resume in PDF format for easy access by recruiters and collaborators.
*   **GitHub Integration**: Seamless link to the GitHub profile, showcasing open-source contributions and personal projects.
*   **Responsive Design**: Optimized for various screen sizes, providing a consistent and enjoyable user experience across desktops, tablets, and mobile devices.
*   **Modern UI**: A clean, dark-themed interface with an emphasis on readability and user engagement, utilizing a custom-designed CSS stylesheet.

## Tech Stack

This portfolio is built using a robust and modern web development stack:

*   **Framework**: [Next.js](https://nextjs.org/) (v14.2.3)
*   **Library**: [React](https://react.dev/) (v18.3.1)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) (v5.4.5)
*   **Styling**: Custom CSS (`styles/index.css`)
*   **Package Manager**: npm or Yarn

## Prerequisites

Before running this project locally, ensure you have the following installed:

*   **Node.js**: LTS version (e.g., v18.x or v20.x). You can download it from [nodejs.org](https://nodejs.org/).
*   **npm** (comes with Node.js) or **Yarn**

## Installation

Follow these steps to get a local copy of the project up and running:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/winth03/portfolio.git
    ```
2.  **Navigate into the project directory**:
    ```bash
    cd portfolio
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    # OR
    yarn install
    ```

## Usage

Once the dependencies are installed, you can run the portfolio in different modes:

### Development Mode

To run the project in development mode with hot-reloading:

```bash
npm run dev
# OR
yarn dev
```

The application will typically be accessible at `http://localhost:3000`.

### Build for Production

To create an optimized production build of the application:

```bash
npm run build
# OR
yarn build
```

This will generate the production-ready files in the `.next` directory.

### Start Production Server

To serve the production build locally (after running `npm run build`):

```bash
npm run start
# OR
yarn start
```

The application will typically be accessible at `http://localhost:3000`.

## Project Structure

The repository is organized into a clear and maintainable structure:

```
.
├── components/                 # Reusable React components (e.g., Navbar.tsx)
├── next.config.js              # Next.js configuration file
├── pages/                      # Next.js page routes
│   ├── _app.tsx                # Custom App component for global settings
│   ├── _document.tsx           # Custom Document component for HTML structure
│   └── index.tsx               # Main portfolio homepage
├── public/                     # Static assets (e.g., resume.pdf)
├── styles/                     # Global CSS stylesheets (e.g., index.css)
├── types/                      # TypeScript custom type definitions
├── .gitignore                  # Specifies intentionally untracked files to ignore
├── package.json                # Project metadata and dependencies
├── package-lock.json           # Records the exact dependency tree
└── tsconfig.json               # TypeScript compiler configuration
```

## License

This project is open-sourced under the MIT License. See the [LICENSE](LICENSE) file for more details.