import Pupularcitycard from "./PopularCityCard/Pupularcitycard";

const PopularCities = () => {
  return (
    <div className="container w-[73%] mt-[2rem] mb-[2rem] md:mt-[3rem] md:mb-[3rem] flex  flex-col m-auto ">
      <div className="w-[100%]">
        <span className="md:text-[2.5rem] font-[600]  md:font-[450]">Popular localities in and around</span>
        <span className="md:text-[2.5rem] font-[600]  md:font-[600] ">  Delhi NCR</span>
        <div className="cards mt-[2rem] flex flex-wrap gap-3 items-center">
            <Pupularcitycard place="connaught Place" Count="153"/>
            <Pupularcitycard place="Saket" Count="42"/>
            <Pupularcitycard place="Rajouri" Count="46"/>
            <Pupularcitycard place="Rohini" Count="100"/>
            <Pupularcitycard place="Falana" Count="451"/>
            {/* <Pupularcitycard place="Vagera" Count="420"/> */}
            <Pupularcitycard place="see more" Count=">"/>

            

        </div>
      </div>
    </div>
  );
};

export default PopularCities;
