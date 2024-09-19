import LandingName from "./Landing/name";
import LandingPic from "./Landing/profilepic";

export default function Landing() {
    return (
        <div className="h-screen text-7xl font-bold lg:flex flex-wrap lg:overflow-hidden grid justify-center items-center lg:justify-evenly">
            <LandingName />
            <LandingPic />
        </div>
    );
}