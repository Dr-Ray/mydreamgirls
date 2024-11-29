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
import Pacman from './games/pacman';
import WhackaMole from './games/whackamole';
import JumpingJack from './games/jumpingJack';
import Register from './screens/register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/games",
    element: <GameScreen />
  },
  {
    path: "/games/pacman",
    element: <Pacman />
  },
  {
    path: "/games/whackamole",
    element: <WhackaMole />
  },
  {
    path: "/games/jumpingjack",
    element: <JumpingJack />
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