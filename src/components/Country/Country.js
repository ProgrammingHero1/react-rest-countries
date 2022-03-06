import React from 'react';
import './Country.css'

const Country = (props) => {
   const {area, region, name, flags} = props.country;

    return (
        <div className='country bg-warning'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Area: {area}</p>
            <p><small>Region: {region}</small></p>
        </div>
    );
};

export default Country;