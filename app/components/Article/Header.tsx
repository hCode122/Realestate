
const Header = ({title, user, imgUrl, category} : {title: string, user: string, imgUrl: string, category: string}) => {

    return (
        <div className="flex flex-col gap-4 items-center pb-16">
            <img src={imgUrl ? "https://real-estate.jamous-tech.com/storage/" +  imgUrl : "https://placehold.co/600x400"} className="h-[500px] object-cover w-[850px] mt-8 rounded-lg shadow-xl" alt="header image" />
            <h1 className="text-[3.4rem] font-[700] mt-2">{title}</h1>
            <div className="font-[500] opacity-[0.7] text-[1.4rem] flex gap-4 items-center">
                <p>{user}</p>
                |
                <p>{category}</p>
            </div>
        </div>
    )
}

export default Header