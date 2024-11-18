import Laptop from "../../assets/images/Laptop.webp";

const Banner = () => {
  return (
    <div className="flex items-center justify-between mx-10 p-10 rounded-lg bg-[#8897e8]">
      <div className="w-1/2">
        <h1 className="text-[3rem] font-bold text-white">
            Learn, Connect, Succeed.
        </h1>
        <p className="text-xl font-extralight text-gray-300">
            Join a vibrant community of learners and educators!
            Create, connect, and grow with BeOnSchool – the ultimate
            online platform for courses, live classes, and progress tracking.
            Step into a world of limitless possibilities and stay inspired on your educational journey.
        </p>
      </div>
      <img src={Laptop} alt="Laptop" />
    </div>
  );
};

export default Banner;
