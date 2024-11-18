import Laptop from "../../assets/images/Laptop.webp";

const Banner = () => {
  return (
    <div className="flex items-center justify-between mx-10 p-10 rounded-lg bg-[#8897e8]">
      <div className="w-1/2">
        <h1 className="text-[3rem] font-bold text-white">
            Unlock Your Potential, Learn Without Limits.
        </h1>
        <p className="text-md text-gray-300">
            Join a vibrant community of learners and educators!
            Create, connect, and grow with BeOnSchool – the ultimate
            online platform for courses, live classes, and progress tracking.
            Step into a world of limitless possibilities and stay inspired on your educational journey.
        </p>
          <button className="bg-[#4F46E5] rounded p-3 text-xl font-bold text-white px-10 my-3">Join Now</button>
      </div>
      <img src={Laptop} alt="Laptop" />
    </div>
  );
};

export default Banner;
