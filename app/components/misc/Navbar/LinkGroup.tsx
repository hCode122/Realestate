import Link from "next/link" 
import Styles from "./navbar.module.css"

const LinkGroup = () => {

    return (
        <div className="flex justify-between w-[35%] text-[1.5rem] font-[400] h-[2.2rem]">
            <Link className={`${Styles.linkAnimation}`} href={'/en/landing'}>Homepage</Link>
            <Link className={`${Styles.linkAnimation}`} href={'/en/listings'}>Properties</Link>
            <Link className={`${Styles.linkAnimation}`} href={'/en/blogs'}>Blog</Link>
            <Link className={`${Styles.linkAnimation}`} href={'/en/about-us'}>About-Us</Link>
        </div>
    )
}

export default LinkGroup