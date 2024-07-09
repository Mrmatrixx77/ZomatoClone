import AccordianCard from "@/components/utils/AccordianCard/AccordianCard"

const FAQs = () => {
  return (
    <div className="outercontainer w-[100%] my-[2rem] h-auto flex justify-center items-center">
        <div className="innerContainer w-[60%] h-[100%] flex flex-col items-center">
            <div className="title my-4 font-[500] text-[2rem] text-[rgb(28,28,28)]">Frequently Asked Questions</div>
            <div className="cards flex flex-wrap justify-center items-center">
                <AccordianCard title="What will Zomato charge me for creating a page on its platform?" content={["Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges."]}/>
                <AccordianCard title="What all documents are required for registering on online ordering?" content={["Registration for online ordering requiresa: FSSAI certificate (application no. if FSSAI is not present)b: PAN Cardc: GST certificate (if applicable)"]}/>
                <AccordianCard title="I have a large fleet of delivery boys, why should I use Zomato’s delivery service?" content={["You can use your and Zomato's delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction."]}/>
                <AccordianCard title="What happens if the average order value of Zomato orders is very low" content={["Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food."]}/>


            </div>
        </div>
    </div>
  )
}

export default FAQs

