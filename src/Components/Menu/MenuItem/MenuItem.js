import React from 'react';
import './MenuItem.css';

export default function MenuItem({ data, active }) {
    return (
        <button type='button' className={active ? 'active-button' : 'menu-button'}>
            {data}
        </button>
    )
}
