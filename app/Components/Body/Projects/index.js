import Quiz from "./Components/quiz"
import Laundry from "./Components/laundry"

export default function Projects() {
    return (
        <div>
            <h1 className="lg:text-9xl text-4xl lg:pt-0 pt-60 font-bold z-50 pb-8">
                Projects
            </h1>
            <div className="lg:flex z-50 text-white ">
                <Quiz />
                <Laundry />  
            </div>
        </div>
    )
}