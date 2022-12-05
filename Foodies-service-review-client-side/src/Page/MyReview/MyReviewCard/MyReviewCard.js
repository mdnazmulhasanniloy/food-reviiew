import React from 'react';
import { Link } from 'react-router-dom';

const MyReviewCard = ({Review, handelToDelete}) => {

    const {title, comment, _id} = Review ;
    
    return (

        
<div className="w-full  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
<div className="flex justify-end px-4 pt-4">
    <button id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
        <span className="sr-only">Open dropdown</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
    </button>
    
</div>
<div className=" pb-10">
        <h3 className='text-2xl text-[#ff3911] ml-4  my-5 font-bold '>**{title}</h3>
        <p className='ml-10 my-6 font-medium list-inside'>{comment}</p>
    <div className="flex text-center mt-4 space-x-3 md:mt-6 ml-10">
        <button onClick={()=>handelToDelete(_id)} className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</button>
        <Link to={`/reviewedit/${_id}`}  className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Edit Review</Link>
    </div>
</div>
</div>

        
    );
};

export default MyReviewCard;