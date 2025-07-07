'use client'
import { useGetArticlesQuery } from "@/lib/redux/api/mainApi"
import { useEffect } from "react"
import ArticleCard from "./ArticleCard"

const ReadMore = () => {

    const {data, isLoading, error} = useGetArticlesQuery()

 

    return (
        <div className="flex flex-col pb-12">
            <h1 className="px-18 text-[2.5rem] font-[700]">Read More:</h1>
            <div className="flex justify-between px-18 py-8 h-[600px] gap-16">
                <div className="flex-1 ">
                    {data && <ArticleCard slug={data.data.data[0].slug} title={data.data.data[0].title} img={data.data.data[0].image}/> }

                </div>  

                <div className="flex flex-col justify-between flex-1 gap-4">
                    {data && data.data.data[1] && <ArticleCard slug={data.data.data[1].slug} title={data.data.data[1].title} img={data.data.data[1].image}/> }
                    {data && data.data.data[2] && <ArticleCard slug={data.data.data[2].slug} title={data.data.data[2].title} img={data.data.data[2].image}/> }
                </div>

            </div>
        </div>
        
    )
}

export default ReadMore