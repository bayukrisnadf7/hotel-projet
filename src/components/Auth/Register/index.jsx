import { FaGoogle } from "react-icons/fa";
import Input from "./Input";
import Link from "next/link";
import Image from "next/image";

const RegisterView = () => {
    return (
        <>
        <div className="w-full flex md:flex-row flex-col md:justify-between items-center">
          <Image src={"/img/undraw_secure_login_pdn4.png"} className="md:mx-10 mt-10 md:block hidden" width={500} height={500}></Image>
          <div className="flex flex-col md:mx-20 mt-28">
            <h1 className="font-bold text-2xl text-color-primary">Register</h1>
            <p className="text-sm mt-1">Please fill the form below</p>
            <div className="mt-3">
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
              Register
            </button>
            <p className="mt-3 text-sm text-center">
              Have an account? <Link href={"/auth/login"} className="text-color-secondary">Login</Link>
            </p>
          </div>
        </div>
      </>
    )
}
export default RegisterView