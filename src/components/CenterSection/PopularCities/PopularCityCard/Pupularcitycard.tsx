interface PopularCardsinter{
    place : string;
    Count : string;
}


const Pupularcitycard = ({place,Count}:PopularCardsinter) => {
  return (
    <div className=" w-[300px] pt-2 pb-2 pr-5 pl-5 border-2 border-[#cfcfcf] cursor-pointer flex m-1 no-underline text-black rounded shadow-[rgba(149, 157, 165, 0.2) 0px 8px 24px]">
     <div className="w-[90%] flex flex-col items-center">
            <div className="text-[1.3rem] font-[450]">{place}</div>
            <div className="font-[350]">{Count} Places</div>
        </div>
        <div className="flex w-[10%] justify-center items-center text-[2rem]">
           {">"}
        </div>
    </div>
  )
}

export default Pupularcitycard

