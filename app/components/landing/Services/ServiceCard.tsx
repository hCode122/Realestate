import Image from "next/image"

const ServiceCard  = ({imgUrl, title, description} : {imgUrl: string, title: string, description: string}) => {
    return (
        <div className="flex flex-col  p-4 items-center w-[24rem] ">
            <Image src={imgUrl} alt="service card picture" width={80} height={80} className="rounded-full bg-secondary p-2" />
            <p className="mt-12 text-[1.2rem] text-white text-center font-bold">{title}</p>
            <p className="mt-4 text-[1.05rem] w-[70%] opacity-[0.9] text-white text-center px-4">{description}</p>
        </div>
    )
}

export default ServiceCard