export default function Quiz() {
    return (
        <div
            class="max-w-full lg:w-screen bg-[#5A639C] p-8 z-0 group text-center flex flex-col items-center overflow-hidden">
            <div class="pb-10 ">
                <h1 class="text-4xl font-bold">
                    Quiz App
                </h1>
                <span>Mobile App</span>
            </div>
            {/* <img class="w-56 shadow-md transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
                        src="/images/quiz.jpeg" alt=""> */}
            <h1 class="pt-10 lg:px-16 space-y-1">
                Built with <span class="highlight-animation px-1">Flutter</span>, this app features a custom-developed backend
                API using <span class="highlight-animation px-1">Golang</span> and utilizes a <span
                    class="highlight-animation px-1">MySQL</span> database for data storage.
            </h1>
        </div>
    );
}