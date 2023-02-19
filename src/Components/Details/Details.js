import React from 'react'
import Menu from '../Menu/Menu';
import TreatmentDetails from '../TreatmentDetails/TreatmentDetails';
import Content from './Content/Content';
import './Details.css';

export default function Details() {
    return (
        <div>
            <section>
                <div className="d-flex contents">
                    <Content top={`Gender`} bottom={`Female`} />
                    <Content top={`Birthday`} bottom={`Feb 24th, 1997`} />
                    <Content top={`Phone Number`} bottom={`(239) 555 -0108`} />
                    <Content top={`Registered Date`} bottom={`Feb 24th, 1997`} />
                </div>
                <div className="d-flex contents">
                    <Content top={`Street Address`} bottom={`JL. Diponegoro No. 21`} />
                    <Content top={`City`} bottom={`Cilacap`} />
                    <Content top={`Zip Code`} bottom={`655849`} />
                    <Content top={`Member Status`} bottom={`Active Member`} />
                </div>
            </section>
            <Menu />
            <section className='treatment-section'>
                <div className="treatment-info-bar">
                    <div className="left-info">
                        Root Canal Treatment
                    </div>
                    <div className="right-info">Show Previous Treatments</div>
                </div>
                <hr />
                <div className="treatment-details">
                    <TreatmentDetails
                        date={`26 Nov'19`}
                        treatment={`Open Access`}
                    />
                    <TreatmentDetails
                        date={`12 Nov'19`}
                        treatment={`Root Canal`}
                    />
                </div>
            </section>
        </div>
    )
}
