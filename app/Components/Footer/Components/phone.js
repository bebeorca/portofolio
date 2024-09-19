import Image from "next/image"

export default function PhoneV() {
    return (
        <a href="https://wa.me/+6282155369381" target="_blank" class="bg-white flex-wrap  p-4 flex gap-3 hover:scale-105 transition-transform">
            <Image src={"/images/contact/phone.svg"} width={25} height={0} />
            <h1 class="text-black">082155369381</h1>
        </a>
    )
}