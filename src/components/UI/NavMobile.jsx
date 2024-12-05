import Button from "../UI/Button";

const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/" },
  { name: "Workouts", href: "/" },
  { name: "Pricing", href: "/" },
  { name: "Community", href: "/" },
  { name: "FAQ", href: "/" },
];

const NavMobile = ({ navMobile }) => {
  return (
    <nav
      className={` ${
        navMobile ? "min-h-screen" : "min-h-0"
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="list-none w-full h-full flex flex-col p-28 items-center gap-y-8">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <a className=" text-white text-body-md " href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className=" -mt-44 flex flex-col justify-center items-center gap-2">
        <Button> Login </Button>
        <Button> Signup </Button>
      </div>
    </nav>
  );
};

export default NavMobile;
