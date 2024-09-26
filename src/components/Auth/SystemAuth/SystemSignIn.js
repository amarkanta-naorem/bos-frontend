const SystemSignIn = () => {
  return (
    <div className="h-[18rem]">
      <form>
        <div className="flex flex-col items-start my-2">
          <label
            for="email"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="amarkanta@beonschool.com"
            className="ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-700 placeholder:text-gray-400 text-gray-900 font-medium outline-none rounded p-2 w-[22rem]"
          />
        </div>
        <div className="flex flex-col items-start my-2">
          <label
            for="password"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-700 placeholder:text-gray-400 text-gray-900 outline-none rounded p-2 w-[22rem]"
          />
        </div>
        <button className="bg-indigo-600 rounded-md px-3 py-2 my-2 text-white w-full text-sm font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SystemSignIn;
