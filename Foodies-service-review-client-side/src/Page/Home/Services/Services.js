import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCards from './ServiceCards';

const Services = () => {
    const [Services, setServices] = useState([])


    useEffect(()=>{
        fetch(`https://foodies-server-theta.vercel.app/serviceshome`)
        .then(res => res.json())
        .then(data =>setServices(data))
    } , [] );
    return (
        <div className='mb-20'>
        <h3 className='text-5xl font-bold text-center text-[#ff3911] mb-5 '><u>Services</u></h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
                {
                    Services.map(service => <ServiceCards service={service} key={service.img}></ServiceCards>)
                }
            </div>
            <div className="text-center">
                    <Link to='/services' className='bg-[#ff3811] text-white border-2 rounded-md py-3 px-5 text-center border-[#ff3811] font-semibold hover:bg-[#ffffff34] hover:text-[#ff3811]' >See More</Link>
            </div>
        </div>
    );
};

export default Services;