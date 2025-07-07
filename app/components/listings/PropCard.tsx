import Image from "next/image"
import { Property } from "@/app/types"
import Link from "next/link"

import bed from "@/public/icons/listings/bed.svg"
import room from "@/public/icons/listings/room.svg"



const PropCard = ({propertyData} : { propertyData : Property}) => {

    return (
        <Link href="#" className="flex flex-col   text-primary col-span-4 row-span-2 bg-gray-200 border-1 border-gray-400 hover:scale-[1.02] transition duration-200">
            <Image width={480}  height={340} alt="Property Image" src={
                propertyData.featured_image ? "https://real-estate.jamous-tech.com/storage/" + propertyData.featured_image
            : "https://placehold.co/340x480"} className="flex-1 flex-grow-0 rounded-t-[16px] pt-1 px-1" />
             
            <div className="flex-1 p-4 flex flex-col font-[600] gap-2 bg-tertiary">
                <p className="text-[1.5rem]">{propertyData.title}</p>
                <div className="flex gap-2 text-[1.1rem] opacity-[0.8]">
                    <p>{propertyData.type}</p>,
                    <p>{propertyData.location}</p>
                </div>
                <div className="flex gap-12 mt-2">
                    <div className="flex gap-3 items-center w-8">
                        <Image alt="bed icon"  src={bed} />
                        <p>{propertyData.bedrooms}</p>
                    </div>    
                    <div className="flex gap-3 items-center w-8">
                        <Image alt="bed icon"  src={room} />
                        <p>{propertyData.bathrooms}</p>
                    </div>    
                  
                </div>
                <p className="mt-2 text-[1.2rem]">{propertyData.price}$</p>
            </div>
        </Link>
    )
}

export default PropCard