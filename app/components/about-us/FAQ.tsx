'use client'
import Question from "./Question"
import { UseStore } from "react-redux"
import { useGetFaqsQuery } from "@/lib/redux/api/mainApi"
import { useEffect } from "react"
const FAQ = () => {
    const {data, isLoading, error} = useGetFaqsQuery() 

    useEffect(() => {
        console.log(data)
    }, [data])
    
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading FAQs!</div>
    
    return (
        <div className="h-[400px] flex flex-col gap-6  px-8">
            <h2 className="relative text-[2.3rem] font-[700] mr-auto z-3">Frequently asked questions</h2>
            
                <div className="flex flex-col gap-2 items-start">
                {
                    data?.data?.map(faq => (
                        <Question key={faq.id} question={faq.question} answer={faq.answer} />
                    ))
                }
                </div>
            
        </div>
    )
}

export default FAQ