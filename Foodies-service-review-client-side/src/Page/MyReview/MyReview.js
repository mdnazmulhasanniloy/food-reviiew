import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useTitle } from '../../Hooks/UseTitle';
import { AuthContext } from '../../Provider/AuthProvider';
import Footer from '../Shared/Footer/Footer';
import MyReviewCard from './MyReviewCard/MyReviewCard';

const MyReview = () => {

    const {user, signOutUser} =useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);
    useTitle('My Review')

    useEffect(()=>{
        
        fetch(`https://foodies-server-theta.vercel.app/review?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
       .then(res => {
         if(res.status === 401 || res.status === 43){
             return signOutUser()
         }
        return res.json();
        })
       .then(data => setMyReviews(data))
   }, [user?.email, signOutUser])

    //review delete

    const handelToDelete = (id) =>{
        const proceed = window.confirm('are you sure, ou want to delete to this order');
         if(proceed){
                fetch(`https://foodies-server-theta.vercel.app/delete/${id}`, {
                    method: 'DELETE',
                   
                })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount>0) {
                        toast.success('deleted successfully.');
                        const remainingOrder = myReviews.filter(order => order._id !== id);
                            console.log(remainingOrder);
                            setMyReviews(remainingOrder);
                    }
                });
        
               }
    }

    return (
        <div>
            <div className='min-h-screen'>
            {
            myReviews?.length === 0 ?
            <h1 className='text-5xl text-center font-bold text-[#ff3911] my-5'>"You don't have any review</h1>
            :   <div>

                    <div className="overflow-x-auto w-full">
                    <h1 className='text-5xl text-center font-bold text-[#ff3911] my-5'>You have {myReviews.length} review</h1>
                       

                                {
                                    myReviews.map(Review => <MyReviewCard handelToDelete={handelToDelete} Review={Review} key={Review._id}></MyReviewCard>)
                                }
                            
                    </div>
                </div>
            }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyReview;