import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Provider/AuthProvider';
import Spanner from '../Shared/Spanner/Spanner';
import { useTitle } from './../../Hooks/UseTitle';

const AddService = () => {
  const [loader, setLoader] = useState(false)
    const {user} = useContext(AuthContext)
    useTitle('Add Service')

    const HandelToAddServices = (e) =>{
      e.preventDefault();
      setLoader(true)


      const form = e.target;
      
      const title = form.title.value;
      const price = form.price.value;
      const img = form.img.value;
      const details = form.details.value;
      const email = user?.email;
      const authorName = user?.displayName;
      const authorImg = user?.photoURL;

      const author = {
        authorName,
        authorImg
      }

      const service = {
        title,
        price,
        img,
        details,
        email,
        author,
        time:new Date().getTime()
      }

      // service add to database

      fetch(`https://foodies-server-theta.vercel.app/services`, {
        method: 'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(service)

    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            e.target.reset();
            setLoader(false)
            toast.success('Your account successfully add');
        }
    })
    .catch(err => toast.error(err.message));
    setLoader(false)
}
  


      return (
        <div className='w-3/4 m-auto'>
        <form className="card-body" onSubmit={HandelToAddServices}>
        <h1 className="text-5xl font-bold text-[#ff3911] text-center my-5">Add New Services </h1>
        <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Title</span>
                            </label>
                            <input type="text" placeholder="Service Title"    name='title' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Price"  name='price' className="input input-bordered" />
                        </div>
            
            </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Service Image Url</span>
            </label>
            <input type="text" placeholder="Service Image Url"  name='img' className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input type="text" placeholder="Author Name" name='authorName' defaultValue={user?.displayName} readOnly className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author Email</span>
            </label>
            <input type="text" placeholder="Author Email" name='authorEmail' defaultValue={user?.email} readOnly className="input input-bordered" />
          </div>
          <div className="form-control">
                        <textarea className="textarea textarea-bordered h-60"   name="details" placeholder="Service Description" required ></textarea>
                        
            </div>

          <div className="form-control mt-4">
            <input className="bg-[#ff3811] text-white border-2 rounded-md py-2 border-[#ff3811] font-semibold hover:bg-[#ffffff34] hover:text-[#ff3811]" type="submit" value="Login" />
          </div>
        </form>
        
        {
          loader? <Spanner></Spanner>
          : ' '
        }
      </div>
    );
};

export default AddService;