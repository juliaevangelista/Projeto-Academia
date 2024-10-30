export const SectionPrice = () => {
  return (
    <div className="w-full h-full text-[#68686A]">
      <div className="text-center w-[790px] items-center mx-auto">
        <h1 className="text-5xl font-bold">
          Choose the Perfect Plan for Your Fitness Journey
        </h1>
        <p className="mt-6">
          Flexible Membership Options to Suit Your Goals and Lifestyle. Find the
          Right Fit and Start Transforming Your Life Today!
        </p>
        <div className="flex flex-row items-center justify-center my-12">
          <button className="border-2 border-[#68686A] p-3 mr-6 rounded-lg">
            Monthly
          </button>
          <button className="border-2 border-[#68686A] p-3 rounded-lg">
            Yearly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mb-11">
        <div
          className={
            " flex flex-col border-2 border-[#68686A] rounded-2xl pb-40 px-8 pt-8"
          }
        >
          <h5 className="text-xl font-medium text-center mb-2">Basic plan</h5>
          <h4 className="mb-8 text-6xl text-center">$19/mo</h4>
          <p className="gap-4 pl-10">Unlimited Access to Gym Equipment</p>
          <p className="gap-4 pl-10">Access to Group Fitness Classes</p>
          <p className="gap-4 pl-10">Personalized Workout Plan</p>
          <p className="gap-4 pl-10">Locker Room Access</p>
        </div>
        <div
          className={
            " flex flex-col border-2 border-[#68686A] rounded-2xl pb-40 px-8 pt-8"
          }
        >
          <h5 className="text-xl font-medium text-center mb-2">Elite plan</h5>
          <h4 className="mb-8 text-6xl text-center">$40/mo</h4>
          <p className="gap-4 pl-10">All Premium Plan Benefits</p>
          <p className="gap-4 pl-10">Weekly Personal Training Sessions</p>
          <p className="gap-4 pl-10">Customized Advanced Workout Plans</p>
          <p className="gap-4 pl-10">Monthly Wellness Seminars</p>
          <p className="gap-4 pl-10">VIP Access to New Classes </p>
        </div>
        <div
          className={
            " flex flex-col border-2 border-[#68686A] rounded-2xl pb-40 px-8 pt-8"
          }
        >
          <h5 className="text-xl font-medium text-center mb-2">Elite plan</h5>
          <h4 className="mb-8 text-6xl text-center">$60/mo</h4>
          <p className="gap-4 pl-10">All Premium Plan Benefits</p>
          <p className="gap-4 pl-10">Weekly Personal Training Sessions</p>
          <p className="gap-4 pl-10">Personalized Workout Plan</p>
          <p className="gap-4 pl-10">Monthly Wellness Seminars</p>
          <p className="gap-4 pl-10">VIP Access to New Classes </p>
        </div>
      </div>
    </div>
  );
};
