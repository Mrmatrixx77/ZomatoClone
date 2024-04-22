import indianFlag from "../../assets/indiaflag.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import Instagram from "../../assets/instagram.png";
import Youtube from "../../assets/youtube.png";
import Appstore from "../../assets/appstore.png";
import Gstore from "../../assets/playstore.png";

const Footer = () => {
  return (
    <div className="container w-[100%] h-auto bg-[#F8F8F8] md:px-[2rem] md:py-[4rem]">
      <div className="innercontainer w-[100%] md:w-[70%] mx-auto flex flex-col gap-3 ">
        <div className="top w-[100%] mb-5 flex flex-col md:flex-row gap-4  justify-between">
          <div className="w-[9.3rem] h-[2rem] text-[2rem] font-[600]">
            Zomato
          </div>
          <div className="flex flex-wrap">
            <div className="mr-5 p-2 border-2 border-[rgb(181,181,181)] rounded flex justify-evenly items-center">
              {" "}
              <span>
                <img
                  className="w-5 h-5 mr-1"
                  src={indianFlag}
                  alt="india flag"
                />
              </span>
              <span>India</span>
              <span className="ml-1">&#709;</span>
            </div>
            <div className="mr-5 p-2 border-2 border-[rgb(181,181,181)] rounded flex justify-evenly items-center">
              <span>
                🌐<span></span> English
              </span>{" "}
              <span className="ml-1">&#709;</span>
            </div>
          </div>
        </div>
        <div className="middle w-[100%] flex flex-col md:flex-row justify-between">
          <div className="left  w-[100%] md:w-[50%] flex flex-row justify-around">
            <div className="about w-[20%] flex flex-wrap flex-col ">
              <div className="my-[10px] tracking-[2px]">ABOUT ZOMATO</div>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Who We Are
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Blog
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Work With Us
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Investor Relations
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Report Fraud
              </a>
            </div>
            <div className="zoma w-[20%] flex flex-wrap flex-col">
              <div className="my-[10px] tracking-[2px]">ZOMAVERSE</div>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Zomato
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Feeding India
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Hyperpure
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Zomaland
              </a>
            </div>
          </div>
          <div className="right  w-[100%] md:w-[50%] flex flex-row justify-around">
            <div className="learnmore w-[20%] flex flex-wrap flex-col">
              <div className="my-[10px] tracking-[2px]">LEARN MORE</div>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Privacy
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Security
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Terms
              </a>
              <a
                href=""
                className="my-[5px] outline-none text-[rgb(105,105,105)]"
              >
                Sitemap
              </a>
            </div>
            <div className="sociallinks w-[20%] flex flex-wrap flex-col">
              <div className="my-[10px] tracking-[2px]">SOCIAL LINKS</div>
              <div className=" m-1 cursor-pointer flex flex-row">
                <a href="" className="no-underline">
                  <img
                    className="w-5 h-5 m-1 cursor-pointer"
                    src={Facebook}
                    alt="linkedin"
                  />
                </a>
                <a href="" className="no-underline">
                  <img
                    className="w-5 h-5 m-1 cursor-pointer"
                    src={Linkedin}
                    alt="instagram"
                  />
                </a>
                <a href="" className="no-underline">
                  <img
                    className="w-5 h-5 m-1 cursor-pointer"
                    src={Instagram}
                    alt="facebook"
                  />
                </a>
                <a href="" className="no-underline">
                  <img
                    className="w-5 h-5 m-1 cursor-pointer"
                    src={Twitter}
                    alt="twitter"
                  />
                </a>
                <a href="" className="no-underline">
                  <img
                    className="w-5 h-5 m-1 cursor-pointer"
                    src={Youtube}
                    alt="youtube"
                  />
                </a>
              </div>
              <a
                href=""
                className="w-[9rem] h-[2.3rem] my-1 no-underline rounded"
              >
                <img
                  className="w-[100%] h-[100%] cursor-pointer rounded"
                  src={Gstore}
                  alt="google play store"
                />
              </a>
              <a
                href=""
                className="w-[9rem] h-[2.3rem] my-1 no-underline rounded"
              >
                <img
                  className="w-[100%] h-[100%] cursor-pointer rounded"
                  src={Appstore}
                  alt="apple app store"
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-5 border-2 border-[rgb(207,207,207)]" />
            <div className="text-[rgb(79,79,79)] text-justify text-[1rem]">
                By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Tomato™ Ltd. All rights reserved.
            </div>
      </div>
    </div>
  );
};

export default Footer;
