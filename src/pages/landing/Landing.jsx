import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div 
        className="w-[375px] h-[812px] bg-[#F7F8F9] absolute mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <h1 className="absolute top-[549px] left-[20px] w-[231px] h-[33px] text-left text-[28px] font-medium text-[#1D2226]">
          Welcome to PopX
        </h1>
        <p className="absolute top-[592px] left-[20px] w-[232px] h-[48px] text-left text-[18px] leading-[26px] text-[#1D2226] opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <motion.button
          className="absolute cursor-pointer top-[669px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF] rounded-[6px]"
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/signup")}
        >
          <span className="w-[120px] h-[19px] text-center text-[16px] font-medium text-white">
            Create Account
          </span>
        </motion.button>
        <motion.button
          className="absolute cursor-pointer top-[725px] left-[20px] w-[335px] h-[46px] bg-[#6C25FF4B]"
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/login")}
        >
          <span className="w-[202px] h-[19px] text-center text-[16px] font-medium text-[#1D2226]">
            Already Registered? Sign In
          </span>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;