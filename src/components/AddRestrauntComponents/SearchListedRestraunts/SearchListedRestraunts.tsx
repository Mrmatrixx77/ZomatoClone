import SearchBar from "@/components/utils/SearchBar/SearchBar"


const SearchListedRestraunts = () => {
  return (
    <div className="relative w-full my-4 bg-[#e8e8e8]">
        <div className=" flex flex-wrap flex-col justify-center items-center p-16">
            <div className="title text-[2rem] md:text-center md:text-[2.5rem] font-semibold">Already have your restaurant listed?</div>
            <div className="tagLine md:text-[1.5rem] font-normal text-gray-600 mb-4">Search here and claim the ownership of your restaurant</div>
            <SearchBar/>
        </div>
    </div>
  )
}

export default SearchListedRestraunts