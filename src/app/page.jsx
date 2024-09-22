import AboutView from "@/components/Home/About";
import HomeView from "@/components/Home/Home";
import Navbar from "@/components/Home/Utilities/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <HomeView />
      </section>
      <section>

      </section>
        <AboutView />
      <div className="mt-40">
      </div>
    </>
  );
}
