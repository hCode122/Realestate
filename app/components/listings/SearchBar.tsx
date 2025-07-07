import CategoryDropdown from "./CategoryDropdown"

const SearchBar: React.FC = () => {

    const options = [{value : 'aa'},
        {value : 'aa'},
        {value : 'aa'}
    ]

    return (
        <div className="flex gap-4 z-[4] px-4 py-6">
            <div className="flex border-gray-400 border-2 w-[25rem]">
                <input className="flex-9 px-2 py-3 text-[0.8rem] focus:outline-none focus:border-tertiary border-1 border-gray-400 " placeholder="Search by location..." />
                <div className="bg-tertiary p-4 flex-1 border-2 border-tertiary">
                    
                </div>
            </div>
            <CategoryDropdown options={options} label="Building Type" />
            <CategoryDropdown options={options} label="Price Range" />
            <CategoryDropdown options={options} label="Number of Beds" />
            <CategoryDropdown options={options} label="Number of Rooms" />

        </div>
    )
}

export default SearchBar