import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState({
        maxItems: 3,
        hideCompleted: true,
        sort: 'difficulty',
    });

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};

const useSettings = () => {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
};

export { SettingsProvider, useSettings };