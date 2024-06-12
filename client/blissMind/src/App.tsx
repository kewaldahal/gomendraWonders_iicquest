import './App.css'
import Landing from "./pages/Landing.tsx";
import Navbar from "./components/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import BlogPage from "./components/BlogPage.tsx";
import Chat from "./components/Chat.tsx";
import NotFound from "./components/NotFound.tsx";
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
                <Route path={`/*`} element={<NotFound/>}/>
            </Routes>
            {/*{openModal && <ChatModal setOpenModal={setOpenModal}/>}*/}
            {/*<div className={`fixed p-5 text-3xl bg-gray-100 shadow-lg bottom-10 right-10 cursor-pointer rounded-full`} onClick={()=> setOpenModal(true)}><BiMessageSquareDetail/></div>*/}
        </>
    )
}

export default App
