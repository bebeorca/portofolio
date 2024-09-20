import Image from "next/image"

export default function Skills() {
    return (
        <div class="pt-44">
            <h1 class="lg:text-9xl text-6xl font-bold z-50 pb-2">
                Skills
            </h1>
            <div class="flex flex-wrap justify-center items-center overflow-auto gap-2">
                <Image src={"/images/skills/kotlin.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
                <Image src={"/images/skills/react.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
                <Image src={"/images/skills/flutter2.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
                <Image src={"/images/skills/js.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
                <Image src={"/images/skills/go2.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
                <Image src={"/images/skills/laravel2.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
                <Image src={"/images/skills/vue.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
                <Image src={"/images/skills/next.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
                <Image src={"/images/skills/firebase2.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
                <Image src={"/images/skills/mysql.svg"} width={160} height={0} alt="Image" className="bg-white shadow-sm w-40" />
            </div>
        </div>
    )
}