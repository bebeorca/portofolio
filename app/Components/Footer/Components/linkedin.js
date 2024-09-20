import Image from "next/image";

export default function LinkedinV() {
    return (
        <a href="https://www.linkedin.com/in/dimas-deo-rezkidyo-6380b91b4/" target="_blank" class="bg-white flex-wrap p-4 flex gap-3 hover:scale-105 transition-transform">
            <Image src={"/images/contact/linkedin.svg"} width={25} height={0} alt="Image"/>
            <h1 class="text-black">Dimas Deo Rezkdiyo</h1>
        </a>
    )
}