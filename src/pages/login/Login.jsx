import React from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/Inputfields/InputField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-[40px] w-[375px] h-[812px] bg-[#F7F8F9]">
        <div className="w-[200px] ml-[20px] h-[69px]">
          <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226]">
            Sign in to your PopX account
          </h1>
        </div>
        <div className="w-[232px] ml-[20px] h-[48px] mt-[14px]">
          <p className="text-[18px] leading-[26px] text-[#1D2226] opacity-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-[335px] ml-[20px] mt-[24px]">
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute bg-[#F7F8F9] left-[10px] top-[-5px]  text-[13px] text-[#6C25FF] ">
                Email Address
              </label>
              <InputField
                type="email"
                placeholder="Enter email address"
                className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] p-2"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[23px]">
            <div className="relative">
              <label className="text-[13px] absolute bg-[#F7F8F9] left-[10px] top-[-5px]  text-[#6C25FF] mb-1">
                Password
              </label>
              <InputField
                type="password"
                placeholder="Enter password"
                className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] p-2"
              />
            </div>
          </div>
          <Button
            text="Login"
            className="w-full cursor-pointer h-[46px] bg-[#CBCBCB] rounded-[6px] mt-4 text-white text-[16px] font-medium"
            onClick={handleCreateAccount}
            disabled
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
