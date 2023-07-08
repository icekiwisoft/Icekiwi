import About from "../Components/About";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Contact from "../Components/Contact";
import Services from "../Components/Services";
import Litterary from "../Components/Litterary";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Contact />
            <Litterary />
            <Footer />

        </>
    )
}