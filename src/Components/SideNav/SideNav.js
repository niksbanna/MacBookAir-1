import React from 'react';
import './SideNav.css';
import add from './icons/add.png';
import folder from './icons/folder.png';
import patient from './icons/patient.png';
import report from './icons/report.png';
import upload from './icons/upload.png';
import settings from './icons/settings.png';
import logout from './icons/logout.png';
import NavPills from './NavPills/NavPills';

export default function SideNav() {
    return (
        <div>
            <div className="bg-light sidenav">
                <a href="/" className="nav-logo">
                    M
                </a>
                <ul className="nav flex-column">
                    <NavPills src={add} caption={`new`} />
                    <NavPills src={patient} caption={`patient`} />
                    <NavPills src={folder} caption={`folder`} />
                    <NavPills src={upload} caption={`upload`} />
                    <NavPills src={report} caption={`report`} />
                    <NavPills src={settings} caption={`settings`} />
                    <NavPills src={logout} caption={`logout`} />
                </ul>
            </div>
        </div>
    )
}
