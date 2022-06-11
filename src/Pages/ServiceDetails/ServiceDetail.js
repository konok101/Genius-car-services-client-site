import React from 'react';
import {Link, useParams} from 'react-router-dom';
const ServiceDetail = () => {
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Welocme to  details {serviceId}</h2>
            <Link to='/checkout'> <button>Proced Checkout</button> </Link>
          
        </div>
    );
};

export default ServiceDetail;