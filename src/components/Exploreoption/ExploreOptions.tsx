
import AccordianCard from "../utils/AccordianCard/AccordianCard"
import { PopularCusines,Popularrestraunts,citieswedeliver } from "./AccordianData"


const ExploreOptions = () => {
  return (
    <div className="w-[100% py-[2rem] bg-[#FCFCFC] flex justify-center items-center ">
        <div className="innerContainer w-[70%]">
        <div className="my-[0.5rem] text-[2.5rem] font-[450]">Explore options near me</div>
            <AccordianCard title="Popular cuisines near me" content={PopularCusines}/>
            <AccordianCard title="Popular restraunts near me" content={Popularrestraunts}/>
            <AccordianCard title="Cities We Deliver To" content={citieswedeliver}/>

            
        </div>
    </div>
  )
}
export default ExploreOptions
