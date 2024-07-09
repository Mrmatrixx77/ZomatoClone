import FAQs from "@/components/AddRestrauntComponents/FAQs/FAQs"
import GetStarted from "@/components/AddRestrauntComponents/GetStarted/GetStarted"
import HowItWorks from "@/components/AddRestrauntComponents/HowItWorks/HowItWorks"
import PartnerwithZomato from "@/components/AddRestrauntComponents/PartnerWithZomato/PartnerwithZomato"
import RegisterYourRestraunt from "@/components/AddRestrauntComponents/RegisterYourRestraunt/RegisterYourRestraunt"
import SearchListedRestraunts from "@/components/AddRestrauntComponents/SearchListedRestraunts/SearchListedRestraunts"
import StartYourJourney from "@/components/AddRestrauntComponents/StartYourJourney/StartYourJourney"
// import WhatDoYouGet from "@/components/AddRestrauntComponents/WhatDoYouGet/WhatDoYouGet"
import Footer from "@/components/Footer/Footer"

const AddRestraunt = () => {
  return (
    <>
    
        <RegisterYourRestraunt/>
        <GetStarted/>
        <PartnerwithZomato/>
        <HowItWorks/>
        <SearchListedRestraunts/>
        {/* <WhatDoYouGet/> */}
        <FAQs/>
        <StartYourJourney/>
        <Footer/>
    </>
    
  )
}

export default AddRestraunt