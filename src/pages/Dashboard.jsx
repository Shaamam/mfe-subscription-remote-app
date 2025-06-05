import React from 'react';
import ModemAuthorization from '../components/ModemAuthorization';
import SecurityPackage from '../components/SecurityPackage';

const Dashboard = () => {
    return (
        <div style={styles.dashboard}>
            <ModemAuthorization />
            <SecurityPackage />
        </div>
    );
};

const styles = {
    dashboard: {
        display: 'flex',
        padding: '20px',
        backgroundColor: '#1e1e1e',
        minHeight: '100vh',
        gap: '20px',
    },
};

export default Dashboard;

