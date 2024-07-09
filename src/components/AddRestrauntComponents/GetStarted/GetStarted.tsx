import GreenTick from "../../../assets/GreenTick.png"

const GetStarted = () => {
  return (
    <div className="outerContainer h-[45vh] bg-[#e8e8e8] w-full flex justify-center items-center">
        <div className="innerContainer mb-[4rem] h-auto md:h-[95%] w-[90%] md:w-[60%] bg-white md:mb-[3rem] rounded-xl flex flex-col" >
            <div className="titlecont h-auto w-full mx-auto text-center mt-4">
                <div className="title text-[1.5rem] md:text-[2rem]">Get started with online ordering</div>
                <div className="subtitle md:text-[1rem] text-[rgb(156,156,156)]">Please keep the documents ready for a smooth signup</div>
            </div>
            <div className="bottomContainer flex-wrap md:flex-nowrap flex flex-row w-full justify-around items-center mt-5 pb-8">
              <div className="left">
                <Document imgSrc={GreenTick} title="FSSAI license copy (apply now)"/>
                <Document imgSrc={GreenTick} title="Regular GSTIN (apply now)"/>
                <Document imgSrc={GreenTick} title="Your restaurant menu"/>
              </div>
              <div className="right">
              <Document imgSrc={GreenTick} title="PAN card copy"/>
              <Document imgSrc={GreenTick} title="Bank account details"/>
              <Document imgSrc={GreenTick} title="Dish images for top 5 items"/>

              </div>

            </div>
        </div>
    </div>
  )
}
interface Documentdata {
  imgSrc:string;
  title:string;
}

const Document = ({imgSrc,title} : Documentdata) =>{
  return (
    <div className="flex flex-row text-[1rem] md:mt-6 w-[18rem] gap-3">
      <img src={imgSrc} alt="img" className="w-[25px]"/>
      <div className="title">{title}</div>
    </div>
  )
}





export default GetStarted