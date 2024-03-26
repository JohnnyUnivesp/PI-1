import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './header.css';

const Header = ({pageTitle}) => {
    const [currentDateTime, setCurrentDateTime] = useState(getFormattedDateTime());
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(getFormattedDateTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    function getFormattedDateTime() {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'America/Sao_Paulo'
        };

        return new Date().toLocaleString('pt-BR', options);
    }

    return (
        <div className="header__contain">
            <div className='historico'>{pageTitle}</div>
            <div className="clock">{currentDateTime}</div>
        </div>
    );
};

export default Header;
