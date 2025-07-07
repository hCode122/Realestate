import Hero from "@/app/components/about-us/Hero"
import Navbar from "@/app/components/misc/Navbar/Navbar"
import Footer from "@/app/components/misc/Footer/Footer"
import FAQ from "@/app/components/about-us/FAQ"
import Contact from "@/app/components/about-us/Contact"
import Mission from "@/app/components/about-us/Mission"
import Team from "@/app/components/about-us/Team"
const AboutUs = () => {

    return (
        <div className="flex flex-col">
            <Navbar />
            
            <Hero />
            <Mission />
            <Team />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    )
}

export default AboutUs