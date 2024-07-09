import close from '../../../assets/closeIcon.png';
import logo from "../../../assets/mobilenavlogo.avif"
import Lofgin from '../Navbar/LoginSignup/Lofgin';
import SignUp from '../Navbar/LoginSignup/SignUp';

interface menuProps{
    onClick :()=> void;
}

const GetAppMobileNav = ({onClick} : menuProps) => {
  return (
    <div className="mobilenavContainer h-screen bg-white w-screen absolute top-0 left-0 px-5  ">
        <div className="mobileheader  w-[100%] flex justify-between items-center h-[4.5rem] ">
        <img src={close} alt="closeImg" className='h-7' onClick={onClick} />
        <img src={logo} alt="navlogo" className='w-40' />
        </div>
        <div className="links text-black mt-12 text-xl font-light flex flex-col gap-8 justify-start m-auto ml-12">
            <Lofgin/>
            <SignUp/>
        </div>

    </div>
  )
}

export default GetAppMobileNav 

