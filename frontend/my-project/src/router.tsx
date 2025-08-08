import { createBrowserRouter } from 'react-router-dom';
import AuthForms from './components/LoginForm.tsx';
import BooksPage from './pages/BooksPage.tsx';
import ReadersPage from './pages/ReadersPage.tsx';
import SimpleHomePage from './pages/HomePage.tsx';
import LendingsPage from './pages/LendingsPage.tsx';
import Layout from "@/pages/Layout.tsx"; // Fixed from LendingsPage.tsx to LendingsPage.tsx

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
          /*  {
                path: '/login',
                element: <AuthForms />,
            },*/
            /*{
                path: '/home',
                element: <SimpleHomePage />,
            },*/
            {
                path: '/books',
                element: <BooksPage />,
            },
            {
                path: '/readers',
                element: <ReadersPage />,
            },
            {
                path: '/lendings',
                element: <LendingsPage />,
            },
        ],
    },
    {
        path: '/login',
        element: <AuthForms />,
    },
    {
        path: '/home',
        element: <SimpleHomePage />,
    }
]);