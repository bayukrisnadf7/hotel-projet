"use client";
import { FaGoogle } from "react-icons/fa";
import Input from "./Input";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const RegisterView = () => {
  const [dataRegister, setDataRegister] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleInput = (event) => {
    setDataRegister({
      ...dataRegister,
      [event.target.name]: event.target.value,
    });
  };

  const handleData = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(dataRegister),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if(result.status == 400){
        alert("Email already exists")
      } else if (result.status == 200) {
        alert("Registration successful");
        window.location.href = "/auth/login";
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      setError("Registration failed");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="w-full flex md:flex-row flex-col md:justify-between items-center">
        <Image
          src={"/img/undraw_secure_login_pdn4.png"}
          className="md:mx-10 mt-10 md:block hidden"
          width={500}
          height={500}
        ></Image>
        <div className="flex flex-col md:mx-20 mt-28">
          <h1 className="font-bold text-2xl text-color-primary">Register</h1>
          <p className="text-sm mt-1">Please fill the form below</p>
          <form onSubmit={handleData}>
            <div className="mt-3">
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
              className="bg-color-primary p-2 text-white rounded-lg mt-5"
              type="submit"
              disabled={loading}
            >
              Register
            </button>
          </form>
          <p className="mt-3 text-sm text-center">
            Have an account?{" "}
            <Link href={"/auth/login"} className="text-color-secondary">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default RegisterView;
