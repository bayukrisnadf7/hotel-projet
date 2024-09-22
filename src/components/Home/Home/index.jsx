import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const HomeView = () => {
  return (
    <div className="flex md:flex-row flex-col md:mt-48 mt-10 items-center justify-between md:mx-20 mx-5">
      <div className="w-full">
      <div className="md:hidden mx-10">
        <Image
          src="/img/undraw_apartment_rent_o0ut.png"
          alt="home"
          width={900}
          height={900}
          className="w-full h-full"
        />
      </div>
        <h1 className="md:text-6xl text-3xl font-bold md:mt-0 mt-5">Book Your</h1>
        <h1 className="md:text-7xl text-4xl font-bold text-color-primary">Favorite Hotel</h1>
        <p className="md:w-1/2 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          reiciendis rerum, est error eum quisquam saepe possimus dolore quod
          voluptates.
        </p>
        <button className="bg-color-primary p-2 w-36 rounded-xl text-white mt-5 flex items-center justify-between">
          Cari Hotel
          <FaArrowRight/>
        </button>
      </div>
      <div className="md:block hidden mx-10">
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
