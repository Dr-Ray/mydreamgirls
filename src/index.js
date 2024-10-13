import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './custom.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './screens/landing';
import GameScreen from './screens/games';
import DashBoard from './screens/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/games",
    element: <GameScreen />
  },
  {
    path: "/dashboard",
    element: <DashBoard />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)