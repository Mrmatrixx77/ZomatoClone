import menuImg from "../../../assets/menunew.png"
import { Link } from 'react-router-dom';
import ZomatoLogo from "../../../assets/mobilenavlogo.avif"
import Lofgin from "../Navbar/LoginSignup/Lofgin";
import SignUp from "../Navbar/LoginSignup/SignUp";
import GetAppMobileNav from "../MobileNav/GetAppMobileNav";
import { useState } from "react";

const GetAppNav = () => {
    const [menuState, setMenuState] = useState<boolean>(true);

    function handleMenu() {
        setMenuState(!menuState);
    }
    return (
        <div className="w-[100%] h-[4.5rem] border-2 border-[rgb(206,206,206)] z-[5]">
            <div className="block md:hidden h-full m-auto text-white">
                {menuState === true ? (
                    <div className=" flex  justify-between items-center">
                        <img
                            src={menuImg}
                            alt="menu"
                            className="w-[20px] h-[20px] flex md:hidden m-5 cursor-pointer"
                            onClick={handleMenu}
                        />
                        <Link to='/' ><img src={ZomatoLogo} alt="logo" className="w-[9rem]" /></Link>
                    </div>
                ) : (
                    <GetAppMobileNav onClick={handleMenu} />
                )}
            </div>

            <div className="innercontainer w-[60%] h-[100%] m-auto flex  justify-end items-center" >
                <div className="relative right-[16rem]">
                    <Link to='/' ><img src={ZomatoLogo} alt="logo" className="w-[9rem] hidden md:block" /></Link>
                </div>
                <div className="rightside hidden md:flex flex-row  gap-[2rem]">
                    <div className="text-[rgb(130,130,130)] no-underline text-[1.3rem] cursor-pointer"><Lofgin /></div>
                    <div className="text-[rgb(130,130,130)] no-underline text-[1.3rem] cursor-pointer"><SignUp /></div>
                </div>

            </div>



        </div>
    )
}

export default GetAppNav;
