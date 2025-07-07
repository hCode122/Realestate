'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image, { StaticImageData } from 'next/image';
import UserIcn from "@/public/icons/about/user.svg"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Portrait from "@/public/imgs/about-us/portrait.avif"
import { useState, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper'; // Import Swiper type
import type { SwiperRef } from 'swiper/react';

interface Member {
    name: string;
    img: StaticImageData;
}

interface MemberProps {
    member: Member
}


const TeamCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperRef>(null);

    const members : Member[] = [
        {name: 'John Alberts, CEO', img: Portrait},
        {name: 'Sarah Weebly', img: Portrait},
        {name: 'Tom Angelo', img: Portrait},
        {name: 'Steven Herbert', img: Portrait},
        {name: 'Sandy Smith', img: Portrait},
        {name: 'John Alberts, CEO', img: Portrait},
        {name: 'Sarah Weebly', img: Portrait},
        {name: 'Tom Angelo', img: Portrait},
        {name: 'Steven Herbert', img: Portrait},
        {name: 'Sandy Smith', img: Portrait}
    ]

    return (
        <div className='row-span-4 row-start-2 col-start-1 col-span-4  gap-8 flex flex-col justify-between'>
            <Swiper
            spaceBetween={50}
            slidesPerView={4}
            centeredSlides={true}
            modules={[Navigation, Pagination]}
            navigation={false} 
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            pagination={{ 
                clickable: true,
                renderBullet: (index) => {
                    return '<span classNmae="w-4 h-4 rounded-full>  </span>'
                }
            }}
            ref={swiperRef}
            className='w-full '>
                {members.map((member, index) => (
                    <SwiperSlide className=''>
                        <MemberCard key={index} member={member} />
                </SwiperSlide>
                ))}
        </Swiper>

            <div className='flex justify-between items-center'>
                <CustomPagination totalSlides={7} activeIndex={activeIndex} 
                    onSlideChange={(index) => swiperRef.current?.swiper.slideTo(index)} />

                <Controllers swiperRef={swiperRef} />
            </div>
      
        </div>
    )
}

const MemberCard = ({member} : MemberProps) => {
    return (
        <div className='w-auto pb-4 flex flex-col gap-4 h-full'>
            <div className='flex-4 relative'>
                <Image src={member.img} className='aspect-square rounded-lg object-cover' alt="member image"/>
            </div>
            <p className='font-[400] text-[1.5rem] flex-1 p-2 shrink-0'>{member.name}</p>
        </div>
    )
}

const Controllers = ({ swiperRef }: { swiperRef: React.RefObject<SwiperRef> }) => {

    return (
        <div className='flex gap-4 items-center bg-green-400 w-44 h-44 rounded-full '>
            <button         onClick={() => swiperRef.current?.swiper.slidePrev()}  >Click </button>

                <button         onClick={() => swiperRef.current?.swiper.slideNext()}  >Click </button>
        </div>
    )
}

const CustomPagination = ({ 
    totalSlides,
    activeIndex,
    onSlideChange 
  }: {
    totalSlides: number;
    activeIndex: number;
    onSlideChange: (index: number) => void;
  }) => {
    return (
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? 'bg-tertiary scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    );
  };

export default TeamCarousel