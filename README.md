# Dynamic Dashboard

A customizable dashboard application built with **React**, **Redux Toolkit**, **Vite**, **TailwindCSS**, and **Recharts**. This project allows users to visualize cloud security data, manage widgets, and personalize their dashboard experience.

## Features

- **Modular Dashboard**: Multiple dashboard sections (CSPM, CWPP, Registry Scan) with summary cards and charts.
- **Widget Management**: Add or remove widgets in each category using a modal interface.
- **Redux State Management**: Dashboard state (categories, widgets) is managed globally with Redux Toolkit.
- **Responsive UI**: Built with TailwindCSS for modern, responsive layouts.
- **Data Visualization**: Uses Recharts for pie and bar charts.
- **Search**: Includes search bars for widgets and navigation.

## Project Structure
dynamic-dashboard/ ├── public/ ├── src/ │ ├── assets/ # Images and icons │ ├── components/ # React components (Dashboard, Navbar, Widget, etc.) │ ├── data/ # Initial dashboard data (JSON) │ ├── store/ # Redux store and slices │ ├── App.jsx # Main app component │ ├── main.jsx # Entry point │ └── index.css # TailwindCSS import ├── index.html ├── package.json ├── vite.config.js └── README.md


## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd dynamic-dashboard

2. Install dependencies
   npm install
   or
   yarn install

3. set the development server
   npm run dev
   # or
   yarn dev

4. Open http://localhost:5173 in your browser.

   Scripts
- npm run dev – Start the development server
- npm run build – Build for production
- npm run preview – Preview the production build
- npm run lint – Run ESLint

  Customization
- Add/Edit Widgets: Use the "Add Widget" button in the UI to personalize your dashboard.
- Initial Data: Modify src/data/initialData.json to change default categories and widgets.
- Styling: TailwindCSS classes are used throughout for easy customization.
- Dependencies
- React
- Redux Toolkit
- React Redux
- Vite
- TailwindCSS
- Recharts
- Remixicon
- uuid
