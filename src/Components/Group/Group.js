import React from 'react';
import './Group.css';
import overview from './overview.png'

export default function Group({ data }) {
    return (
        <div className='group p-2'>
            <img src={overview} alt="overview" />
            <p>{data}</p>
        </div>
    )
}
