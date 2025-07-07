import Card from "./Card";
import { Property } from "@/app/types";

const CardSection = () => {

    const recentProperties : Property[] = [
        {
            title: "Seaside Condo",
            type: "Appartment",
            price: 15200,
            location : "Lattakia",
            imageUrl: ''
        },
        {
            title: "Seaside Condo",
            type: "Appartment",
            price: 15200,
            location : "Lattakia",
            imageUrl: ''
        },
        {
            title: "Seaside Condo",
            type: "Appartment",
            price: 15200,
            location : "Lattakia",
            imageUrl: ''
        }
    ]

    return (
        <div className="w-[80%] mt-8 flex justify-between z-[2]">
            {recentProperties.map((property, index) => (
                <Card key={index} property={property} />
            ))}
        </div>
    )
}

export default CardSection