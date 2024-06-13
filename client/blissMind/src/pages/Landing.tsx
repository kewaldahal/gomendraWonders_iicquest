import Hero from "../components/Hero.tsx";
import Feelings from "../components/Feelings.tsx";
import SessionsCards from "../components/SessionsCards.tsx";
import BlogCards from "../components/BlogCards.tsx";
import Subscription from "../components/Subscription.tsx";

const Landing = () => {
    return (
        <div className={`container mx-auto`}>
            <Hero/>
            <Feelings/>
            <SessionsCards/>
            <Subscription/>
            <BlogCards/>
        </div>
    );
};

export default Landing;