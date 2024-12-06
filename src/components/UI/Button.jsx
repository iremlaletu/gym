import { useNavigate } from "react-router-dom";

const Button = ({ children, onClick, to }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    if (to) {
      navigate(to);
    }
  };
  return (
    <div className="relative group w-fit">
      <div className="relative w-64 h-14 overflow-hidden rounded-xl bg-neutral-500 z-10">
        <div className="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

        <div className="absolute flex items-center justify-center text-white z-[1] rounded-2xl inset-0.5 bg-neutral-500">
          <button
            name="text"
            onClick={handleClick}
            className="font-semibold text-lg h-full w-full px-16 py-3 rounded-xl bg-neutral-500"
          >
            {children}
          </button>
        </div>
        <div className="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-red-500 to-yellow-500 blur-[30px]"></div>
      </div>
    </div>
  );
};

export default Button;
