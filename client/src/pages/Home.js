import NavBar from "../components/NavBar/NavBar";
import SideBar from "../components/SideBar/SideBar";
import { useState } from "react";
import IntroSection from "../components/IntroSection/IntroSection";
import BodySection from "../components/BodySection/BodySection";
import { ObjectOne, ObjectTwo } from "../components/BodySection/Data";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";



const Home = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    const clickToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <SideBar isOpen={isOpen} clickToggle={clickToggle} />
            <NavBar clickToggle={clickToggle} />
            <IntroSection />
            <BodySection {...ObjectOne} />
            <BodySection {...ObjectTwo} />
            <Services />
            <Footer />
        </>
    )
}
export default Home;