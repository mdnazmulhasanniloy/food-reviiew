import React from 'react';
import { MdReviews } from 'react-icons/md';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';





const ServiceCards = ({service}) => {
    const {title, img, price, details, author, _id} = service;
    return (
        <div>
               
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                    <PhotoProvider>
                            <PhotoView src={img}>
                                <img src={img} alt="" />
                            </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className='text-2xl'> $ {price}</h3>
                <p>{details.slice(0, 100)}</p>
                <div className="card-actions justify-end">
                    <Link to={`/servicedetals/${_id}`} className="btn btn-primary">See Details</Link>
                </div>
                <hr />
                <div className="flex justify-between my-2">
                    <div className="flex">
                    <div className="avatar">
                        <div className="w-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={author.authorImg} alt='' title={author.authorName} />
                        </div>
                    </div>
                    <div className="ml-3">
                        <h3 className='text-1xl  '>{author.authorName}</h3>
                    </div>
                    </div>

                    <div className="review flex items-center" title='Reviews'>
                             <Link className='text-primary mr-2'><MdReviews  className='text-2xl' /></Link>
                             <p className='font-bold text-[#ff3911] text-xl'></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;