import React from 'react';
import './TreatmentDetails.css';
import note from './note.png';

export default function TreatmentDetails({ date, treatment }) {
    return (
        <div className='d-flex align-items-center t-section'>
            <div className='Big-box'>
                <p>{date}</p>
                <p>09.00-10.00</p>
            </div>
            <div className='middle-box'>
                <p>Treatment</p>
                <p>{treatment}</p>
            </div>
            <div className='small-box'>
                <p>Dentist</p>
                <p>Drg. Adam H.</p>
            </div>
            <div className='small-box'>
                <p>Nurse</p>
                <p>Jessicamila</p>
            </div>
            <img className='note' src={note} alt="note" />
            <p className='note-caption'>note</p>
        </div>
    )
}
