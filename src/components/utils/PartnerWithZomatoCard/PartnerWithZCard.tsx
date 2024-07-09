/* eslint-disable @typescript-eslint/no-unused-vars */
interface CardData {
    imgSrc: string;
    title: string;
    tagLine: string;

}

const PartnerWithZCard = ({ imgSrc, title, tagLine }: CardData) => {
    return (
        <div className="w-64 h-24 mx-4 rounded-md border border-gray-300 shadow bg-white">
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-3/10 h-full flex justify-center items-center"><img className="" src={imgSrc} alt="image" /></div>
            <div className="w-7/10 h-full ml-2 flex flex-col justify-center">
                <div className="text-xl font-medium text-blueish2 mb-1.5">{title}</div>
                <div className="text-lg text-p1-text">{tagLine}</div>
            </div>
        </div>
    </div>

    )
}

export default PartnerWithZCard
