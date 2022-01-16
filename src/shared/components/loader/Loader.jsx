import React from 'react';
import "./Loader.css";
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
    return (
        <div className="loader">
            <div className="progress">
            <CircularProgress />
            </div>
        </div>
    )
}

export default Loader
