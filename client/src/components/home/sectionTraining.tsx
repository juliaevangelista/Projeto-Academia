"use client";
import { useState } from "react";

export const SectionTraining = () => {
  const content = [
    {
      image: "",
      title: "Personal Training",
      text: "Get customized workouts and one-on-one coaching from our expert trainers to achieve your specific fitness goals.",
    },
    {
      image: "",
      title: "Group Fitness Classes",
      text: "Join our dynamic and motivating group classes, ranging from yoga to high-intensity interval training, designed for all fitness levels.",
    },
    {
      image: "",
      title: "Nutritional Guidance",
      text: "Nutrition plans and advice from our certified nutritionists to complement your fitness routine and enhance your results.",
    },
    {
      image: "",
      title: "Wellness Programs",
      text: "Wellness programs that include stress management, mental well-being, and recovery techniques to support your overall health.",
    },
    {
      image: "",
      title: "Cardio Workouts",
      text: "Boost your endurance and cardiovascular health with our variety of cardio classes and equipment, tailored to all fitness levels.",
    },
    {
      image: "",
      title: "Strength Training",
      text: "Build muscle and increase strength with our structured strength training programs and state-of-the-art weightlifting equipment.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center mb-4 bg-slate-100 text-[#68686A] font-sans">
      <h1 className="text-center my-5 text-5xl font-bold">Nossos Treinos</h1>
      <h2 className="text-center mb-16 text-sm font-medium">
        Tailored Workouts, Expert Guidance, and Comprehensive Programs to Meet
        All Your Fitness Needs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-items-center mb-11">
        {content.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-[364px] h-[502px] flex flex-col shadow-lg rounded-lg p-4 bg-white cursor-pointer transition-all duration-100 ${
              activeIndex === index ? "border-2 border-black" : ""
            }`}
          >
            <div className="w-[332px] h-[250px] bg-[#68686A] rounded-lg mb-4 flex items-center justify-center">
              {item.image}
            </div>
            <h5 className="text-xl mb-2 font-medium text-center">
              {item.title}
            </h5>
            <p className="text-base text-center">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
