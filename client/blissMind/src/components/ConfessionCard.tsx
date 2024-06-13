import {useState} from "react";
import {AiOutlineClose, AiOutlineComment, AiOutlineHeart} from "react-icons/ai";
import Confession from "./Confession.tsx";
import {IoHeartDislikeOutline} from "react-icons/io5";

const ConfessionCard = () => {
    const [openPost, setOpenPost] = useState(false)
    return (
        <>
            <div onClick={() => {
                setOpenPost(true)
                document.body.style.overflowY = 'hidden'
            }} className=" bg-gray-50 border border-blue-100 cursor-pointer rounded p-3 flex flex-col gap-2">
                <div className={`flex justify-between`}>
                    <div className={`flex gap-3.5 items-center`}>
                        <img src="https://avatar.iran.liara.run/public" className={`w-14 h-14 bg-red-200 rounded-full`}
                             alt=""/>
                        <div className={`flex flex-col gap-0`}>
                            <p className={`font-semibold`}>Kamal Thapaliya</p>
                            <p className={`text-sm font-semibold text-gray-500`}>an hour ago</p>
                        </div>
                    </div>

                </div>
                <div>
                    <p className={` text-gray-700 line-clamp-5`}>I need to confess something that’s
                        been
                        weighing
                        heavily on
                        me lately:
                        I’m feeling incredibly
                        stressed about my academic workload. Every day, it seems like there’s another assignment due,
                        another exam to prepare for, or another project to complete. I’m constantly racing against the
                        clock, trying to keep up with everything, and it’s starting to take a toll on me.

                        The pressure to perform well is immense. I know that my grades will significantly impact my
                        future opportunities, and that thought alone keeps me up at night. I often find myself
                        questioning if I’m good enough or if I’ll be able to meet the expectations set by my professors,
                        my family, and even myself. There’s this nagging fear of failure that I can’t seem to shake off.

                        Balancing my academic responsibilities with other aspects of my life feels impossible sometimes.
                        I’m sacrificing sleep, social interactions, and even my hobbies just to stay on top of my
                        studies. It’s as if there’s this constant background noise in my mind, a never-ending to-do list
                        that won’t let me relax.

                        I know I’m not alone in feeling this way, but it’s hard to talk about it openly. Admitting that
                        I’m struggling feels like admitting weakness, and I worry about how others will perceive me. But
                        the truth is, I’m overwhelmed, and I don’t know how to find a healthy balance.

                        I’m trying to remind myself that it’s okay to ask for help, to take breaks, and to prioritize my
                        mental health. Yet, in the heat of the moment, it’s easier said than done. I’m hoping that by
                        acknowledging my stress and being honest about it, I can start finding ways to cope and manage
                        my academic responsibilities more effectively.
                    </p>
                    {/*<div*/}
                    {/*    className={`h-56 flex justify-center items-center text-5xl px-8 text-center leading-[65px] font-semibold`}>I’m*/}
                    {/*    trying*/}
                    {/*    to remind*/}
                    {/*    myself that*/}
                    {/*    it’s*/}
                    {/*    okay*/}
                    {/*    to*/}
                    {/*    ask for help*/}
                    {/*</div>*/}
                    <div className={`flex mt-5 gap-3`}>
                        <div className={`flex items-center gap-2`}>
                            <AiOutlineHeart className={`text-lg`}/>
                            <p className={`font-semibold text-sm`}>25 likes</p>
                        </div>
                        <div className={`flex items-center gap-2 hover:bg-emerald-100 p-2 rounded-full cursor-pointer`}>
                            <IoHeartDislikeOutline className={`text-lg`}/>
                            <p className={`font-semibold text-sm`}>25 dislikes</p>
                        </div>
                        <div className={`flex items-center gap-2`}>
                            <AiOutlineComment className={`text-lg`}/>
                            <p className={`font-semibold text-sm`}>25 comments</p>
                        </div>
                    </div>
                </div>
            </div>
            {openPost &&
                <div className={`fixed inset-0 w-full pb-8 overflow-y-scroll backdrop-blur h-full bg-gray-600/30`}>
                    <div className={`flex justify-end sticky top-0`}>
                        <div onClick={() => {
                            setOpenPost(false)
                            document.body.style.overflowY = 'auto'
                        }} className={`p-3 shadow cursor-pointer backdrop-blur m-3 rounded-full text-2xl bg-white`}>
                            <AiOutlineClose/>
                        </div>

                    </div>
                    <Confession/>
                </div>}
        </>
    );
};

export default ConfessionCard;