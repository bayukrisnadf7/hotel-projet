import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between">
      <Link href="/">
        <h1 className="mx-20 text-color-primary text-2xl font-bold">
          LOGO HOTEL
        </h1>
      </Link>
      <div>
        <ul className="flex gap-5">
          <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer">
            HOME
          </li>
          <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer">
            ABOUT
          </li>
          <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer">
            PRODUCT
          </li>
          <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer">
            SERVICE
          </li>
          <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer">
            CONTACT
          </li>
        </ul>
      </div>
      <div className="flex gap-5 mx-20">
        <Link href="/auth/register">
          <button className="border-2 border-color-primary p-2 w-28 rounded-lg text-color-primary hover:bg-color-primary hover:text-white">
            REGISTER
          </button>
        </Link>
        <Link href="/auth/login">
          <button className="bg-color-primary p-2 rounded-lg text-white w-28 hover:border-2 hover:border-color-primary hover:text-color-primary hover:bg-white">
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
