import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Provider/AuthProvider';






const AddReviews = ({_id, title}) => {
    const {user} = useContext(AuthContext);

    const HandelToAddReview = (e) =>{
        e.preventDefault();


      const form = e.target;
      const comment = form.comment.value;
      const email = user?.email;
      const authorName = user?.displayName;
      const authorImg = user?.photoURL;
      const serviceId = _id


      const review = {
        title,
        comment,
        email,
        authorName,
        authorImg,
        serviceId
      }

      // review add to database

      fetch(`https://foodies-server-theta.vercel.app/review`, {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(review)

    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            e.target.reset();
            toast.success('Your review successfully add');
        }
    })
    .catch(err => toast.error(err.message));
    console.log(review);
    }
    return (
        <div className='w-3/4 m-auto'>
        <form className="card-body" onSubmit={HandelToAddReview}>
        <h1 className="text-5xl font-bold text-[#ff3911] text-center my-5">Add New Review </h1>

        <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Service Title"  defaultValue={title} readOnly  name='title' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name"  name='Name' defaultValue={user?.displayName} readOnly className="input input-bordered" />
                        </div>
            
            </div>

            <div className="form-control">
                    <label className="label">
                    <span className="label-text">Comment</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-60"   name="comment" placeholder="Comment" required ></textarea>
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
                 hover:text-[#ff3811]" type="submit" value="ADD" />
          </div>
        </form>
        
        
      </div>
    );
};

export default AddReviews;