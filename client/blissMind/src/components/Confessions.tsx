import ConfessionCard from "./ConfessionCard.tsx";
import {AiOutlineEdit} from "react-icons/ai";
import {useState} from "react";

const Confessions = () => {
    const [create, setCreate] = useState()
    return (
        <>
            {create && <div></div>}
            <div
                className={`container  mx-auto my-2 w-[900px] text-justify flex flex-col gap-5`}>
                <div className={`flex gap-3 border bg-gray-100 border-blue-100 rounded p-2 items-center`}>
                    <img src="https://avatar.iran.liara.run/public" className={`w-14 h-14 bg-red-200 rounded-full`}
                         alt=""/>
                    <div className={` border-b w-full my-5 py-2 text-gray-500 flex items-center gap-2`}><AiOutlineEdit
                        size={`1.3em`}/>Share
                        your
                        thoughts.
                    </div>
                </div>

                <ConfessionCard/>
                <ConfessionCard/>
                <ConfessionCard/>
            </div>

        </>
    );
};

export default Confessions;