'use client'

import { useState, useRef, useEffect } from "react";
import ServiceCard from "./ServiceCard";

const CardSection = () => {
  const [inSight, setInSight] = useState(false);
  const [hasMoved, setMoved] = useState(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0.4) {
            setInSight(true);
            observer.disconnect(); 
          }
        
      },
      {
        threshold: [0.4],
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
    if (inSight) setMoved(true);
  }, [inSight]);

  return (
    <div
      ref={sectionRef}
      className={`flex justify-between w-[85%] mt-8 opacity-0 transition duration-700 pb-8
            ${inSight ? "opacity-100" : "-translate-x-[20%]"}
        `}
    >
      <ServiceCard
        title={`Own the house of your dreams`}
        imgUrl={"/icons/landing/buy.svg"}
        description={`
                    
We offer you a wide range of properties for sale, whether you're looking for an apartment, villa, or investment land. Discover the right properties for you at the best prices with flexible payment options.`}
      />
      <ServiceCard
        title={`Find the perfect place to rent`}
        imgUrl={"/icons/landing/sell.svg"}
        description={`
Whether you need a residential apartment, office space, or a luxury villa, we offer diverse options to suit your needs and budget, with flexible contracts and integrated support services.`}
      />
      <ServiceCard
        title={`Make the most use out of your property`}
        imgUrl={"/icons/landing/rent.svg"}
        description={`
We help you sell your property quickly and at the best price through professional marketing strategies and an extensive network of potential buyers. Enjoy a smooth and hassle-free selling experience with us.`}
      />
    </div>
  );
};

export default CardSection;
