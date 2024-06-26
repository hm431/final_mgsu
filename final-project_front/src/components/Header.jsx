import logo from '../images/Logo.svg';
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react';
import * as auth from '../auth.js';

function Header({ nameOfHeaderLink, linkOfHeaderLink, isProfil }) {

    const navigate = useNavigate();
    const [profilEmail, changeProfilEmail] = React.useState('');

    function headerButton() {
        navigate(`${linkOfHeaderLink}`)
        if (isProfil) {
            localStorage.removeItem('jwt');
        }
    }

    useEffect(() => {
        
        if (localStorage.getItem('jwt')) {
            auth.getEmail(localStorage.getItem('jwt'))
                .then((data) => {
                    console.log(data);
                    changeProfilEmail(data.user.email);
                })
        }
    }, [])


    return (
        <header className="header">
          
            <div className='header__accaunt'>
                <h3 className='header__accaunt_email'>{profilEmail}</h3>
                <button onClick={headerButton} className='header__accaunt_log-in'>{nameOfHeaderLink}</button>
            </div>
        </header>
    )
}


export default Header;