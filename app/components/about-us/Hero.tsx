import Image from "next/image"
import heroPicture from "@/public/imgs/about-us/about-hero.jpg"
import ImageGroup from "./ImageGroup"

const Hero = () => {

    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-[5rem] px-16 py-1 items-center bg-secondary  h-[700px] ">
              <div className="flex flex-col gap-4 col-span-2 row-span-4 text-primary">
                <h2 className="h2 ">About Us</h2>
                <p className="flex-2 text-[1.5rem] ">
                At [Your Company Name], we believe finding a home should be exhilarating, not exhausting. Founded in [Year] by [Founder’s Name], our team of award-winning agents combines decades of local expertise with a passion for personalized service. Whether you’re buying, selling, or investing, we’re committed to making your real estate journey seamless—from the first search to the final signature.

Based in [City], we’ve helped over [X] families discover properties that aren’t just houses, but havens. Our deep roots in the community mean you get insider knowledge on neighborhoods, schools, and market trends—so you can make <span className="text-tertiary font-[600]">decisions</span> with <span className="text-tertiary font-[600]">confidence.  </span>              </p>
            </div>
            
            <ImageGroup />
          
        </div>
    )
}

export default Hero