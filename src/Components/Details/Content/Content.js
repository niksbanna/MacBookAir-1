import React from 'react';
import './Content.css';

export default function Content({ top, bottom }) {
    return (
        <div id="content">
            <div class="content">
                <p>{top}</p>
                <p>{bottom}</p>
            </div>
        </div>
    )
}
