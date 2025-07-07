import { Property } from "@/app/types"


const Card = ({property} : {property : Property}) => {
    return (
        <div className="w-[20rem] h-[25rem] border-2 border-primary bg-primary text-white flex flex-col rounded-[8px] border-none hover:scale-[1.02]">
            <img src={ property.imageUrl ? property.imageUrl : null} className="flex-2 rounded-t-[8px]"  />
            <p className="p-4">Damascus, Appartment</p>
        </div>
    )
}

export default Card