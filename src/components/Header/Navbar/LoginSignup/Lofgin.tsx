import {
  Drawer,
  DrawerClose,
  DrawerTrigger,
  DrawerContent,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import google from "../../../../assets/google.png";
import SignUp from "./SignUp";
import email from "../../../../assets/emailIcon.jpg";
import { useState } from "react";

const Lofgin = () => {
    const [open , setOpen] = useState<boolean>(false);
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="cursor-pointer">Login</div>
      </DrawerTrigger>

      <DrawerContent>
        <div className="signupContainer h-[70vh]  flex flex-col items-center mx-auto w-[100%] md:w-[40vw] gap-3">
          <div className="header flex flex-row justify-between items-center w-[100%] md:p-6">
            <div className=" text-xl md:text-3xl font-bold text-red-500">Login</div>
            <DrawerClose>
              <Button
                variant="ghost"
                className="font-extrabold text-xl text-red-500 hover:bg-red-500 hover:text-white"
              >
                X
              </Button>
            </DrawerClose>
          </div>
          <div className="inputs w-[80%] gap-[1.3rem] flex flex-col mt-3 border-2 border-red-500 rounded">
            <div className="w-[100%] flex flex-row justify-center items-center">
              <div className="text-[1.3rem] cursor-pointer text-red-500">
                + 91 {">"}{" "}
                <span className="text-red-500 text-[1.5rem]"> | </span>{" "}
              </div>

              <Input
                type="tel"
                placeholder="Number"
                className=" w-[70%] h-[3.5rem]"
              />
            </div>
          </div>

          <Button
            className="w-[80%]  text-[1.2rem] bg-red-500 mt-6 hover:bg-red-600"
            variant="default"
          >
            Send One Time Password
          </Button>
          <div className="or text-red-500 text-[1rem] mt-3">
            ------------------OR------------------
          </div>
          <Button className="googlelogin bg-white w-[80%] border-2 border-red-500 text-red-500 flex gap-5 hover:bg-white mt-3">
            <img src={google} alt="google" className="w-[1.3rem]  " />
            <div className="text-[1.2rem]">Sign In with Google</div>
          </Button>
          <Button className="googlelogin bg-white w-[80%] border-2 border-red-500 text-red-500 flex gap-5 hover:bg-white mt-3">
            <img src={email} alt="google" className="w-[2rem]  " />
            <div className="text-[1.2rem]">Sign In with Mail</div>
          </Button>
          <div className="already w-[80%] text-[1.3rem] justify-center items-center flex gap-3 mt-3">
            Create new Account{" "}
            <span className="text-red-500 font-semibold cursor-pointer">
                <SignUp />
            </span>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Lofgin;
