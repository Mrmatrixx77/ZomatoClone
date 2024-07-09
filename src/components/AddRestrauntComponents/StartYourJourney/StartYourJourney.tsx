import { Button } from "@/components/ui/button"
import BannerImg from "../../../assets/StartYJ.jpg"


const StartYourJourney = () => {
  return (
    <div className=" outercontainer flex justify-center items-center h-96">
        <div className=" innercontainer w-full h-auto   text-center md:text-left items-center md:items-start  md:w-[60%] md:h-[60%] flex flex-col m-auto rounded-lg text-white "
        style={{
            background:`url(${BannerImg})`,
            backgroundSize:"cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            padding:0,
      
          }}
        >
    
                <div className="text-[2rem] pl-8 mt-3">Start your journey with Zomato</div>
                <div className="my-4 pl-8">Create your restaurant page and register for online ordering</div>
                <Button className="ml-8 w-[200px] h-[60px] cursor-pointer text-[1.3rem] font-[450] bg-[#2781e7] hover:bg-[#2757e7] my-4">Start Now {">"}</Button>

           
        </div>
    </div>
  )
}

export default StartYourJourney