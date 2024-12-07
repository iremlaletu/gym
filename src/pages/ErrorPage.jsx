import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/header/logo.png";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center text-center h-[50vh] space-y-4 ">
      <img
        className="w-24 h-auto cursor-pointer"
        onClick={() => navigate("/")}
        src={Logo}
        alt="logo"
      />
      <h1 className="text-3xl font-semibold ">Oops! Something went wrong</h1>
      <h4 className="text-lg ">
        The page you're looking for might have been moved or doesn't exist
        anymore.
      </h4>
      <h4 className="text-lg ">Return to the Home Page, Click logo!</h4>
    </div>
  );
};

export default ErrorPage;
