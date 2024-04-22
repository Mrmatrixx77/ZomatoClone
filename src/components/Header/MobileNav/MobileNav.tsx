import close from '../../../assets/closeIcon.png';
import logo from '../../../assets/mobilenavlogo.avif'
import Lofgin from '../Navbar/LoginSignup/Lofgin';
import SignUp from '../Navbar/LoginSignup/SignUp';

interface menuProps{
    onClick :()=> void;
}

const MobileNav = ({onClick} : menuProps) => {
  return (
    <div className="mobilenavContainer h-screen bg-white w-screen absolute top-0 left-0  ">
        <div className="mobileheader m-auto flex justify-between items-center border-red-50  pt-10 pl-[90px] pr-16 ">
        <img src={close} alt="closeImg" className='h-7' onClick={onClick} />
        <img src={logo} alt="navlogo" className='w-40' />
        </div>
        <div className="links text-black mt-12 text-xl font-light flex flex-col gap-8 items-start m-auto pl-28 ">
        <div className="cursor-pointer">Investor Relations</div>
            <div className="cursor-pointer">Add Reatraunt</div>
            {/* <div className="cursor-pointer">Log In</div> */}
            <Lofgin/>
            {/* <div className="cursor-pointer">Sign Up</div> */}
            <SignUp/>
        </div>

    </div>
  )
}

export default MobileNav