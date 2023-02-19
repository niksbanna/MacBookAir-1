import React from 'react'
import MenuItem from './MenuItem/MenuItem';
import './Menu.css';

export default function Menu() {
    return (
        <div className='menu'>
            <MenuItem active={true} data={`Upcoming Appointments`} />
            <MenuItem active={false} data={`Upcoming Appointments`} />
            <MenuItem active={false} data={`Upcoming Appointments`} />
        </div>
    )
}
