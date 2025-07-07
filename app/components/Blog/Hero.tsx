'use client'

import { useGetCategoriesQuery } from "@/lib/redux/api/mainApi"
import { useState, useEffect } from "react"
import { Category } from "@/app/types"
import { useAppSelector, useAppDispatch } from "@/app/hooks"
import { setCategory } from "@/lib/redux/features/categorySlice"

const Hero = () => {

    const activeCat = useAppSelector(state => state.category)
    const dispatch = useAppDispatch()  

    const [categories, setCategories] = useState<Category[] | null>()

    const {data} = useGetCategoriesQuery()


    useEffect(() => {
        data && setCategories(data.data)
    }, [data])

    useEffect(() => {
        console.log(activeCat.name)
        console.log(activeCat.value)

    }, [activeCat])

    return (
        <div className="flex flex-col bg-primary text-secondary h-[350px] relative items-center justify-end gap-10">
            <h1 className="text-[1rem] md:text-[2rem] lg:text-[5rem] mb-6 text-secondary font-[700] z-[3]">
                Blog
            </h1>
            <div className="flex gap-4 text-[1.8rem] mb-4 mr-auto ml-6 ">
                <p onClick={() => dispatch(setCategory({name:'All', value: 0}))}
                 className="cursor-pointer transition duration-200">All Articles</p>
                <span> | </span>
                <div className="flex gap-6">
                    {
                        categories && categories.map((category, index) => (
                            <p key={index} className="cursor-pointer" 
                            onClick={() => dispatch(setCategory({category}))}>{category.name}</p>
                        ))
                    }
                </div>
            </div>
        
        </div>
    )
}

export default Hero