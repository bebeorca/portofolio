
export default function LandingPic() {
    return (
        <div className="flex justify-center">
            <div className="absolute md:top-16 rounded-full bottom-8 md:w-80 w-40 h-60 md:h-96 bg-[#7776B3]"></div>
            <div className="absolute ml-20 md:top-24 rounded-full bottom-8 md:w-96 w-60 md:h-80 h-40 bg-[#E8C5E5]"></div>
            <img src="/images/profile.png" alt="Image" className="md:scale-150 scale-90"/>
        </div>
    );
}