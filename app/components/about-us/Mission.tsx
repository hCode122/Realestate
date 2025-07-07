import missionPicture from "@/public/imgs/about-us/about-mission.jpg"
import Image from "next/image"
import icon from "./icons8-tick.svg"
const Mission = () => {

    return (
        <div className="grid grid-cols-5 grid-rows-7 px-16 gap-16 h-[850px] bg-primary text-secondary py-12 font-playfair leading-relaxed">

       
      
        <div className="relative col-start-1 col-span-2 row-start-1 row-span-7">
          <Image 
            src={missionPicture} 
            alt="Picture of the team"
            className="object-contain w-full h-full border-b-2 border-l-2 p-4 border-tertiary rounded-bl-lg"
            fill
          />
        </div>

        <div className="flex flex-col gap-[1rem] row-start-1 row-span-2 col-span-2 justify-between pt-2">
            <h2 className="h2 text-tertiary ">Mission</h2>
            
            <p className="text-[1.5rem] leading-relaxed mt-4">
            <b>Our mission </b> is simple: to redefine real estate by putting people before properties. We don't just close deals; we create lifelong partnerships. Here's how:
            </p>
        </div>
       
      
        <div className="col-span-3 row-start-3 row-span-5 grid grid-rows-3 pb-4 mt-12">
          <div className="flex flex-col gap-6">
            <h3 className="text-[1.9rem] font-[600] text-tertiary  w-[23rem] relative border-animation">Tailored Guidance</h3>
            <p className="text-[1.5rem] leading-normal">
              No two clients are alike. We listen first, then craft strategies around your unique goals.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[1.9rem] font-[600] text-tertiary  w-[23rem] relative border-animation">Unmatched Local Insight</h3>
            <p className="text-[1.5rem] leading-normal">
              From hidden-gem listings to off-market opportunities, we know [City] like the back of our hand.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[1.9rem] font-[600] text-tertiary  w-[23rem] relative border-animation">White-Glove Service</h3>
            <p className="text-[1.5rem] leading-normal">
            24/7 availability, transparent communication, and a relentless focus on your satisfaction.
            </p>
          </div>
        </div>
      </div>
    )
}

export default Mission