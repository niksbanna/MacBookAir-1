import React from 'react';
import './NavPills.css';

export default function NavPills({ src, caption }) {
    return (
        <li className='items'>
            <a href="/" className="nav-link py-3">
                <img className='nav-icons' src={src} alt='nav-icon' />
                <p className='nav-caption'>{caption}</p>
            </a>
        </li>
    )
}
