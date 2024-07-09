import { Button } from "@/components/ui/button"
import AddRestrauntBanner from "../../../assets/addRestrauntBanner.jpg"


const RegisterYourRestraunt = () => {
  return (
    <div className="container w-[100%] h-[55vh] flex justify-center items-center"
    style={{
      background:`url(${AddRestrauntBanner})`,
      backgroundSize:"cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      margin:"auto",
      padding:0,

    }}
    
    >
      {/* <img src={AddRestrauntBanner} alt="banner" className="w-[100vw] h-[100%] relative object-cover " /> */}
      <div className="textContainer text-white w-[70%] md:w-[50%] m-auto">
        <div className="title text-[1.5rem] md:text-[2.5rem] font-[600]">
          {"Partner with Zomato"} 
          <div className="">{"at 0% commission for the 1st month!"}</div>
        </div>
        <div className=" mt-2  md:mt-4">And get ads worth INR 1500. Valid for new restaurant partners in select cities</div>
      <div className="btns w-[100%] flex flex-col gap-2  md:flex-row justify-between mt-2  md:mt-4">
        <Button className="w-[100%] md:w-[47%] py-[20px] px-[20px] cursor-pointer text-[1rem] font-[450] bg-[#2781e7] hover:bg-[#2757e7]">Register Your Restaraunt</Button>
        <Button className="w-[100%] md:w-[47%] py-[20px] px-[20px] cursor-pointer text-[1rem] text-[black] font-[450] bg-[white] hover:bg-slate-300">Login to view Your existing Restraunt</Button>
      </div>
      <div className=" text-[12px] md:text-[16px]">Need help? Contact <span className="cursor-pointer">+91 97-38-38-38-38</span></div>
      </div>

    </div>
  )
}

export default RegisterYourRestraunt