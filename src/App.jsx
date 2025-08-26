import gsap from "gsap";
import { Navbar } from "./components/navbar";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const App = () => {
    return (
        <div>
            <Navbar />
        </div>
    );
};

export default App;
