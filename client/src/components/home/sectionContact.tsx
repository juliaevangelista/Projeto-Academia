import React from "react";

export const SectionContact = () => {
  return (
    <div className="bg-[#68686A99] w-full h-auto py-16 px-4 sm:px-8 lg:h-[556px]">
      <div className="text-center max-w-2xl mx-auto text-white">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold">
          Take the First Step Towards a Healthier You
        </h1>
        <p className="text-sm sm:text-base">
          Join FitLife Studio Today and Transform Your Life with Expert
          Guidance, Personalized Programs, and a Supportive Community. Your
          Fitness Journey Starts Now!
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-8 gap-4">
          <input
            placeholder="Enter your email"
            className="p-3 rounded-lg w-full lg:w-[381px]"
          />
          <button className="text-white py-3 px-6 rounded-lg w-full lg:w-auto">
            Join Now
          </button>
        </div>
        <p className="text-[12px] mt-3">
          By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.
        </p>
      </div>
    </div>
  );
};
