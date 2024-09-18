import AboutView from "@/components/Home/About";
import HomeView from "@/components/Home/Home";
import Navbar from "@/components/Home/Utilities/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeView />
      {/* <div className="mt-40">
        <AboutView />
      </div> */}
    </>
  );
}
