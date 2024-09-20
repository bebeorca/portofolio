import Image from "next/image"

export default function EmailV() {
    return (
        <div class="bg-white p-4 flex gap-3 flex-wrap">
            <Image src={"/images/contact/mail.svg"} width={25} height={0} alt="Image" />
            <h1 class="text-black">dimasrdyo@gmail.com</h1>
        </div>
    )
}