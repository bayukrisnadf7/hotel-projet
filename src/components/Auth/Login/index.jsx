import { FaGoogle } from "react-icons/fa";
import Input from "./Input";
import Link from "next/link";
const LoginView = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center overflow-hidden">
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-color-primary">Login</h1>
          <p className="text-sm mt-1">Hi, Welcome back</p>
          <button className="bg-color-secondary p-2 text-white rounded-lg flex gap-5 items-center mt-5 justify-center text-sm">
            <FaGoogle size={20} />
            Login with Google
          </button>
          <p className="text-sm mt-5 text-center">
            --------------- or Login with Email ---------------
          </p>
          <div className="mt-5">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <Input type="email" name="email" placeholder="johndoe@example" />
            <label htmlFor="password" className="text-sm">
              Password
            </label>
            <Input type="password" name="password" placeholder="********" />
          </div>
          <div>
            <Link href={"/auth/forgotpassword"}>
              <p className="text-sm mt-2 text-color-secondary">
                Forgot Password?
              </p>
            </Link>
          </div>
          <button className="bg-color-primary p-2 text-white rounded-lg mt-5">
            Login
          </button>
          <p className="mt-3 text-sm text-center">
            Don't have an account? <Link href={"/auth/register"} className="text-color-secondary">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default LoginView;
