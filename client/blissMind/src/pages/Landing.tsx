import Hero from "../components/Hero.tsx";
import Feelings from "../components/Feelings.tsx";
import SessionsCards from "../components/SessionsCards.tsx";
import BlogCards from "../components/BlogCards.tsx";

const Landing = () => {
    return (
        <div className={`container mx-auto`}>
            <Hero/>
            <Feelings/>
            <SessionsCards/>
            <BlogCards/>
        </div>
    );
};

export default Landing;