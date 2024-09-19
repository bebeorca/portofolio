import Image from "next/image";

export default function YansG() {
    return (
        <div className="max-w-full lg:w-screen bg-[#6C946F] p-8 z-0 group text-center flex flex-col justify-between items-center overflow-hidden">
            <div className="pb-10 ">
                <h1 className="text-4xl font-bold">
                    Yans Garden
                </h1>
                <span>Website</span>
            </div>
            <Image src={"/images/projects/yans.png"} width={384} height={0} className="w-96 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out"/>
            <h1 className="pt-10 lg:px-16 space-y-1">
                Built with <span className="highlight-animation px-1">HTML and Tailwind</span>, this website provides information for those who want to make their garden more vibrant and alive.
            </h1>
        </div>
    );
}