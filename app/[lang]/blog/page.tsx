import Navbar from "@/app/components/misc/Navbar/Navbar"
import Hero from "@/app/components/Blog/Hero"
import ArticlesGrid from "@/app/components/Blog/ArticlesGrid"
import Footer from "@/app/components/misc/Footer/Footer"

const Blog = () => {
   

    return (
        <div className="flex flex-col min-h-screen bg-red-500">
            <Navbar />
            <div className="flex-grow"> {/* This will push the footer down */}
                <Hero />
                <ArticlesGrid />
            </div>
            <Footer />
        </div>
    )
}

export default Blog