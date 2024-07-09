import GetAppNav from "@/components/Header/GetAppNav/GetAppNav"
import GetAppCenter from "./GetAppCenter"
import Footer from "@/components/Footer/Footer"


const GetApp = () => {
  return (
    <div className="getappContainer w-[100%] h-[100%]">
      <div className="innerContainer w-[100%] h-[100%]">
        <GetAppNav/>
        <GetAppCenter/>
        <Footer/>
      </div>
    </div>
  )
}

export default GetApp