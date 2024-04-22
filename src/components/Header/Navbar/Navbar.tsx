// import smartphone from "../../../assets/smartphone.png";
import menu from "../../../assets/menu.png";
import { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";
import Headercenter from "../HeaderCenter/Headercenter";
import Emoji from "../../../assets/emoji.svg"
import { Link } from "react-router-dom";
import SignUp from "./LoginSignup/SignUp";
import Lofgin from "./LoginSignup/Lofgin";


const Navbar = () => {
  const [menuState, setMenuState] = useState<boolean>(true);

  function handleMenu() {
    setMenuState(!menuState);
  }

  return (
    <div className="Navbar w-screen top-0">
      <div className="NavContainer hidden h-full w-4/5 m-auto md:flex flex-wrap justify-between items-center p-3">
        <div className="left font-normal h-14 flex items-center gap-2 cursor-pointer">
          <img src={Emoji} alt="smartophone" className="h-6" />
          {/* <div className="getapp">Get the App</div> */}
          <Link to="/getapp">Get the App</Link>
        </div>
        <div className="right flex items-center justify-between text-xl font-light gap-10 ">
          <div className="cursor-pointer">Investor Relations</div>
          <div className="cursor-pointer">Add Reatraunt</div>
          {/* <div className="cursor-pointer">Log In</div> */}
          {/* <div className="cursor-pointer"><SignUp/></div> */}
          <Lofgin/>
          <SignUp/>
        </div>
      </div>
      {/*        MOBILE NAVBAR         */}
      <div className="block md:hidden h-full w-4/5 m-auto py-10 text-white">
        {menuState === true ? (
          <img
            src={menu}
            alt="menu"
            className="menu h-7"
            onClick={handleMenu}
          />
        ) : (
          <MobileNav onClick={handleMenu} />
        )}
      </div>
      <Headercenter/>
      
    </div>
  );
};

export default Navbar;
