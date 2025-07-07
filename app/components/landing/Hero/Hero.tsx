import Styles from "./heroStyle.module.css"

const Hero = () => {

    return (
        <div className="relative bg-primary w-full h-[850px]  z-3 flex flex-col justify-center items-center gap-4 text-center overflow-hidden">
            <div className={`${Styles.bgImg}`}></div>
            <div className={`flex gap-16 w-full h-full z-2 relative p-4`}>
                <div className="absolute left-4 bottom-1/2 ">
                    <div className={`${Styles['hero-text']} absolute h-full w-full`}></div>
                    <div className="flex flex-col gap-4 p-4">
                        <h1 className=" text-[4rem] text-white font-[600] text-left z-10">Transform Ideas Into Reality</h1>
                        <p className="font-[300] text-[1.5rem] text-white opacity-[0.9] z-[3] ">Harness cutting-edge solutions designed to elevate your business beyond boundaries. Start your journey today.</p>
                    </div>
  
                </div>
            </div>
            

            <span className="h-[150px] w-[250px] absolute -bottom-4  -right-32 rounded-t-full   bg-tertiary"></span>
        </div>
    )
}

export default Hero