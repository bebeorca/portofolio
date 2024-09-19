import Image from "next/image";

export default function ARC() {
    return (
        <div class="max-w-full lg:w-screen bg-[#134B70] p-8 z-0 group text-center flex flex-col justify-between items-center overflow-hidden">
            <div class="pb-10 ">
                <h1 class="text-4xl font-bold">
                    Alfa Rent Car
                </h1>
                <span>Website</span>
            </div>
            <Image src={"/images/projects/arc.png"} width={384} height={0} className="w-96 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out"/>
            <h1 class="pt-10 lg:px-16 space-y-1">
                Built with <span class="highlight-animation px-1">Vue and Tailwind</span>, this website is designed to advertise a car rental business based in Makassar.
            </h1>
        </div>
    );
}