import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import Footer from '../Shared/Footer/Footer';
import Spanner from '../Shared/Spanner/Spanner';
import { useTitle } from '../../Hooks/UseTitle';





const Register = () => {
  

    const {createUser, googleSignIn, updateUserProfile, signOutUser} = useContext(AuthContext)
    const [loader, setLoader] = useState(false)
    const Navigate = useNavigate();
    useTitle('Register')







    const handelToGoogleSignIn = () =>{
        googleSignIn()
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        toast.success('Your account successfully created please login')
            signOutUser()
            Navigate('/login')
        
      })
      .catch((error) => {
        
        const errorMessage = error.message;
        toast.error(errorMessage);
        // ..
      });
      }





    const HandelToCreateUser = (e) =>{
        e.preventDefault();

        setLoader(true)

        const form = e.target;
        const name = form.FirstName.value + ' ' + form.LastName.value;
        const imgurl = form.imgurl.value;
        const email = form.email.value;
        const password = form.password.value;

        const profileInfo ={
          displayName: name,
          photoURL: imgurl
        }

        console.log(name, email, password);

        // login userPassword 
        createUser(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            //user update
            updateProfile(profileInfo)
            setLoader(false)
            toast.success('Your account successfully created please login')
            signOutUser()
            Navigate('/login')
            console.log(user)
        
         }) 
         .catch((error) => {
          
            const errorMessage = error.message;
            setLoader(false)
            toast.error(errorMessage);
            // ..
          });

        }

        //update profile function
         const updateProfile = (profile) =>{
             return updateUserProfile(profile)
              .then(() => {
                setLoader(false)
              }).catch((error) => {

                const errorMessage = error.message;
                setLoader(false)
                toast.error(errorMessage);
                
              });

          }

          

    return (
        <div>
        <form className="card-body" onSubmit={HandelToCreateUser}>
        <h1 className="text-5xl font-bold text-center my-5">Create Account</h1>
        <div className="flex justify-center my-5">
                  <button className='bg-[#F5F5F8] text-[#3B5998] text-3xl p-4 rounded-full' onClick={handelToGoogleSignIn}><FcGoogle  /></button>
        </div>

            <div className="grid grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">First Name</span>
                            </label>
                            <input type="text" placeholder="First Name" name='FirstName' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Last Name</span>
                            </label>
                            <input type="text" placeholder="Last Name" name='LastName' className="input input-bordered" />
                        </div>
            
            </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input type="text" placeholder="Image Url" name='imgurl' className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="email" name='email' className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" name='password' className="input input-bordered" />
          </div>
          <div className="form-control mt-4">
            <input className="bg-[#ff3811] text-white border-2 rounded-md py-2 border-[#ff3811] font-semibold hover:bg-[#ffffff34] hover:text-[#ff3811]" type="submit" value="Login" />
          </div>
        </form>
        {
          loader ? <Spanner></Spanner>
          : ' '
        }
        
        <Footer></Footer>

      </div>
    );
};

export default Register;