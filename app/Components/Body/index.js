import Projects from "./Projects"
import Skills from "./Skills"

export default function Body(){
    return(
        <div className="lg:px-14 px-4 pb-56 z-50">
            <Projects />
            <Skills />
        </div>
    )
}