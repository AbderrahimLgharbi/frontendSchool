import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import SignUp from '../pages/Signup';
import Users from '../pages/Users';

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/signin',
                element: <Signin />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }

])
