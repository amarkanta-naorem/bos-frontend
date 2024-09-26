import { Link, Outlet, useLocation } from "react-router-dom";

const SystemAuth = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <div className="h-screen flex justify-center items-center">
      <img
        className="w-[40rem]"
        src="https://img.freepik.com/free-vector/login-concept-illustration_114360-4525.jpg?w=740&t=st=1727345505~exp=1727346105~hmac=5d44502aa11f807f827356cfc4c33604592ad8cdf056926a5405f2413f382138"
        alt="AuthImage"
      />
      <div className="w-[30rem] flex flex-col justify-center items-center border rounded p-5">
        <Link to={"/"}>
          <img
            src="https://i.postimg.cc/nVkPgV71/Be-On-School1.png"
            alt="Be-On-School"
            className="h-7"
          />
        </Link>
        <hr className="w-11/12 h-1 mx-auto my-3" />
        <ul className="flex">
          <li
            className={`relative overflow-hidden cursor-pointer mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2
          ${isActive("/auth/system/login") ? "bg-stone-200" : "border"}
          `}
          >
            <Link to={"/auth/system/login"}>
              <div className="md:relative z-10">Sign In</div>
              <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
            </Link>
          </li>
          <li
            className={`relative overflow-hidden cursor-pointer mx-2 px-2 py-1 rounded-md font-thin transition-colors duration-1000 group mb-2
          ${isActive("/auth/system/registered") ? "bg-stone-200" : "border"}
          `}
          >
            <Link to={"/auth/system/registered"}>
              <div className="md:relative z-10">Sign Up</div>
              <div className="absolute inset-0 bg-stone-200 transition-transform duration-1000 transform -translate-x-full group-hover:translate-x-0"></div>
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default SystemAuth;
