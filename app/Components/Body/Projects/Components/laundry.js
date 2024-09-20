import Image from "next/image";

export default function Laundry() {
    return (
        <div
            class="max-w-full lg:w-screen bg-[#134B70] p-8 z-0 group text-center flex flex-col justify-between items-center overflow-hidden">
            <div class="pb-10 ">
                <h1 class="text-4xl font-bold">
                    Laundry App
                </h1>
                <span>Mobile App</span>
            </div>
            <Image src={"/images/projects/laundry.png"} width={224} height={0} alt="Image" className="w-56 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out" />
            <h1 class="pt-10 lg:px-16 space-y-1">
                Built with <span class="highlight-animation px-1">Flutter</span>, this app features a custom-developed backend
                API using <span class="highlight-animation px-1">Golang</span> and utilizes a <span
                    class="highlight-animation px-1">MySQL</span> database for data storage.
            </h1>
        </div>
    );
}