import AddService from "../Page/AddService/AddService";
import Blog from "../Page/Blog/Blog";
import MyReview from "../Page/MyReview/MyReview";
import ReviewEdit from "../Page/MyReview/ReviewEdit/ReviewEdit";
import NotFoundPage from "../Page/NoFoundPage/NoFoundPage";
import ServiceDetails from "../Page/ServiceDetails/ServiceDetails";
import Spanner from "../Page/Shared/Spanner/Spanner";
import PrivateRouter from "./PrivateRruter/PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");
const { default: Home } = require("../Page/Home/Home");
const { default: Login } = require("../Page/Login/Login");
const { default: Register } = require("../Page/Register/Register");
const { default: Services } = require("../Page/Services/Services");

export const Router = createBrowserRouter([
    { 
        path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/home',
                    element: <Home />,
                },
                {
                    path: '/services',
                    element: <Services />,
                },
                {
                    path: '/blog',
                    element: <Blog /> ,
                },
                {
                    path: '/myReview',
                    element: <PrivateRouter><MyReview /></PrivateRouter> ,
                },
                {
                    path: '/addService',
                    element:  <PrivateRouter><AddService /></PrivateRouter> ,
                },
                {
                    path: '/servicedetals/:id',
                    element:  <PrivateRouter><ServiceDetails /></PrivateRouter> ,
                    loader: ({params}) =>  fetch(`https://foodies-server-theta.vercel.app/services/${params.id}`),
                },
                {
                    path: '/reviewedit/:id',
                    element: <ReviewEdit></ReviewEdit> ,
                    loader: ({params}) =>  fetch(`https://foodies-server-theta.vercel.app/review/${params.id}`),
                },
                {
                    path: '/register',
                    element: <Register /> ,
                },
                {
                    path: '/login',
                    element: <Login />,
                },
            ]
},
{
    path: '*',
    element:<NotFoundPage></NotFoundPage>
}
    
])
