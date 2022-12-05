import React, { useContext, useState } from 'react';
import Logo from '../../../Assets/image/Logo/Logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserTie } from 'react-icons/fa';
import Login from '../../Login/Login';
import toast from 'react-hot-toast';

const Header = () => {
    const {user, signOutUser} = useContext(AuthContext)


    const HandelToSignOut = () =>{
        signOutUser()
        .then(() => {
          toast.success('Your account successfully sign Out')
        }).catch((error) => {
                toast.success(error.message)
        });
    }

    const menuItems = <>
                <li className='font-semibold'>
                    <Link to='/home'>Home</Link>
                    <Link to='/Services'>Services</Link>
                    <Link to='/blog'>Blog</Link>
                    {
                        user?.uid ? <>
                                    <Link to='/myReview'>My Review</Link> 
                                    <Link to='/addService'>Add Services</Link>
                                    </>
                                    : " "
                    }
                        
                </li>
    </>
    return (
        <div className="navbar h-20 mb-12 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}                        
                    </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl">
                            <img className='h-20 w-20' src={Logo} alt="" /> 
                     </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="avatar">
                        <div className="w-10  rounded-full ring ring-[#ff3811] ring-offset-base-100 ring-offset-2 mr-4">
                        {
                            user?.photoURL?
                             <img alt='' src={user.photoURL} /> 
                             : <FaUserTie className='w-full text-5xl'/>
                        }
                         </div>
                    </div> 
                {
                    user?.uid? <Link to='/' className="text-black opacity-75 hover:opacity-100 text-center font-bold text-1xl w-20" onClick={HandelToSignOut} > Log Out </Link>
                    : 
                        
                    <>
                    <label htmlFor="my-modal-4" className="text-black opacity-75 hover:opacity-100 text-center font-bold text-1xl w-20">Login</label>
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label className="modal-box relative " htmlFor="">

                        <Login ></Login>
                        <div className=" my-4 ">
                                <p className='text-center font-semibold text-lg'>Don't have an account? <Link  to='/register' className='text-[#ff3811]'>Register </Link> </p>
                         </div>
                    </label>
                    </label>
                    </>
                         
                }
                
                    
                
                
                
                </div>
</div>
    );
};

export default Header;