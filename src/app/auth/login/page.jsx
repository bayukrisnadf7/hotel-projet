import LoginView from "@/components/Auth/Login";
import Navbar from "@/components/Home/Utilities/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="md:mx-32  mt-36">
        <LoginView />
      </div>
    </>
  );
};
export default Page;
