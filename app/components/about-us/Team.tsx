import TeamCarousel from "./TeamCarousel"

const Team = () => {

    return (
        <div className="grid grid-rows-5 grid-cols-4 px-18 py-12">
            <h2 className="h2 col-start-2 row-span-1 col-span-2 text-center">Meet the Team</h2>
            <TeamCarousel />

        </div>
    )
}

export default Team