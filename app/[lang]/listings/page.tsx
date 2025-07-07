import Navbar from "@/app/components/misc/Navbar/Navbar"

import Footer from "@/app/components/misc/Footer/Footer"
import Hero from "@/app/components/listings/Hero"
import ResultSection from "@/app/components/listings/ResultSection"
import SearchBar from "@/app/components/listings/SearchBar"

const Landing = () => {

    return (
        <div className="flex flex-col min-h-screen ">
                <Navbar />
                <SearchBar/>
                <ResultSection />
                <Footer />
        </div>
    )
}

export default Landing