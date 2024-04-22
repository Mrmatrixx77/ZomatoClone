/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Drawer,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import google from '../../../../assets/google.png'
import Lofgin from "./Lofgin";


const SignUp = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="cursor-pointer">SignUp</div>
      </DrawerTrigger>

      <DrawerContent>
        <div className="signupContainer h-[70vh]  flex flex-col items-center mx-auto w-[100%] md:w-[40vw]">
          <div className="header flex flex-row justify-between items-center w-[100%] md:p-6">
            <div className=" text-2xl md:text-3xl font-bold text-red-500">Signup</div>
            <DrawerClose>
              <Button
                variant="ghost"
                className="font-extrabold text-xl text-red-500 hover:bg-red-500 hover:text-white"
              >
                X
              </Button>
            </DrawerClose>
          </div>
          <div className="inputs w-[80%] gap-[1.3rem] flex flex-col mt-3">
            <Input
              type="Fullname"
              placeholder="Full Name"
              className="border-2 border-red-500  w-[100%] h-[3.5rem]"
            />
            <Input
              type="Email"
              placeholder="Email"
              className="border-2 border-red-500 w-[100%] h-[3.5rem]"
            />
          </div>
          <div className="terms flex flex-row gap-[1rem] w-[80%] mt-3 md:mt-5 items-start">
            <Checkbox />
            <span className="flex flex-wrap mt-0 pt-0">
              I agree to Zomato's{" "}
              <a href="" className="text-red-500 cursor-pointer">
                Terms of Service, Privacy Policy
              </a>{" "}
              and{" "}
              <a href="" className="text-red-500 cursor-pointer">
                Content Policies
              </a>
            </span>
          </div>
          <Button
            className="w-[80%] text-[1.2rem] bg-red-500 mt-3 hover:bg-red-600"
            variant="default"
          >
            Create Account
          </Button>
          <div className="or text-red-500 text-[1rem] mt-3">
            ------------------OR------------------
          </div>
          <Button className="googlelogin bg-white w-[80%] border-2 border-red-500 text-red-500 flex gap-5 hover:bg-white mt-3">
            <img src={google} alt="google" className="w-[1.3rem]  " />
            <div className="text-[1.2rem]">Sign In with Google</div>

          </Button>
          <div className="already w-[80%] text-[1rem] md:text-[1.3rem] justify-center items-center flex gap-3 mt-3">Already Have An Account? <span className="text-red-500 font-semibold cursor-pointer">
            {/* <DrawerClose> */}

            <Lofgin/>
            {/* </DrawerClose> */}
            </span></div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default SignUp;
