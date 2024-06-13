import './App.css'
import Landing from "./pages/Landing.tsx";
import Navbar from "./components/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import BlogPage from "./components/BlogPage.tsx";
import Chat from "./components/Chat.tsx";
import NotFound from "./components/NotFound.tsx";
import Confessions from "./components/Confessions.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import SessionsCards from "./components/SessionsCards.tsx";
import Journals from "./components/Journals.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import SessionPage from "./components/SessionPage.tsx";
import Goals from "./components/Goals.tsx";
import GoalPage from "./components/GoalPage.tsx";
import Blogs from "./pages/Blog.tsx";
// import {BiMessageSquareDetail} from "react-icons/bi";
// import {useState} from "react";

function App() {
    // const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/blog/:id" element={<BlogPage/>}/>
                <Route path="/chat" element={<Chat/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/blogs" element={<Blogs/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/mygoals" element={<Goals/>}/>
                <Route path="/goal/:id" element={<GoalPage/>}/>
                <Route path="/session/:id" element={<SessionPage/>}/>
                <Route path="/confessions" element={<Confessions/>}/>
                <Route path="/profile" element={<ProfilePage/>}>
                    <Route path={``} element={<Journals/>}/>
                    <Route path={`confessions`} element={<SessionsCards/>}/>
                </Route>
                <Route path={`/*`} element={<NotFound/>}/>
            </Routes>
            {/*{openModal && <ChatModal setOpenModal={setOpenModal}/>}*/}
            {/*<div className={`fixed p-5 text-3xl bg-gray-100 shadow-lg bottom-10 right-10 cursor-pointer rounded-full`} onClick={()=> setOpenModal(true)}><BiMessageSquareDetail/></div>*/}
        </>
    )
}

export default App
