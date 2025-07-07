'use client'
import Header from "./Header"
import { useGetArticleQuery } from "@/lib/redux/api/mainApi"
import { Tiro_Devanagari_Sanskrit } from "next/font/google"
import { useEffect } from "react"

const Body = ({slug} : {slug: string}) => {

    const {data, isLoading, error} = useGetArticleQuery(slug)

    const date = data && new Date(data.created_at);

    const formattedDate = date?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    });

   
    return (
        <div className="w-full bg-secondary text-primary flex flex-col pb-16 px-18">
            {data && <Header category={data.category.name} title={data.title} user={data.user.name} imgUrl={data.image} />}
            <div className=" text-[1.4rem]">
                {data && <RenderHTML htmlContent={data.content} />}
            </div>
            <p className="text-[1.7rem] text-gray-500 font-[600] mt-8">Posted at {formattedDate}</p>
        </div>
    )
}

const RenderHTML: React.FC<RenderHTMLProps> = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

interface RenderHTMLProps {
    htmlContent: string;
}

export default Body