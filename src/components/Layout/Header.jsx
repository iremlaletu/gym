import { useEffect, useState } from "react";
import Logo from "../../assets/img/header/logo.png";
import Nav from "../UI/Nav";
import NavMobile from "../UI/NavMobile";
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={` fixed z-30 left-0 right-0 mx-auto flex justify-between items-center px-5 lg:px-20 transition-all duration-300 ${
        isActive ? "bg-neutral-500 py-4" : "bg-transparent py-5 "
      } `}
    >
      <p className="text-slate-400">GYM</p>
      <Nav />

      <div
        onClick={() => setNavMobile(!navMobile)}
        className="lg:hidden absolute right-4"
      >
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl cursor-pointer " />
        ) : (
          <IoMenu className="text-primary-200 text-3xl cursor-pointer" />
        )}
      </div>
      <NavMobile navMobile={navMobile} setNavMobile={setNavMobile} />
    </header>
  );
};

export default Header;
