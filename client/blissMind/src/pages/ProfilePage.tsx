import ProfileDetails from "../components/ProfileDetails.tsx";

const ProfilePage = () => {
    return (
        <div className={`container mx-auto my-5 flex flex-col gap-8`}>
            <ProfileDetails/>
        </div>
    );
};

export default ProfilePage;