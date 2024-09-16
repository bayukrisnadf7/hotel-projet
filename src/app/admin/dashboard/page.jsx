import SidebarView from "@/components/admin/Sidebar";
import CardDashboard from "./card";
import { AiFillCarryOut } from "react-icons/ai";
import BarChart from "./bar-chart";
const Page = () => {
  return (
    <div className="flex">
      <div className="w-1/5">
        <SidebarView />
      </div>
      <div className="w-full flex flex-col mx-4 mt-5">
        <div className=" p-5 flex flex-row justify-center gap-5">
          <CardDashboard
            icons={
              <AiFillCarryOut
                size={30}
                className=" bg-orange-500 p-5 w-20 h-20 text-white"
              />
            }
          />
          <CardDashboard
            icons={
              <AiFillCarryOut
                size={30}
                className=" bg-green-500 p-5 w-20 h-20 text-white"
              />
            }
          />
          <CardDashboard
            icons={
              <AiFillCarryOut
                size={30}
                className=" bg-red-500 p-5 w-20 h-20 text-white"
              />
            }
          />
        </div>
        <BarChart />
      </div>
    </div>
  );
};
export default Page;
