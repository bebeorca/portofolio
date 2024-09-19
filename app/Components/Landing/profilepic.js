import Image from "next/image";

export default function LandingPic() {
    return (
        <div className="flex justify-center">
            <div className="absolute left-15 top-16 rounded-full md:w-80 w-40 h-60 md:h-96 bg-[#7776B3]"></div>
            <div className="absolute left-50 top-24 rounded-full md:w-96 w-60 md:h-80 h-40 bg-[#E8C5E5]"></div>
            <Image src="/images/profile.png" width={450} height={450} alt="Image" className="z-50"/>
        </div>
    );
}