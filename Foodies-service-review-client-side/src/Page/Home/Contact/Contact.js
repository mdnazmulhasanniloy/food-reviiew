import React from 'react';
import { FcOvertime } from 'react-icons/fc';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiUserLocationFill } from 'react-icons/ri';

const Contact = () => {
    return (
        
        <footer className="footer p-10 bg-black text-white mb-20 ">
        <div>
          <div className='flex items-center'>
                <FcOvertime className='text-6xl text-black'/>
                <div className='ml-3'>
                    <p className='text-xs mt-2'>We are open monday-friday</p>
                    <h1 className='text-lg mt-1'>7:00 am - 9:00 pm</h1>
                </div>
          </div>
        
        </div> 
        <div>
            <div className='flex items-center mt-1'>
                <BsFillTelephoneFill className='text-4xl text-light' />
                <div className='ml-3'>
                        <p className='text-xs '>Have a question?</p>
                        <h1 className='text-lg mt-1'>+880 1321-834780</h1>
                </div>
            </div>  
        </div> 
        <div>
              
        <div className='flex items-center mt-1'>
        <RiUserLocationFill className='text-4xl text-light' />
        <div className='ml-3'>
                <p className='text-xs '>Need a repair? our address</p>
                <h1 className='text-lg mt-1'>Camilla in Bangladesh</h1>
              </div>
        </div>  
          
        </div>
      </footer>
      
    );
};

export default Contact;