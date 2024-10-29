export const SectionInspiring = () => {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center text-[#68686A] m-5">
        <div className="w-full md:w-[461px] h-auto justify-center items-center mb-6 md:mb-0 md:mr-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center md:text-left">
            Inspiring Success Stories from FitLife Studio Members
          </h1>
          <p className="text-base md:text-lg">
            At FitLife Studio, we celebrate the incredible journeys of our
            members. From weight loss triumphs and muscle gain milestones to
            enhanced well-being and newfound confidence, our members success
            stories highlight the power of commitment and community. Explore these
            inspiring testimonials and see how FitLife Studio can help you reach
            your fitness goals.
          </p>
        </div>
        <div className="w-full md:w-[615px] h-auto relative flex justify-center">
          <div className="bg-slate-400 w-full md:w-[487px] h-auto md:h-[532px] rounded-2xl relative"></div>
          <div className="bg-slate-300 w-[216px] h-[216px] rounded-2xl absolute bottom-16 left-0"></div>
          <div className="bg-slate-300 w-[244px] h-[166px] rounded-2xl absolute top-16 right-0"></div>
        </div>
      </div>
    );
  };
  