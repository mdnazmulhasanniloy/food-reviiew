import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCards from '../Home/Services/ServiceCards';
import Footer from '../Shared/Footer/Footer';
import Spanner from '../Shared/Spanner/Spanner';
import { useTitle } from './../../Hooks/UseTitle';

const Services = () => {
    const [services, setServices] = useState([])
    const [loader, setLoader] = useState(false)
    useTitle('Services')

    useEffect(() => { 
        setLoader(true)
        fetch(`https://foodies-server-theta.vercel.app/services`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setLoader(false)
        })
    }, [])
    return (
        <div>
        <div className='mb-20'>
        <h3 className='text-5xl font-bold text-center text-[#ff3911] mb-5 '>Services: {services.length}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
                {
                    services.map(service => <ServiceCards service={service} key={service._id}></ServiceCards>)
                }
            </div>
        </div>
        {
            loader? <Spanner></Spanner>
            :' '
        }
            <Footer></Footer>
        </div>
    );
};

export default Services;