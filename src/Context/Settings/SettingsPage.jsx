
import React, { useContext } from 'react';
import { Card, Grid } from '@mui/material';
import Header from '../../Components/Header';
import SettingsForm from './SettingsForm';
import { GlobalContext } from '../../App';

const SettingsPage = () => {
    const { showCompleted, itemsPerPage } = useContext(GlobalContext);

    return (
        <Grid>
            <Header />
            <Card>
                <SettingsForm />
            </Card>
            <Card>
                <h2>Current Settings</h2>
                <p>Show Completed Items: {showCompleted ? 'Yes' : 'No'}</p>
                <p>Items Per Page: {itemsPerPage}</p>
            </Card>
        </Grid>
    );
};

export default SettingsPage;
