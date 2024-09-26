import { useState } from "react";
import { useNavigate } from "react-router";

const SystemSignUp = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          password,
          password_confirmation,
        }),
      });
      const data = await response.json();
      if (response.status === 201) {
        navigate("/auth/system/login");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occured. Please try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="h-auto">
      <div className="flex justify-between">
        <div className="flex flex-col items-start my-2">
          <label
            htmlFor="firstName"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="John"
            className="ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-700 placeholder:text-gray-400 text-gray-900 font-medium outline-none rounded p-2 w-[10rem]"
          />
        </div>
        <div className="flex flex-col items-start my-2">
          <label
            htmlFor="lastName"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Doe"
            className="ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-700 placeholder:text-gray-400 text-gray-900 font-medium outline-none rounded p-2 w-[10rem]"
          />
        </div>
      </div>
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
      <div className="flex justify-between">
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
            className="ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-700 placeholder:text-gray-400 text-gray-900 font-medium outline-none rounded p-2 w-[10rem]"
          />
        </div>
        <div className="flex flex-col items-start my-2">
          <label
            htmlFor="passwordConfirmation"
            className="text-sm font-medium leading-6 text-gray-900"
          >
            Password Confirmation
          </label>
          <input
            id="passwordConfirmation"
            type="password"
            value={password_confirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            placeholder="********"
            className="ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-700 placeholder:text-gray-400 text-gray-900 font-medium outline-none rounded p-2 w-[10rem]"
          />
        </div>
      </div>
      {error && <p className="text-red-500 text-sm my-2">{error}</p>}
      <button className="bg-indigo-600 rounded-md px-3 py-2 my-2 text-white w-full text-sm font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        Sign Up
      </button>
    </form>
  );
};

export default SystemSignUp;
