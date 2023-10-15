import React, { useState, useContext } from 'react';

import { GlobalContext } from '../../App';

const SettingsForm = () => {
    const { showCompleted, itemsPerPage, updateSettings } = useContext(GlobalContext);
    const [formData, setFormData] = useState({ showCompleted, itemsPerPage });

    const handleChange = (e) => {
        if(e.target.type === 'checkbox') {setFormData({...formData, showCompleted: e.target.checked})}
        else 
        setFormData({ ...formData, itemsPerPage: parseInt(e.target.value )});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateSettings(formData);
        // Save to Local Storage
        localStorage.setItem('appSettings', JSON.stringify(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Show Completed Items:
                <input
                    type="checkbox"
                    name="showCompleted"
                    checked={formData.showCompleted}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Items Per Page:
                <input
                    type="number"
                    name="itemsPerPage"
                    value={formData.itemsPerPage}
                    onChange={handleChange}
                />
            </label>
            <br />
            <button type="submit">Save Settings</button>
        </form>
    );
};

export default SettingsForm;
