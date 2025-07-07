'use client'
import { useGetPropertiesQuery } from "@/lib/redux/api/mainApi"
import { useState } from "react"
import { useEffect } from "react"
import { Property } from '@/app/types'
import PropCard from "./PropCard"

const ResultSection : React.FC = () => {
    const {data , isLoading, error} = useGetPropertiesQuery() 
    const [properties, setProperties] = useState<Property[] | null>(null)

        useEffect(() => {
            data && setProperties(data.data.data)
        }, [data]) 

     
    const tempData = [
        {
            title: 'prop1',
            price: '1000 000 000',
            type: 'Villa',
            location: 'Tartous',
            bedrooms: 3,
            bathrooms: 2
        },
        {
            title: 'prop1',
            price: '1000 000 000',
            type: 'Villa',
            location: 'Tartous',
            bedrooms: 3,
            bathrooms: 2
        },
        {
            title: 'prop1',
            price: '1000 000 000',
            type: 'Villa',
            location: 'Tartous',
            bedrooms: 3,
            bathrooms: 2
        },
        {
            title: 'prop1',
            featuredImage:'',
            price: '1000 000 000',
            type: 'Villa',
            location: 'Tartous',
            bedrooms: 3,
            bathrooms: 2
        }
    ]

    return (
        <div className="grid grid-cols-12 min-h-[500px] pb-6">
            <div className="col-span-1">

            </div>
            <div className="bg-gray-100 col-span-11 grid grid-cols-12 gap-6 grid-rows-5 p-6">
                {
                    tempData.map(prop => (
                        <PropCard propertyData={prop} />
                    ))
                }
            </div>
        </div>
    )
}

export default ResultSection