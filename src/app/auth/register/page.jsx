import RegisterView from "@/components/Auth/Register";
import Navbar from "@/components/Home/Utilities/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="md:mx-32 md:mt-24">
        <RegisterView />
      </div>
    </>
  );
};
export default Page;
