import React from 'react';
import './User.css';
import userImg from './img/user.jpg';
import Button from '../Button/Button';
import Group from '../Group/Group';

export default function User() {
    return (
        <section className='user-section py-4'>
            <img className='user-img' src={userImg} alt="diane-cooper" />
            <h2>Diane Cooper</h2>
            <p>diane.cooper@example.com</p>
            <div className="d-flex w-100 justify-content-center">
                <div className="user-details px-4 border-right">
                    <h4>15</h4>
                    <p>Past</p>
                </div>
                <div className="user-details px-4">
                    <h4>02</h4>
                    <p>Upcoming</p>
                </div>
            </div>
            <div className='px-3 py-4'>
                <Button data={`Send Message`} />
            </div>
            <div className='files-doc'>
                <p>Files / Documents</p>
                <Group data={`Check Up Results.pdf`} />
                <Group data={`Check Up Results.pdf`} />
                <Group data={`Medical Prescription.pdf`} />
                <Group data={`Dental X-Ray Result.pdf`} />
            </div>
        </section>
    )
}
