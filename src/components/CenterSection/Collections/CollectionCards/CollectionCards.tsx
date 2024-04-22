interface CollectionCardinter {
  imgSrc: string;
  title: string;
  places: string;
}

const CollectionCards = ({ imgSrc, title, places }: CollectionCardinter) => {
  return (
    <div className="w-[16rem] h-[20rem] relative m-1 rounded cursor-pointer hover:scale-[1.03]">
      <img
        className="absolute w-[100%] h-[100%] rounded object-cover brightness-[.7] hover:brightness-[.9]"
        src={imgSrc}
        alt="collection card"
      />
      <div className="absolute left-[10px] bottom-[10px] text-white">
        <div className="text-[1.2rem]">{title}</div>
        <div className="text-[1rem]">
          {" "}
          <span className=""> {places} </span>
          <span className="">Places</span> <span className="">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default CollectionCards;
