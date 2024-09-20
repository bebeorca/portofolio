import Image from "next/image";

export default function GithubV() {
    return (
        <a href="https://github.com/bebeorca" target="_blank" class="bg-white flex-wrap  p-4 flex gap-3 hover:scale-105 transition-transform">
            <Image src={"/images/contact/github.svg"} width={25} height={0} alt="Image" />
            <h1 class="text-black">bebeorca</h1>
        </a>
    )
}