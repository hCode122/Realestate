'use client'

import { useState, useEffect, useRef } from "react"
import CardSection from "./CardSection"
const RecentlyAdded = () => {
    const [inSight, setInSight] = useState(false)
    const [hasMoved, setMoved] = useState(false)
    const sectionRef = useRef<HTMLDivElement | null>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInSight(entry.intersectionRatio > 0.7);
                
            },
            {
                threshold: [0.7], 
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }



        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
       if (inSight) setMoved(true)
    }, [inSight])

    return (
        <div ref={sectionRef} className="flex flex-col items-center pt-12 h-[570px] relative">
                <span className="bg-tertiary w-full h-[20%] absolute bottom-0" />
                <h2 className="font-[600] text-black text-[2.5rem] text-center">Recently Added</h2>
                <CardSection />

                <span
                className={`h-[250px] w-[250px] absolute rounded-full bg-tertiary 
                    left-4 transition-transform duration-700 ease-in-out ${hasMoved ? '-translate-y-[150px]' : 'translate-y-[100%]'}
                    ${inSight && !hasMoved ? "-translate-y-[150px] opacity-100" : ""}`}
                ></span>
        </div>
    )
}

export default RecentlyAdded