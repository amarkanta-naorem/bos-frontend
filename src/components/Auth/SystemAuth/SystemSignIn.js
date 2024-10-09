import { useState } from "react";
import { useNavigate } from "react-router";
import { BEONSCHOOL } from "../../../utils/common/common";

const SystemSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch(`${BEONSCHOOL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.status === 201) {
        localStorage.setItem("token", data.bearer_token);
        navigate("/system/dashboard");
      } else {
        setError(data.message);
      }
    } catch {
      setError("An error occured. Please try again.");
    }
  };
  return (
    <div className="h-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-start my-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="amarkanta@beonschool.com"
            className="ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-700 placeholder:text-gray-400 text-gray-900 font-medium outline-none rounded p-2 w-[22rem]"
          />
        </div>
        <div className="flex flex-col items-start my-2">
          <label
            htmlFor="password"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-700 placeholder:text-gray-400 text-gray-900 outline-none rounded p-2 w-[22rem]"
          />
        </div>

        {error && <p className="text-red-500 text-sm my-2">{error}</p>}

        <button
          type="submit"
          className="bg-indigo-600 rounded-md px-3 py-2 my-2 text-white w-full text-sm font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SystemSignIn;
