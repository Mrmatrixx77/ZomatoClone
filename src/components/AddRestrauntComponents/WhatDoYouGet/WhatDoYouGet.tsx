import phnimg from "../../../assets/phnimg.avif";
import laptopimg1 from "../../../assets/laptopimg1.avif"
import laptopimg2 from "../../../assets/laptopimg2.avif"
import { useState } from "react";



const ImgArray : Array<string> = [phnimg,laptopimg1,laptopimg2];


const WhatDoYouGet = () => {
    const [image,setImage] = useState<number>(0);


    function Imgselection(key : number){
        setImage(key);

    }
    return (
        <div className="largescreenContainer w-full h-[100vh] md:flex flex-col hidden justify-center items-center">
            <div className="title w-[60%]  text-[2.5rem] font-[450] text-black">What do you get on sign-up</div>
            <div className="subtitle w-[60%]  text-[1.3rem] mt-4 text-[rgb(156,156,156)]"> Zomato Partner Platform helps you take your business to new heights instantly with no hassle and 100% transparency!</div>
            <div className="hoverContainer w-[60%] h-[100%] border-2 mt-5">
                <div className="textArea w-[40%] h-full flex flex-col justify-around">
                    <TextCard title="Restaurant Partner app" subtitle="Manage all your orders on your smartphone with our Android app" key={0} onMouseEnter={()=>{Imgselection}}/>
                    <TextCard title="Restaurant Partner web dashboard" subtitle="Manage all your orders on your desktop or laptop" key={1} onMouseEnter={Imgselection}/>
                    <TextCard title="API integration" subtitle="Manage all your orders on your existing Point of Sale (POS) or third party software" key={2} onMouseEnter={Imgselection}/>
                </div>
                <div className="imgArea w-[40%] h-full justify-center items-center">
                    <img src={ImgArray[image]} alt="" />
                </div>
            </div>
        </div>
    )
}

interface TextData {
    title: string;
    subtitle: string;
    key:number;
    onMouseEnter: ()=>void;
}

const TextCard = ({ title, subtitle,key }: TextData) => {
    return (
        <div className="container w-full h-[25%] flex flex-col cursor-pointer hover:text-blue-500"  key={key}>
            <div className="text-[1.5rem] font-[500]">{title}</div>
            <div className="text-[1rem]">{subtitle}</div>
        </div>
    )
}

export default WhatDoYouGet