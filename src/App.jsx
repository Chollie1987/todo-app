import React, { useState, createContext, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    <GlobalContext.Provider value={{updateSettings, showCompleted, itemsPerPage }}>
      <RouterProvider router={router}/>
    </GlobalContext.Provider>
  );
};

export default App;