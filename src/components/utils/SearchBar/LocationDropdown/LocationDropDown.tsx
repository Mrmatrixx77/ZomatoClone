
import { Card,CardHeader} from "@/components/ui/card"
import locationSvg from "../../../../assets/Gpslocation.svg"
const LocationDropDown = () => {
  return (
    // <div className="dropdown text-red-500 absolute mt-[5rem] mr-[24rem] w-[10rem] bg-white border">LocationDropDown</div>
    <Card className="absolute mt-[9rem] md:mt-[9rem] md:mr-[17rem] md:w-96 flex flex-col cursor-pointer">
        <CardHeader className="header flex flex-row gap-3 pb-0 pt-0">
            <img src={locationSvg} alt="location" className="w-[1.5rem]"/>
            <div className="gpstext text-pink-500">Detect Current Location</div>
        </CardHeader>
        <div className="text-slate-500 font-light ml-[3.8rem] pb-5">Using gps</div>
    </Card>
  )
}

export default LocationDropDown