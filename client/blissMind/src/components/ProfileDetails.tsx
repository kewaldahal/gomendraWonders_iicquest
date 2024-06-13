import {NavLink} from "react-router-dom";

const ProfileDetails = () => {
    return (
        <div className={`flex items-center gap-8`}>
            <img className={`w-40 h-40 rounded-full`} src="https://avatar.iran.liara.run/public" alt=""/>
            <div>
                <p className={`font-bold text-lg`}>Kamal Thapaliya</p>
                <p className={`text-gray-600`}>kamalthapaliya7@gmail.com</p>
                <p className={`px-3 uppercase mt-1.5 font-semibold text-xs p-0.5 rounded-full bg-green-200 w-fit`}>student</p>
                <div className={`flex gap-3 mt-8 font-medium `}>
                    <NavLink to={``}>
                        <p className={`/profile`}>My
                            Journals</p>
                    </NavLink>
                    <NavLink to={`confessions`}>
                        <p className={`/profile/confessions`}>My
                            Confessions</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;