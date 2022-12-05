import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useTitle } from '../../../Hooks/UseTitle';
import Spanner from '../../Shared/Spanner/Spanner';

const ReviewEdit = () => {
  const [loader, setLoader] = useState(false)
    const data= useLoaderData();
    const Navigate = useNavigate()
    useTitle('Update Review')


    const HandelToEditReview = (e) =>{
        e.preventDefault();
        setLoader(true)
        
      const comment = e.target.comment.value;

      const details = {
        comment: comment,
      }
      
      
      fetch(`https://foodies-server-theta.vercel.app/review/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            } ,
            body: JSON.stringify(details),
        })
        .then(res=>res.json())
        .then(data => {if(data.modifiedCount>0){
                setLoader(false)
                toast.success('your information is successful updated');
                Navigate('/myReview');
            }
            })
        .catch(err => {
          toast.error(err) 
          setLoader(false)
        })
            
    }
    
    console.log(data);
    return (
        <div className='w-3/4 m-auto'>
        <form className="card-body" onSubmit={HandelToEditReview}>
        <h1 className="text-5xl font-bold text-[#ff3911] text-center my-5">Add New Review </h1>

            <div className="form-control">
                    <label className="label">
                    <span className="label-text">Comment</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-60" defaultValue={data?.comment}   name="comment" placeholder="Comment" required ></textarea>
            </div>
          
          <div className="form-control">
                        
                        
            </div>

          <div className="form-control mt-4">
            <input 
                className="
                bg-[#ff3811]
                 text-white 
                 border-2 
                 rounded-md 
                 py-2 
                 border-[#ff3811] 
                 font-semibold 
                 hover:bg-[#ffffff34] 
                 hover:text-[#ff3811]" type="submit" value="Confirm" />
          </div>
        </form>
        {
          loader? <Spanner></Spanner>
          : ' '
        }
        
      </div>
    );
};

export default ReviewEdit;