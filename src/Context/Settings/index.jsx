import React, { createContext, useContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [showCompleted, setShowCompleted] = useState(true);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    const updateSettings = (newSettings) => {
        setShowCompleted(newSettings.showCompleted);
        setItemsPerPage(newSettings.itemsPerPage);
    };

    return (
        <SettingsContext.Provider value={{ showCompleted, itemsPerPage, updateSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => {
    return useContext(SettingsContext);
};