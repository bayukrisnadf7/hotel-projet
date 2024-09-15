import { IoLogOut } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { AiFillSwitcher } from "react-icons/ai";
import MenuSidebar from "./Menu";
const SidebarView = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-between bg-slate-50 shadow-2xl">
        <div className="">
          <h1 className="mt-5 p-3 text-center">Hotel</h1>
          <MenuSidebar
            title="Dashboard"
            link="/admin/dashboard"
            icons={<FaHome className="text-black" />}
          />
          <MenuSidebar
            title="Users"
            link="/admin/users"
            icons={<FaUser className="text-black" />}
          />
          <MenuSidebar
            title="Rooms"
            link="/admin/rooms"
            icons={<AiFillSwitcher className="text-black" />}
          />
        </div>
        <div className="flex bottom-0 justify-between items-center p-3 hover:bg-color-primary hover:text-white">
          <p>Logout</p>
          <IoLogOut className="text-black" size={20} />
        </div>
      </div>
    </div>
  );
};
export default SidebarView;
