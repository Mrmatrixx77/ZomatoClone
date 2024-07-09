import globeIcon from "../../../assets/globe.png"
import calenderIcon from "../../../assets/calenderIcon.png"
import restaurantIcon from "../../../assets/restaurantIcon.png"

import Card from "../../utils/PartnerWithZomatoCard/PartnerWithZCard.tsx"



const PartnerwithZomato = () => {
  return (
    <div className="w-[100%] h-auto  md:h-[60vh] flex flex-col justify-center items-center">
        <div className="w-[100%] md:w-[60%] h-[100%] m-[2rem] flex flex-col justify-center  items-center">
            <div className="font-[600] text-[1.5rem] md:text-[2.5rem] text-center text-[rgb(28,28,28)]">Why should you partner with Zomato?</div>
            <div className="md:text-[1.3rem] my-[1.5rem] px-3 mt-1 text-center text-[rgb(156,156,156)]">Zomato enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business.</div>
            <div className="flex flex-col gap-6 md:flex-row justify-center items-center mt-12">
                <Card imgSrc={globeIcon} title="1000+ cities" tagLine="in India" />
                <Card imgSrc={calenderIcon} title="3 lakhs+" tagLine="restaurant listings" />
                <Card imgSrc={restaurantIcon} title="5 crore+" tagLine="monthly orders" />
            </div>
        </div>
    </div>
  )
}

export default PartnerwithZomato