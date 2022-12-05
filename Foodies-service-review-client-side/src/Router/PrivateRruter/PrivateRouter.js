import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spanner from '../../Page/Shared/Spanner/Spanner';
import { AuthContext } from '../../Provider/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Spanner></Spanner>
    } 
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children
};

export default PrivateRouter;