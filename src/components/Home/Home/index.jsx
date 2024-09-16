import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const HomeView = () => {
  return (
    <div className="flex mx-20 mt-36 items-center justify-between">
      <div className="w-full">
        <h1 className="text-6xl font-bold">Book Your</h1>
        <h1 className="text-7xl font-bold text-color-primary">Favorite Hotel</h1>
        <p className="w-1/2 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          reiciendis rerum, est error eum quisquam saepe possimus dolore quod
          voluptates.
        </p>
        <button className="bg-color-primary p-2 w-36 rounded-xl text-white mt-5 flex items-center justify-between">
          Cari Hotel
          <FaArrowRight/>
        </button>
      </div>
      <div>
        <Image
          src="/img/undraw_apartment_rent_o0ut.png"
          alt="home"
          width={900}
          height={900}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
export default HomeView;
