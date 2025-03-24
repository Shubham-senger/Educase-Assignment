import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import InputField from "../../components/Inputfields/InputField";

const Signup = () => {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/profile");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute top-[40px] w-[375px] h-[812px] bg-[#F7F8F9]">
        <div className="w-[200px] h-[69px] ml-[20px]">
          <h1 className="text-[28px] font-medium leading-[36px] text-[#1D2226]">
            Create your PopX account
          </h1>
        </div>

        <div className="w-[335px] mt-[24px] ml-[20px]">
          <div className="flex flex-col">
            <div className="relative">
              <label className="absolute bg-[#F7F8F9] left-[10px] top-[-5px] text-[13px] text-[#6C25FF]">
                Full Name <span className="text-[#DD4A3D]">*</span>
              </label>
              <InputField
                type="text"
                placeholder="Enter full name"
                className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] p-2"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[23px]">
            <div className="relative">
              <label className="absolute bg-[#F7F8F9] left-[10px] top-[-5px] text-[13px] text-[#6C25FF]">
                Phone Number <span className="text-[#DD4A3D]">*</span>
              </label>
              <InputField
                type="text"
                placeholder="Enter phone number"
                className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] p-2"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[23px]">
            <div className="relative">
              <label className="absolute bg-[#F7F8F9] left-[10px] top-[-5px] text-[13px] text-[#6C25FF]">
                Email Address <span className="text-[#DD4A3D]">*</span>
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
              <label className="absolute bg-[#F7F8F9] left-[10px] top-[-5px] text-[13px] text-[#6C25FF]">
                Password <span className="text-[#DD4A3D]">*</span>
              </label>
              <InputField
                type="password"
                placeholder="Enter password"
                className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] p-2"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[23px]">
            <div className="relative">
              <label className="absolute bg-[#F7F8F9] left-[10px] top-[-5px] text-[13px] text-[#6C25FF]">
                Company Name <span className="text-[#DD4A3D]">*</span>
              </label>
              <InputField
                type="text"
                placeholder="Enter company name"
                className="w-full h-[40px] border border-[#CBCBCB] rounded-[6px] p-2"
              />
            </div>
          </div>
          <div className="mt-[23px] flex flex-col gap-2">
            <p className="text-[13px] ">
              Are you an Agency? <span className="text-[#DD4A3D]">*</span>
            </p>
            <div>
              <input type="radio" name="agency" id="yes" className="mr-1" />
              <label htmlFor="yes" className="text-[13px] text-[#1D2226]">
                Yes
              </label>
              <input type="radio" name="agency" id="no" className="ml-4 mr-1" />
              <label htmlFor="no" className="text-[13px] text-[#1D2226]">
                No
              </label>
            </div>
          </div>
          <Button
            text="Create Account"
            className="w-full cursor-pointer mt-[215px] h-[46px] bg-[#6C25FF] rounded-[6px] text-white text-[16px] font-medium"
            onClick={handleCreateAccount}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;