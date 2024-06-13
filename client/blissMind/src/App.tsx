import './App.css'
import Landing from "./pages/Landing.tsx";
import Navbar from "./components/Navbar.tsx";
import { Route, Routes, Navigate } from "react-router-dom";
import BlogPage from "./components/BlogPage.tsx";
import Chat from "./components/Chat.tsx";
import NotFound from "./components/NotFound.tsx";
import Confessions from "./components/Confessions.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import Journals from "./components/Journals.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import SessionPage from "./components/SessionPage.tsx";
import Goals from "./components/Goals.tsx";
import GoalPage from "./components/GoalPage.tsx";
import Blogs from "./pages/Blog.tsx";
import UpdateConfession from "./components/subComponents/UpdateConfession.tsx";
// import {BiMessageSquareDetail} from "react-icons/bi";
// import {useState} from "react";

import { useAuth } from './Auth/AuthProvider.tsx';
import React from 'react';
import {CreateJournal} from "./components/subComponents/CreateJournal.tsx";
import CreateBlog from "./pages/CreateBlog.tsx";
import Footer from "./components/Footer.tsx";


function App() {
    // const [openModal, setOpenModal] = useState(false);

    const { user, login, logout } = useAuth();


    const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
        return user ? element : <Navigate to="/login" />;
    };



    return (
        <>
            <Navbar />
            <Routes>
                {!user && (
                    <>
                        <Route path="/login" element={<Login login={login} />} />
                        <Route path="/signup" element={<Signup />} />
                    </>
                )}


                {/* <Route path="/" element={<Landing />} />
                <Route path="/blog/:id" element={user?<BlogPage />:<Login login={login}/>} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/edit/:id" element={<UpdateConfession />} />
                <Route path="/mygoals" element={<Goals />} />
                <Route path="/goal/:id" element={<GoalPage />} />
                <Route path="/session/:id" element={<SessionPage />} />
                <Route path="/confessions" element={<Confessions />} />
                <Route path="/profile" element={<ProfilePage />}>
                    <Route path={``} element={<Journals />} />
                    <Route path={`confessions`} element={<Confessions />} />
                </Route> */}
                <Route path="/" element={<Landing />} />
                <Route path="/blog/:id" element={user ? <BlogPage /> : <Login login={login} />} />
                <Route path="/chat" element={<ProtectedRoute element={<Chat />} />} />
                <Route path="/blogs" element={<ProtectedRoute element={<Blogs />} />} />
                <Route path="/edit/:id" element={<ProtectedRoute element={<UpdateConfession />} />} />
                <Route path="/mygoals" element={<ProtectedRoute element={<Goals />} />} />
                <Route path="/blog/create" element={<ProtectedRoute element={<CreateBlog />} />} />
                <Route path="/goal/:id" element={<ProtectedRoute element={<GoalPage />} />} />
                <Route path="/journal/create" element={<ProtectedRoute element={<CreateJournal />} />} />
                <Route path="/session/:id" element={<ProtectedRoute element={<SessionPage />} />} />
                <Route path="/confessions" element={<ProtectedRoute element={<Confessions />} />} />
                <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} />}>
                    <Route path="" element={<Journals />} />
                    <Route path="confessions" element={<Confessions />} />
                </Route>
                <Route path={`/*`} element={<NotFound />} />
            </Routes>
            {/*{openModal && <ChatModal setOpenModal={setOpenModal}/>}*/}
            {/*<div className={`fixed p-5 text-3xl bg-gray-100 shadow-lg bottom-10 right-10 cursor-pointer rounded-full`} onClick={()=> setOpenModal(true)}><BiMessageSquareDetail/></div>*/}
            <Footer/>
        </>
    )
}

export default App
