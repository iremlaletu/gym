import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";

const MemberShipCard = ({ membership }) => {
  const { membershipType, description, monthlyPrice, features } = membership;
  return (
    <div
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="200"
      className="px-4"
    >
      <div className="p-6 flex lg:flex-row flex-col items-start gap-4 hover:bg-neutral-800 hover:text-white bg-neutral-400/10 text-neutral-500 transition duration-100">
        <div className="flex flex-col items-start gap-8">
          <div className="text-2xl">{membershipType} Membership</div>
          <div className="text-5xl font-primary flex items-baseline gap-2">
            <span>{monthlyPrice}</span>
            <span className="text-sm">$</span>
            <span className="text-sm text-gray-400">/month</span>
          </div>
        </div>
        <div className="ml-2 flex-1">
          <p className="mb-4">{description}</p>
          <ul className="flex flex-col gap-y-4">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-x-2">
                <FaCheckCircle className="text-gray-400 w-4 h-4 shrink-0" />
                <span className="leading-5">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="self-end flex-shrink-0">
          <Button to="/register"> Join Now </Button>
        </div>
      </div>
    </div>
  );
};

export default MemberShipCard;