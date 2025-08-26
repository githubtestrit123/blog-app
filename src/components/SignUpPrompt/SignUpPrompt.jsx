"use client";

import SignUpModal from "../Modals/SignUpModal";
import LogInModal from "../Modals/LogInModal"



export default function SignUpPrompt() {
  return (
    <div className="w-full bg-yellow-500 text-white py-3 px-6 flex items-center justify-between">
      {/* Text */}
      <p className="font-semibold">
        Don’t miss out on the buzz{" "}
        <span className="font-normal">
          People on Busy Bee are always the first to know.
        </span>
      </p>

      {/* Buttons */}
      <div className="flex space-x-3">
        <LogInModal />
        <SignUpModal />
      </div>
    </div>
  );
}
