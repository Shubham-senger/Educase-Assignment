import React from 'react';


const ProfilePage = () => {
  return (
    <div className="relative w-[375px] h-screen mx-auto">
      {/* Header */}
      <div className="absolute top-0 left-0 w-[375px] h-[68px] bg-white shadow-[0_3px_6px_rgba(0,0,0,0.07)] z-10">
        <h1 className=" pt-5 text-lg font-medium">Account Settings</h1>
      </div>

      {/* Profile Container */}
      <div className="absolute top-[98px] left-[20px] w-[76px] h-[76px]">
        <img 
          src="/public/profile.png" 
          alt="Profile" 
          className="w-full h-full rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 rounded-full p-1">
        <img
          src='/public/camera.png'
          alt='camera'
          className='w-[21px] h-[23px]'
        />
        </div>
      </div>

      {/* Profile Details */}
      <div className="absolute top-[98px] left-[116px]">
        <h2 className="text-lg font-medium text-black">Marry Doe</h2>
        <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
      </div>

      {/* Account Settings Content */}
      <div className="absolute top-[202px] left-[20px] w-[335px] bg-gray-100 p-4 rounded-lg">
        <p className="text-xs text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing 
          Eltr. Sed Diam Nonumy Eirmod Tempor Invidunt Ut 
          Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
        
        
      </div>
    </div>
  );
};

export default ProfilePage;