import React, { useState } from 'react'
import AlertContext from './alertContext';

const AlertState = (props) => {
    const [alert, setAlert] = useState(null);
    const createAlert = (message, type) => {
        setAlert({ message: message, type: type });
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    }
    return (
        <AlertContext.Provider value={{ alert, createAlert }}>
            {props.children}
        </AlertContext.Provider>
    )
}
export default AlertState;