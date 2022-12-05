import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useLoaderData } from 'react-router-dom';
import { BsStar } from 'react-icons/bs';
import AddReviews from './Add Reviews/AddReviews';
import Footer from '../Shared/Footer/Footer';
import ServiceReviews from './ServiceReviews.js/ServiceReviews';
import { useTitle } from './../../Hooks/UseTitle';





const ServiceDetails = () => {
    const [toggleTab, setToggleTab] = useState(1)
    const data = useLoaderData();
    const {title, img, price, details, _id} = data;
    useTitle('Service Details')
    return (
        <div>
                <div className="card lg:card-side bg-base-100 shadow-xl my-10">

                <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                <h2 className="card-title  font-bold text-5xl border-l-8 border-[#ff3911] px-3">{title}</h2>
                <div className="flex mt-5 align-middle">
                                <div className="flex mr-4 mt-2">
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                <BsStar />
                                </div>
                                <p className='text-xl text-[#ff3911] '>Retting({data?.retting? ' ' : '0'})</p>
                        </div>
                        <h3 className=' font-bold text-3xl  my-5'>Price: <span className='text-[#ff2911]'>${price}</span></h3>
                        
                <p className='leading-8'>{details}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
                </div>
            </div>


            
            <div className="mb-4 border-b border-gray2-00 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                <li className="mr-2" role="presentation">
                    <button 
                    onClick={()=>setToggleTab(1)}
                    className={ toggleTab === 1 ?
                                    "inline-block  p-4 rounded-t-lg  border-b-2  text-blue-600  hover:text-blue-600  dark:text-blue-500   dark:hover:text-blue-500   border-blue-600  "
                                    :  "inline-block p-4 rounded-t-lg  border-b-2 border-transparent  hover:text-gray-600  hover:border-gray-300  dark:hover:text-gray-300 dark:border-transparent  text-gray-500 dark:text-gray-400  border-gray-100  dark:border-gray-700"
                    }
                     >Services</button>
                </li>
                <li className="mr-2" role="presentation">
                    <button 
                            onClick={()=>setToggleTab(2)}
                            className={ toggleTab === 2 ?
                                "inline-block  p-4 rounded-t-lg  border-b-2  text-blue-600  hover:text-blue-600  dark:text-blue-500   dark:hover:text-blue-500   border-blue-600  "
                                :"inline-block p-4 rounded-t-lg  border-b-2 border-transparent  hover:text-gray-600  hover:border-gray-300  dark:hover:text-gray-300 dark:border-transparent  text-gray-500 dark:text-gray-400  border-gray-100  dark:border-gray-700"
                            }     
                            type="button">Review</button>
                </li>
            </ul>
        </div>
            <div id="myTabContent" className='w-full min-h-screen bg-gray-50 rounded-lg dark:bg-gray-800'>
                            {
                                toggleTab === 1? 
                                            <ServiceReviews _id={_id}></ServiceReviews> 
                                            :
                                            <AddReviews _id={_id} title={title}></AddReviews>
                            }
            </div>



            
            <Footer></Footer>

        </div>
    );
};

export default ServiceDetails;