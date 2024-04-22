import { useState } from "react";
import mobileImg from "../../assets/mobileimge.avif";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import appstoreImg from "../../assets/appstore.png"
import playstoreImg from "../../assets/playstore.png"

const Gettheapp = () => {
  const [inputType, setInputType] = useState<boolean>(true);
  return (
    <div className="container w-[100vw] bg-[#FFFBF7] flex justify-center items-center h-[100vh] md:h-[70vh] ">
      <div className="innerContainer w-[100%] md:w-[70%] flex justify-center  h-[80%]">
        <div className="leftSide hidden md:flex items-center ">
          <img
            src={mobileImg}
            alt="mobileimg"
            className="w-[16.5rem] h-[17.5rem] "
          />
        </div>
        <div className="rightSide flex flex-col gap-3">
          <div className="text-[2rem] md:text-[3rem] font-[450]">Get the Zomato App</div>
          <div className="mt-2 mb-2 font-[350] w-[90%] leading-7">
            We will send you a link, open it on your phone to download the app
          </div>
          <div className="radio mt-1 mb-1">
            <div className="radio flex mt-1 mb-1">
              <div
                className="mr-3 ml-3 flex items-center"
                onClick={() => setInputType(true)}
              >
                <input
                  className="w-5 h-5 accent-[#ef4f5f] cursor-pointer"
                  type="radio"
                  name="radio"
                  id="email"
                  defaultChecked={inputType}
                />
                <label className="cursor-pointer ml-1" htmlFor="email">
                  Email
                </label>
              </div>
              <div
                className="mr-3 ml-3 flex items-center"
                onClick={() => setInputType(false)}
              >
                <input
                  className="w-5 h-5 accent-[#ef4f5f] cursor-pointer"
                  type="radio"
                  name="radio"
                  id="phone"
                />
                <label className="cursor-pointer ml-1" htmlFor="phone">
                  Phone
                </label>
              </div>
            </div>
            <div className="inputs flex flex-col gap-3 md:flex-row justify-between mt-[2rem]  ">
              <div className="inputtypes">
                {inputType === true ? (
                  <Input
                    type="Email"
                    placeholder="Email"
                    className="pt-3 pb-3 pr-4 pl-4 border-2 w-[18rem] h-[3.5rem] border-red-500 rounded font-[350] text-[1rem]"
                  />
                ) : (
                  <Input
                    type="tel"
                    placeholder="Number"
                    className="pt-3 pb-3 pr-4 pl-4 border-2 w-[18rem] h-[3.5rem] border-red-500 rounded font-[350] text-[1rem]"
                  />
                )}
              </div>
              <Button
                variant="default"
                className="bg-red-500 pt-2 pb2 pl-4 pr-4 w-[18rem] md:w-[10rem] h-[3.5rem] text-white text-[1rem] font-[500] cursor-pointer hover:bg-red-600"
              >
                Share App Link
              </Button>
            </div>
            <div className="mt-[2rem] mb-[2rem]">
              <div className="mt-[1rem] mb-[1rem]">Download app from</div>
              <div className="flex flex-wrap">
                <img className="m-3 w-[10rem] cursor-pointer" src={appstoreImg} alt="appstore" />
                <img
                  className="m-3 w-[10rem] cursor-pointer"
                  src={playstoreImg}
                  alt="playstore"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gettheapp;
