import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';
import ReviewCard from '../../Home/ReviewCard/ReviewCard';
import Spanner from './../../Shared/Spanner/Spanner';

const ServiceReviews = ({_id}) => {
    const {signOutUser} = useContext(AuthContext)



    const [reviews, setReviews] = useState([])
    const [loader, setLoader] = useState(false)

        useEffect(()=>{
            setLoader(true)
            fetch(`https://foodies-server-theta.vercel.app/detailreview?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => {setReviews(data); setLoader(false)})
        },[_id])

    return (

        <div>
        
        {
            loader? <Spanner></Spanner>
            :
            reviews.length === 0?
               <h1 className='text-5xl text-red-600 text-center my-10'>Don't have any review!!</h1>
                : 
                <div>
                <h1 className='text-5xl text-red-600 text-center my-10'>Total reviews {reviews.length}</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-20'>

                {
                    reviews.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)
                }
                </div>
                </div>
        }
        
        </div>
    );
};

export default ServiceReviews;