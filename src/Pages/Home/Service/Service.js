import React from 'react';
import './Service.css';
import {useNavigate} from 'react-router-dom'

const Service = ({ service }) => {
    const {id, name, img, price, description } = service;
    const navigate= useNavigate();
    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`)

    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt=""></img>
            <h1>{name}</h1>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(id)}>Book: {name}</button>
        </div>
    );
};

export default Service;