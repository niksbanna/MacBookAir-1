import React from 'react';
import './Button.css';

export default function Button({ data }) {
    return (
        <button type='button' className='customButton p-2 w-100' >
            {data}
        </button>
    )
}
