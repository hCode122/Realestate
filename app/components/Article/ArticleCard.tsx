import Link from "next/link";

interface ArticleCardProps {
    title: string;
    slug: string;
    img: string;
}

const ArticleCard = ({title, slug, img} : ArticleCardProps) => {
    return (
        <Link href={slug} className="flex-1 rounded-md relative w-auto h-auto block hover:scale-[1.02] transition duration-500 ">
        <img 
            src={img ? "https://real-estate.jamous-tech.com/storage/" + img : "https://placehold.co/600x400"} 
            className="w-full h-full rounded-md" 
        />
        <div className="absolute bottom-0 left-0 right-0 z-10 text-[1.5rem] text-white bg-primary h-[5rem] flex items-center p-4">
            <p className="overflow-hidden whitespace-nowrap text-ellipsis">{title}</p>
        </div>
    </Link>
    )
}

export default ArticleCard