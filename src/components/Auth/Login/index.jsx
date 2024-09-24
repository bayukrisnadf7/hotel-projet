"use client";
import { FaGoogle } from "react-icons/fa";
import Input from "./Input";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const LoginView = () => {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleInput = (event) => {
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value,
    });
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataLogin),
      });

      const result = await response.json();
      console.log(result); // Tambahkan ini untuk melihat hasil respon di console

      if (result.status === 200) {
        alert("Login successful");
        window.location.href = "/";
      } else if (result.status === 401) {
        alert("Invalid email or password");
      } else if (result.status === 404) {
        alert("User not found");
      } else {
        alert("Internal server error");
      }
    } catch (error) {
      setError(error.message);
      console.error("Login error: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full flex justify-between items-center">
        <Image
          src={"/img/undraw_secure_login_pdn4.png"}
          className="mx-10"
          width={500}
          height={500}
        ></Image>
        <div className="flex flex-col mx-20 mt-10">
          <h1 className="font-bold text-2xl text-color-primary">Login</h1>
          <p className="text-sm mt-1">Hi, Welcome back</p>
          <button className="bg-color-secondary p-2 text-white rounded-lg flex gap-5 items-center mt-5 justify-center text-sm">
            <FaGoogle size={20} />
            Login with Google
          </button>
          <p className="text-sm mt-5 text-center">
            --------------- or Login with Email ---------------
          </p>
          <form onSubmit={handleLogin}>
            <div className="mt-5">
            <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="johndoe@example"
                name="email"
                onChange={handleInput}
                className="w-80 p-2 border rounded-lg mt-2"
                required
              />
              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="********"
                name="password"
                onChange={handleInput}
                className="w-80 p-2 border rounded-lg mt-2"
                required
              />
            </div>
            <div>
              <Link href={"/auth/forgotpassword"}>
                <p className="text-sm mt-2 text-color-secondary">
                  Forgot Password?
                </p>
              </Link>
            </div>
            <button
              type="submit"
              className="bg-color-primary p-2 text-white rounded-lg mt-5 w-28"
              disabled={loading}
            >
              Login
            </button>
          </form>
          <p className="mt-3 text-sm text-center">
            Don't have an account?{" "}
            <Link href={"/auth/register"} className="text-color-secondary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default LoginView;
