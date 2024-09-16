const Navbar = () => {
  return (
    <div className="h-20 w-full flex items-center justify-between">
        <h1 className="mx-20 text-color-primary text-2xl font-bold">LOGO HOTEL</h1>
        <div>
          <ul className="flex gap-5">
            <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white">HOME</li>
            <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white">ABOUT</li>
            <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white">PRODUCT</li>
            <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white">SERVICE</li>
            <li className="p-2 hover:bg-color-primary rounded-lg hover:text-white">CONTACT</li>
          </ul>
        </div>
        <div className="flex gap-5 mx-20">
          <button className="border-2 border-color-primary p-2 w-28 rounded-lg hover:bg-color-primary hover:text-white">REGISTER</button>
          <button className="bg-color-primary p-2 rounded-lg text-white w-28 hover:border-2 hover:border-color-primary hover:text-color-primary hover:bg-white">LOGIN</button>
        </div>
    </div>
  );
};
export default Navbar;
