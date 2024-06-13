import ProfileDetails from "../components/ProfileDetails.tsx";
import {Outlet} from "react-router-dom";

const ProfilePage = () => {
    return (
        <div className={`container mx-auto my-5 flex flex-col gap-8`}>
            <ProfileDetails/>
            <Outlet/>
        </div>
    );
};

export default ProfilePage;