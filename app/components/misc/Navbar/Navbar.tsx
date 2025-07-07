'use client'
import Image from "next/image"
import LinkGroup from "./LinkGroup"
import PrimaryButton from "../MiniComponents/PrimaryButton"
import { useState, useEffect } from "react"
import Styles from "./navbar.module.css"
const Navbar = () => {

    const [isScrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    return (
        <div className={`flex justify-between pt-2 pb-2 px-8 items-center w-full z-24 transition duration-400 border-b-4 border-tertiary ${isScrolled ? `bg-secondary text-black fixed ` : `bg-primary text-white  `}`}>
            <Image src={'/icons/misc/logo-house.svg'} className={`${isScrolled ? '' : Styles.logoColor }`} alt="website logo" width={55} height={55} />
            <LinkGroup />
            <PrimaryButton text="إتصل بنا" />
        </div>
    )
}

const Navbar2 = () => {

    return (
        <div className="flex">
            <div className="flex gap-4">

            </div>

            <PrimaryButton text="Contact Us" />
        </div>
    )
}

export default Navbar