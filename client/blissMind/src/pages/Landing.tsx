import Hero from "../components/Hero.tsx";
import Feelings from "../components/Feelings.tsx";
import SessionsCards from "../components/SessionsCards.tsx";

const Landing = () => {
    return (
        <div className={`container mx-auto`}>
            <Hero/>
            <Feelings/>
            <SessionsCards/>
        </div>
    );
};

export default Landing;