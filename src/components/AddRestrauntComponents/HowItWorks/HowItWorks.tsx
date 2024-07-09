import bgImg from "../../../assets/howitworksbg.jpg"
import bookIcon from "../../../assets/book.png";
import bikeIcon from "../../../assets/bike.png";
import packageIcon from "../../../assets/package.png"

const HowItWorks = () => {
    return (
        <div className="container w-[100%] h-auto md:h-[35rem] flex justify-center flex-col items-center mb-[10rem]">
            <div className="upperdiv w-[100%] h-[60%] m-0 p-0"
                style={{
                    background: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "bottom",
                    backgroundRepeat: "no-repeat",
                    padding: 0,
                }}

            ></div>
            <div className="lowerdiv w-[100%] h-auto  md:h-[40%] md:absolute flex flex-wrap justify-center">
            <div className=" text-[1.5rem] md:text-[2.5rem] font-semibold my-6">How it works?</div>
            <div className="w-full h-full flex flex-wrap justify-center items-center">
                    <Card step='1' title='Create your page on Zomato' tag='Help users discover your place by creating a listing on Zomato' img={bookIcon} color='#FFFCF1' />
                    <Card step='2' title='Register for online ordering' tag='And deliver orders to millions of customers with ease' img={bikeIcon} color='#FFF5F6' />
                    <Card step='3' title='Start receiving orders online' tag='Manage orders on our partner app, web dashboard or API partners' img={packageIcon} color='#FFF9F1' />
                </div>

            </div>
        </div>

    )
}

interface CardData {
    step :string;
    title : string;
    tag:string;
    img:string;
    color:string;

}

const Card = ({step,title,tag,img,color} : CardData) => {
return (
    <div className="outerDiv w-full  md:w-[16rem] h-[22rem] m-4 p-4 border  rounded-lg bg-white shadow-lg">
        <div className="innerDiv w-full h-full flex flex-wrap justify-center items-center p-2">
            <div className="imgBox w-36 h-36 rounded-full flex justify-center items-center"style={{ "backgroundColor": color }}>
                <img className="w-12 h-12" src={img} alt="image" />
            </div>
            <div className="text-center ">
                <div className="step text-lg font-semibold">Step {step}</div>
                <div className="text-base my-2">{title}</div>
                <div className="text-sm">{tag}</div>
            </div>
        </div>
    </div>
)

}





export default HowItWorks