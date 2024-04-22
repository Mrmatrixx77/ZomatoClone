import CreateCard from "./CreateCard"
import orderonlineimg from "../../../assets/orderonline.jpg"
import dineOut from "../../../assets/diningout.jpg"
import Nightlife from "../../../assets/nightlifeandclubs.jpg"

const Cardsection = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 gap-4 justify-center items-center">
        <CreateCard imgSrc={orderonlineimg} heading="Order Online" content="Stay home and order to your doorstep" link={"/orderonline"}/>
        <CreateCard imgSrc={dineOut} heading="Dining" content="View the city's favourite dining venues" link={"/dining"}/>
        <CreateCard imgSrc={Nightlife} heading="Nightlife and Clubs" content="Explore the city’s top nightlife outlets" link={"/nightlife"}/>        

    </div>
  )
}

export default Cardsection