import {AiOutlineComment, AiOutlineEdit, AiOutlineHeart, AiOutlineSend} from "react-icons/ai";
import Comment from "./Comment.tsx";
import {IoHeartDislikeOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";

const Confession = () => {
    const navigate = useNavigate();

    return (
        <>

            <div className={`bg-gray-50 max-w-[900px] p-5 rounded container mx-auto`}>
                <div className={`flex justify-between`}>
                    <div className={`flex gap-3.5 items-center`}>
                        <img src="https://avatar.iran.liara.run/public" className={`w-14 h-14 bg-red-200 rounded-full`}
                             alt=""/>
                        <div className={`flex flex-col gap-0`}>
                            <p className={`font-semibold`}>Kamal Thapaliya</p>
                            <p className={`text-sm font-semibold text-gray-500`}>an hour ago</p>
                        </div>
                    </div>
                    <div onClick={() => {
                        navigate(`/edit/1`)
                        document.body.style.overflowY = 'scroll'
                    }}>
                        <AiOutlineEdit size={`1.7em`} className="cursor-pointer"/>
                    </div>
                </div>
                <div>
                    <p className={` text-gray-700`}>I need to confess something that’s
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
                        <br/>
                        <br/>
                        I need to confess something that’s
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
                        <div className={`flex items-center gap-2 hover:bg-emerald-100 p-2 rounded-full cursor-pointer`}>
                            <AiOutlineHeart className={`text-lg`}/>
                            <p className={`font-semibold text-sm`}>25 likes</p>
                        </div>
                        <div className={`flex items-center gap-2 hover:bg-emerald-100 p-2 rounded-full cursor-pointer`}>
                            <IoHeartDislikeOutline className={`text-lg`}/>
                            <p className={`font-semibold text-sm`}>25 dislikes</p>
                        </div>
                        <div className={`flex items-center gap-2 p-2`}>
                            <AiOutlineComment className={`text-lg`}/>
                            <p className={`font-semibold text-sm`}>25 comments</p>
                        </div>
                    </div>

                    <div className={`mt-5`}>
                        <p className={`font-semibold`}>Comments</p>
                        <div className={`my-3 mb-5 cursor-pointer flex  gap-2`}>
                            <input className={`border border-blue-200  text-sm rounded flex-grow outline-none p-1.5`}
                                   placeholder={`Enter the comment.`} type="text"/>
                            <div
                                className={`flex items-center p-3 mx-1  bg-green-500  hover:bg-green-600 transition text-xl text-white rounded`}>
                                <AiOutlineSend/>
                            </div>
                        </div>
                        <div className={`flex gap-5 flex-col`}>
                            <Comment/>
                            <Comment/>
                        </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default Confession;