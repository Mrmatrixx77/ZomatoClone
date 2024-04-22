import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface Carditems {
  imgSrc: string;
  heading: string;
  content: string;
  link: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CreateCard = ({ imgSrc, heading, content, link }: Carditems) => {
  return (
    <Link to={link}>
      <Card className="w-[22rem] h-[15rem] cursor-pointer m-[5px] transition-all no-underline hover:scale-[1.03] justify-center items-center">
        <div className="imgcontainer w-[100%] h-[60%] rounded-t-xl "
        style={{
            background:`url(${imgSrc})`,
            objectFit:"cover",
            backgroundPosition:"center"
          }}
        ></div>
        <CardTitle className=" pl-5 pb-2 pt-2">{heading}</CardTitle>
        <CardContent>{content}</CardContent>
      </Card>
    </Link>
  );
};

export default CreateCard;
