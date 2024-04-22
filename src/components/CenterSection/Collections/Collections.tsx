import CollectionCards from "./CollectionCards/CollectionCards";
import toptrending from "../../../assets/trendingthisweek.jpg"
import bestoflive from "../../../assets/catchthematch.jpg"
import newintown from "../../../assets/newintown.jpg"
import moreimg from '../../../assets/callingallbarhoppers.jpg'


const Collections = () => {
  return (
    <div className="m-auto w-[73%] mt-[2rem] mb-[2rem] md:mt-[3rem] md:mb-[3rem] flex justify-center flex-col ">
      <div className="title md:text-[2.5rem] font-[600] md:font-[450] text-[#1c1c1c]">
        {" "}
        Collections
      </div>
      <div className="flex flex-col md:flex-row w-[100%] md:justify-between ">
        <span className="font-[350] md:text-[1.2rem]">
          Explore curated lists of top restaurants, cafes, pubs, and bars in
          Hyderabad, based on trends
        </span>
        <span className=" md:text-[1rem] cursor-pointer text-[#ff7e8b]">
          All collections in Hyderabad{" "}
          <span className="text-[#ff7e8b]">{"->"}</span>
        </span>
      </div>
      <div className="cards md:w-[100%] mt-[2.5rem] mb-[2.5rem] flex flex-wrap justify-center md:justify-between">
        <CollectionCards imgSrc={toptrending} title="Top trending" places="17"/>
        <CollectionCards imgSrc={newintown} title="New In Town" places="30"/>
        <CollectionCards imgSrc={bestoflive} title="Best live match" places="12"/>
        <CollectionCards imgSrc={moreimg} title="Drinks" places="18"/>

      </div>
    </div>
  );
};

export default Collections;
