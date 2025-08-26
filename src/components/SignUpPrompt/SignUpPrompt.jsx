"use client";

import SignUpModal from "../Modals/SignUpModal";
import LogInModal from "../Modals/LogInModal"
import { useSelector } from "react-redux";



export default function SignUpPrompt() {
  const name = useSelector((state => state.user.name))
  
  return (
    !name &&
    <div className="w-full bg-yellow-500 text-white py-3 px-6 flex items-center justify-between">
      
      <p className="font-semibold">
        Don’t miss out on the buzz{" "}
        <span className="font-normal">
          People on Busy Bee are always the first to know.
        </span>
      </p>

      
      <div className="flex space-x-3">
        <LogInModal />
        <SignUpModal />
      </div>
    </div>
  );
}
