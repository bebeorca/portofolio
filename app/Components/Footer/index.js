import EmailV from "./Components/email";
import GithubV from "./Components/gh";
import LinkedinV from "./Components/linkedin";
import PhoneV from "./Components/phone";

export default function Footer() {
    return (
        <div class="lg:px-14 px-8 pb-14 z-50 disable-cursor">
            <h1 class="lg:text-9xl text-6xl font-bold z-50 ">
                About Me
            </h1>
            <div class="bg-[#030637] p-8 text-white grid justify-center">
                <h1 class="text-1xl">
                    I enjoy designing websites especially backend systems, and mobile app. I interned at Metrotech Digital Asia in Makassar and currently work as a freelance developer.
                </h1>
                <div class="lg:flex justify-center pt-8 lg:gap-5 grid gap-2">
                    <LinkedinV />
                    <GithubV />
                    <EmailV />
                    <PhoneV />
                </div>
            </div>
        </div>
    )
}