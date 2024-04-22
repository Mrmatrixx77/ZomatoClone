/* eslint-disable @typescript-eslint/no-unused-vars */
import { Input } from "@/components/ui/input";
import LocationIcon from "../../../assets/locationIcon.png";
import Downarrow from "../../../assets/down-arrow.png";
import Searchicon from "../../../assets/search.png"
import { useState } from "react";
import upArrow from "../../../assets/upArrow.svg"
import LocationDropDown from "./LocationDropdown/LocationDropDown";

const SearchBar = () => {
  const [DropdownState,setDropdownState] = useState<boolean>(false);

  function changedropdownState(){
    setDropdownState(!DropdownState);
    console.log(DropdownState)
  }


  return (
    <div className="inputContainer flex m-auto bg-white h-12 justify-center items-center rounded-xl md:w-[41rem] mt-8 p-1">
      <div className="search1 flex justify-center items-center w-[30%]">
        <div>
          <img src={LocationIcon} alt="pin" className="w-[25px] h-[20px]"/>
        </div>
        <Input className="LocationInp" placeholder="Place..." />
        <div className="dropDown cursor-pointer" onClick={changedropdownState}>
          {/* <img src={Downarrow} alt="dropdown" className="w-[25px] h-[20px] cursor-pointer" /> */}
          {
            DropdownState === false ? <img src={Downarrow} alt="dropdown" className="w-[25px] h-[20px]" /> :
            <img src={upArrow} alt="upArrow" className="w-[20px] h-[20px]" />
          }

        </div>
      </div>
      <div className="centreline mt-0 mr-1 font-semibold text-[#CFCFCF] text-2xl"> | </div>
      <div className="search2 flex justify-center items-center w-[70%]">
        <div className="searchIcon"><img src={Searchicon} alt="" /></div>
        <Input className="SeachInp" placeholder="Search for restaurant, cuisine or a dish"/>
      </div>
      {
        DropdownState && <LocationDropDown/>
      }
    </div>
  );
};

export default SearchBar;
