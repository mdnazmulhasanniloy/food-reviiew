import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useLoaderData } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import Spanner from '../Shared/Spanner/Spanner';
import { useTitle } from '../../Hooks/UseTitle';


const Login = ({setAccount}) => {
    
    const [loader, setLoader] = useState(false)
    const Navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const {googleSignIn, signInUserPassword} = useContext(AuthContext);
    useTitle('Login')
    



    const handelSubmit = (e) =>{
        e.preventDefault()
        setLoader(true);
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value; 
        console.log(email, password);


        signInUserPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const currentUser = {
            email: user.email 
          }
          
          console.log(currentUser);

          //get token 
          fetch(`https://foodies-server-theta.vercel.app/jwt`, {
            method: 'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body: JSON.stringify(currentUser),
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            //Local Storage is not best place to store token but that  is easy
            localStorage.setItem('genius-token', data.token);
            setLoader(false);
            Navigate(from, {replace: true})
            toast.success('Your successfully Login');
            
          })
          
          
        })
          .catch((error) => {
            
            const errorMessage = error.message;
            toast.error(errorMessage);
            setLoader(false)
            // ..
          });
    }
    const handelToGoogleSignIn = () =>{


        googleSignIn()
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const currentUser = {
            email: user.email 
          }
          
          console.log(currentUser);

          //get token 
          fetch(`https://foodies-server-theta.vercel.app/jwt`, {
            method: 'POST',
            headers:{
              'content-type' : 'application/json'
            },
            body: JSON.stringify(currentUser),
          })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            //Local Storage is not best place to store token but that  is easy
            localStorage.setItem('genius-token', data.token);
            setLoader(false);
            Navigate(from, {replace: true})
            toast.success('Your successfully Login');
            
          })
          
        })
        .catch((error) => {
          
          const errorMessage = error.message;
          setLoader(false);
          toast.error(errorMessage);
          // ..
        });

    }
    return (




        <div>
            <form className="card-body" onSubmit={handelSubmit}>
            <h1 className="text-5xl font-bold text-center">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" name='password' className="input input-bordered" />
                <label className="label">
                  <Link to='/forgetPassword' className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
              </div>
              <div className="form-control mt-4">
                <input className="bg-[#ff3811] text-white border-2 rounded-md py-2 border-[#ff3811] font-semibold hover:bg-[#ffffff34] hover:text-[#ff3811]" type="submit" value="Login" />
              </div>
            </form>
            <div className="flex justify-center">
                      <button className='bg-[#F5F5F8] text-[#3B5998] text-3xl p-4 rounded-full' onClick={handelToGoogleSignIn}><FcGoogle  /></button>
            </div>

            {
              loader ? <Spanner></Spanner>
              : ' '
            }
            
          </div>
    );
};

export default Login;