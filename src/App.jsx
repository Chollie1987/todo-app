import React, { useState, createContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { AuthProvider  } from './Context/Auth';
import Auth from './Components/Auth';
import Login from './Components/Login';
import LoginContext from './Context/Auth/index'
import SettingsPage from './Context/Settings/SettingsPage';
import Todo from './Components/Todo';
import Title from './Components/Header/Title';

export const GlobalContext = createContext(null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Todo />,
  },
  {
    path: "settings",
    element: <SettingsPage />,
  },
]);

const App = () => {
  const [showCompleted, setShowCompleted] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const updateSettings = (newSettings) => {
    setShowCompleted(newSettings.showCompleted);
    setItemsPerPage(newSettings.itemsPerPage);
  };

  useEffect(() => {
    const savedSettings = localStorage.getItem('appSettings');
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);

    }
  }, []);

  return (
    <LoginContext>
      <Login />

      <Auth>
        <div>Any valid user can see this</div>
      </Auth>

      <Auth capability="create">
        <div>Users with create access can see this</div>
      </Auth>

      <Auth capability="update">
        <div>Users with update access can see this</div>
      </Auth>

      <Auth capability="delete">
        <div>Users with delete access can see this</div>
      </Auth>
    <GlobalContext.Provider value={{updateSettings, showCompleted, itemsPerPage }}>
      <RouterProvider router={router}/>
    </GlobalContext.Provider>
    </LoginContext>
  );
};

export default App;