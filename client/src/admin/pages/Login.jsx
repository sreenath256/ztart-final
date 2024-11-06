import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { vars } from "../../constents/Api";

const LoginPage = ({ setAdmin }) => {
  // Accepting setIsAdmin as a prop
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Both fields are required");
      return;
    }

    try {
      // Perform login logic here (e.g., API call)
      setLoading(true);
      const response = await axios.post(
        `${vars.api_url}/api/1.0/auth/login`,
        {
          email,
          password,
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response?.data?.statusCode !== 200) {
        throw new Error("Login failed!"); // Handle error based on the response
      }

      const data = response?.data?.data;

      console.log(response.data.data);
      

      // Assuming your API returns an admin flag
      if (data) {
        setAdmin(true); // Update admin state in App
        localStorage.setItem("user", JSON.stringify(response.data?.data));
        navigate("/");
      } else {
        setError("Invalid login credentials"); // Handle invalid credentials
      }

      setError(""); // Clear previous errors
      console.log("Logged in successfully:", data);
    } catch (err) {
      console.log(err);

      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#00a39a] mb-5">
          Admin Login
        </h1>
        <div className="bg-white shadow-lg w-full rounded-lg divide-y divide-gray-200">
          <form onSubmit={handleLogin} className="px-5 py-7">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-600 block"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00a39a]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-7">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-600 block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#00a39a]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            <button
              type="submit"
              className={`transition duration-200 bg-[#00a39a] hover:bg-[#008d85] focus:bg-[#008d85] text-white w-full py-2.5 rounded-lg text-sm font-semibold text-center ${
                loading
                  ? "!bg-gray-400 cursor-not-allowed"
                  : "bg-[#00a39a] hover:bg-[#15756e]"
              } `}
            >
              {loading ? "Logging in" : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
