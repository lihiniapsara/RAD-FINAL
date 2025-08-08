/*
// App.tsx (fixed version)
import { useSelector } from "react-redux";

function App() {
    const user = useSelector((state: any) => state.auth.user);
    return (
        <div>
            <h1>Welcome {user?.name || 'Guest'}</h1>
        </div>
    );
}

export default App;
*/

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "@/pages/Layout.tsx";
import ReadersPage from "@/pages/ReadersPage.tsx";
import SimpleHomePage from "@/pages/HomePage.tsx";
import BooksPage from "@/pages/BooksPage.tsx";
import LendingsPage from "@/pages/LendingsPage.tsx";
import LoginForm from "@/components/LoginForm.tsx";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/dashboard" element={<SimpleHomePage />} />
                    <Route path="/readers" element={<ReadersPage />} />
                    <Route path="/books" element={<BooksPage />} />
                    <Route path="/lendings" element={<LendingsPage />} />

                </Route>
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;