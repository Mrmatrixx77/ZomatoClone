import { useState } from "react";
import downArrow from "../../../assets/down-arrow.png"

interface AccordianData {
    title: string;
    content: Array<string>
}

const AccordianCard = ({ title, content }: AccordianData) => {
    const [open, setOpen] = useState<string>("w-[100%] flex flex-wrap justify-around items-center mt-[2rem] hidden")
    const [arrow, setArrow] = useState<string>("w-[1.2rem] h-[1.2rem] rotate-0")
    function toggleBar() {
        setArrow((arrow : string) : string => {
            if (arrow === "w-[1.2rem] h-[1.2rem] rotate-0") {
                return "w-[1.2rem] h-[1.2rem] rotate-180"
            } else {
                return "w-[1.2rem] h-[1.2rem] rotate-0"
            }
        })
        setOpen((open : string) : string  => {
            if (open === "w-[100%] flex flex-wrap justify-around items-center mt-[2rem]") {

                return "hidden"

            } else {
                return "w-[100%] flex flex-wrap justify-around items-center mt-[2rem]"

            }
           

        })
    }
    return (
        <div className="w-[100%] p-[1rem] my-[1rem] border-[1px] border-[rgb(206,206,206)] rounded " onClick={toggleBar}>
            <div className="w-[100%] flex justify-between items-center">
                <div className="text-[1rem] md:text-[1.3rem] font-[400] text-[rgb(28,28,28)]">{title}</div>
                <img src={downArrow} alt="down arrow" className={arrow} />
            </div>
            <div className={open}>
                {content?.map((item, index) => {
                    return <span key={index} className="inline-block capitalize mr-[10px] text-[#828282] text-[16px] cursor-pointer">{item} {" "} {"."} </span>
                })}
            </div>
        </div>
    )
}

export default AccordianCard  
