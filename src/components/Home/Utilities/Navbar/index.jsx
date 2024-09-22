"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full fixed top-0">
      <div className="md:h-20 h-16 w-full flex items-center justify-between relative">
        <Link href="/">
          <h1 className="md:mx-20 text-color-primary text-2xl font-bold mx-5">
            LOGO HOTEL
          </h1>
        </Link>
        <div className="md:flex hidden">
          <ul className="flex gap-5">
            <Link href={"/"}>
              <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer">
                HOME
              </li>
            </Link>
            <a href={"#about"}>
            <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer">
              ABOUT
            </li>
            </a>
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
        <div className="gap-5 md:mx-20 md:flex hidden">
          <Link href="/auth/register">
            <button className="border border-color-primary p-2 md:w-28 rounded-lg text-color-primary hover:bg-color-primary hover:text-white">
              REGISTER
            </button>
          </Link>
          <Link href="/auth/login">
            <button className="bg-color-primary p-2 rounded-lg text-white md:w-28 hover:border hover:border-color-primary hover:text-color-primary hover:bg-white">
              LOGIN
            </button>
          </Link>
        </div>
        <div className="md:hidden mx-5">
          <button className="absolute right-5 top-4">
            {menuOpen ? (
              <AiOutlineClose size={25} onClick={toggleMenu} />
            ) : (
              <AiOutlineMenu size={25} onClick={toggleMenu} />
            )}
          </button>
        </div>
        {menuOpen && (
          <ul className="flex flex-col absolute top-16 right-0 w-28 bg-white">
            <Link href={"/"}>
              <li
                onClick={toggleMenu}
                className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer"
              >
                HOME
              </li>
            </Link>
            <li
              onClick={toggleMenu}
              className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer"
            >
              ABOUT
            </li>
            <li
              onClick={toggleMenu}
              className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer"
            >
              PRODUCT
            </li>
            <li
              onClick={toggleMenu}
              className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer"
            >
              SERVICE
            </li>
            <li
              onClick={toggleMenu}
              className="p-2 hover:bg-color-primary rounded-lg hover:text-white cursor-pointer"
            >
              CONTACT
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Navbar;
