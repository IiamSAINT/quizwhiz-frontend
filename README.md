# QuizWhiz Frontend

Welcome to QuizWhiz, a modern and interactive quiz platform! This repository contains the frontend code for the QuizWhiz application, built with React, Vite, TypeScript, and Tailwind CSS.

## ✨ Features

- **User Authentication:** Sign up and log in to your account.
- **Create & Share Quizzes:** Easily create your own quizzes and share them with others using a unique code.
- **Join Quizzes:** Join and participate in quizzes created by others.
- **Quiz Feed:** Explore and search for quizzes created by the community.
- **Interactive Quiz Experience:** Take quizzes with a clean and user-friendly interface.
- **User Profiles:** View your stats, including quizzes created, quizzes taken, and average scores.

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **State Management:** [TanStack Query](https://tanstack.com/query/latest)
- **Forms:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## 📦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) (v18 or higher) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/quizwhiz-frontend.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd quizwhiz-frontend
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run the following command:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in the browser. The app will automatically reload if you change any of the source files.

## 📜 Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the codebase using ESLint.
- `npm run preview`: Serves the production build locally for preview.

## 📁 Project Structure

The project follows a standard React application structure:

```
.
├── public/             # Static assets
├── src/
│   ├── app/            # Application-level components and routing
│   ├── common/         # Shared components, utilities, and API configs
│   │   ├── api/        # API related files
│   │   ├── components/ # Reusable UI components
│   │   │   ├── icons/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   └── types/      # TypeScript type definitions
│   ├── features/       # Feature-specific code (auth, dashboard, etc.)
│   │   └── <feature-name>/
│   │       ├── components/
│   │       └── hooks/
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Application pages/routes
│   ├── App.css
│   ├── index.css
│   └── main.tsx        # Application entry point
├── .eslintrc.js        # ESLint configuration
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/quizwhiz-frontend/issues).

## 📄 License

This project is licensed under the MIT License.
