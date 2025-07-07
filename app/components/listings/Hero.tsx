
import Image from "next/image"
import heroBg from "@/public/imgs/listings/listing-hero.jpg"
import SearchBar from "./SearchBar"

const Hero : React.FC = () => {
    
    return (
        <div className="flex flex-col h-[700px] relative items-center justify-center gap-10">
            <Image src={heroBg} alt="Image of a city" className="absolute top-0 opacity-[0.93] left-0 grayscale-[50%] h-full z-[1]" />
            <h1 className="text-[1rem] md:text-[2rem] lg:text-[4rem] text-primary font-[700] z-[3]">
                Listings
            </h1>

            <SearchBar />
            
        </div>
    )
}

export default Hero