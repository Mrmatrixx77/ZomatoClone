import ZomatoLogo from '../../../assets/ZomatoLogo.avif'
import SearchBar from './../../utils/SearchBar/SearchBar';


const Headercenter = () => {
  return (
     <div className="headerCenter flex flex-col justify-center items-center mt-8">
        <img src={ZomatoLogo} alt="logo" className="w-80  md:w-96" />
        <div className="discover text-3xl md:text-[2rem] mt-8 md:w-[41rem] text-center">
          {" "}
          Discover the best food & drinks in{" "}
          <span className=" font-bold"> Delhi NCR</span>
        </div>
        <SearchBar/>
        
      </div> 
  )
}

export default Headercenter