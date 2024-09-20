import Image from "next/image"

export default function Kaset() {
    return (
        <div className="bg-[#C80036] max-w-full grid justify-between text-center text-white p-8 overflow-hidden">
            <div className="pb-10">
                <h1 className="lg:text-4xl font-bold text-2xl">
                    Kantin Sekolah Telkom
                </h1>
                <span>Website App</span>
            </div>
            <div className="flex justify-center group">
                <Image src={"/images/projects/kaset.png"} width={384} height={0} alt="Image" className="w-96 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out" />
            </div>
            <h1 className="pt-10 lg:px-56">
                Developing an e-commerce-like website for a canteen, I’m utilizing <span className="redhighlight-animation px-1">Laravel</span> for backend development and <span className="orghighlight-animation px-1">MySQL</span> for data storage, creating a robust system for managing canteen operations.
            </h1>
        </div>
    )
}