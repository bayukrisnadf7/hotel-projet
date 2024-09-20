import LoginView from "@/components/Auth/Login";
import Navbar from "@/components/Home/Utilities/Navbar";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className="mx-32 mt-10">
        <LoginView />
      </div>
    </>
  );
};
export default Page;
