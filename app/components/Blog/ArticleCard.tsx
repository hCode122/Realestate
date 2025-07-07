import { Article } from "@/app/types"

import Link from "next/link"
import "./cardStyle.css"

interface ArticleCardProp {
    article: Article
}


const ArticleCard = ({article} : ArticleCardProp) => {


    return (
        <Link href={"/en/blog/" + article.slug} className="flex flex-col gap-4 p-6 h-[32rem]  items-between  rounded-lg text-primary shadow-lg border-2 border-gray-200 scaleImage cursor-pointer" >
            <img src={article.image ? "https://real-estate.jamous-tech.com/storage/" + article.image : "https://placehold.co/600x400"} alt="Article Image" className="flex-2 max-w-[100%] h-[76%] rounded-lg object-cover" />
            
            <div className="flex flex-col gap-2 flex-1">
                <p className="text-[1.4rem] font-[700]">{article.title}</p>

                <div className="flex gap-4 opacity-[0.8] text-[0.9rem]">
                    <p>Last Updated 22, Aug, 24 </p>
                    |
                    <p>{article.user.name}</p>
                </div>

                <span className="text-[1rem] mt-6 overflow-hidden flex-1"><RenderHTML htmlContent={article.content} /></span>

                
            </div>
        </Link>
    )
}

const RenderHTML: React.FC<RenderHTMLProps> = ({ htmlContent }) => {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

interface RenderHTMLProps {
    htmlContent: string;
}

export default ArticleCard