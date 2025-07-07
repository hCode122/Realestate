import Body from "@/app/components/Article/Body"
import ReadMore from "@/app/components/Article/ReadMore"
import Footer from "@/app/components/misc/Footer/Footer"
import Navbar from "@/app/components/misc/Navbar/Navbar"

const Article = async ( {params }: { params: { lang: string, slug: string }}) => {
 
    const {slug} = await params

    return (
        <div className="flex flex-col min-h-[100%]">
            <Navbar />
            {slug ? <Body slug={slug} /> : null }
            <ReadMore />
            <Footer />
        </div>
    )
}

export default Article