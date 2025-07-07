import heroPicture from "@/public/imgs/about-us/about-hero.jpg"
import heroPicture2 from "@/public/imgs/landing/hero-house.jpg"
import Image from "next/image"

const ImageGroup = () => {
    const space = '5%'
    return (
        <div className="relative col-span-2 row-span-4 h-full">
           <div className="relative w-full h-[90%]"> 
        
                <Image 
                    src={heroPicture} 
                    className={`absolute shadow-lg z-0 w-[64%] h-[64%] object-cover top-1/2 left-3/5 transform -translate-x-[50%] -translate-y-[70%] 
                        hover:-translate-y-[75%] transition duration-500`}
                    alt="Left offset"
                />
                
                <Image 
                    src={heroPicture2} 
                    className={`absolute shadow-lg z-0 w-[64%] h-[64%] object-cover top-1/2 left-3/5 transform -translate-x-[75%] -translate-y-[50%] -rotate-[5deg]
                        hover:-translate-x-[80%] hover:-rotate-[9deg] transition duration-500`} 
                    alt="Right offset"
                />

                <Image 
                    src={heroPicture} 
                    className={`absolute shadow-lg z-10 w-[64%] h-[64%] object-cover top-1/2 left-3/5 -translate-x-[35%] transition duration-500 -translate-y-[30%] rotate-[5deg]
                        hover:-translate-y-[25%] hover:rotate-[7deg]`}
                    alt="Base image"
                />
            </div>
        </div>

    )
}

export default ImageGroup