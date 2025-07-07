import Navbar from "@/app/components/misc/Navbar/Navbar"
import Hero from "@/app/components/landing/Hero/Hero"
import RecentlyAdded from "@/app/components/landing/RecentlyAdded/RecentlyAdded"
import Services from "@/app/components/landing/Services/Services"
import ContactUs from "@/app/components/landing/Contact/ContactUs"
import Footer from "@/app/components/misc/Footer/Footer"
const Landing = () => {

    return (
        <div className="flex flex-col">
                <Navbar />
                <Hero  />
                <RecentlyAdded />
                <Services />
                <ContactUs />
                <Footer />
        </div>
    )
}

export default Landing