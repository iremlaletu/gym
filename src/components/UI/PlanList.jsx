import { pricing } from "../../utils/data";
import { FaCheckCircle } from "react-icons/fa";
import Button from "./Button";

const PlanList = () => {
  const { plans } = pricing;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1280px] mx-auto">
      {plans.map((plan, idx) => {
        const { name, price, list, delay } = plan;
        return (
          <div
            key={idx}
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay={delay}
            className="w-full rounded-sm px-4"
          >
            <div className=" h-full p-6 flex flex-col items-center gap-y-8 bg-neutral-800 text-white hover:bg-neutral-400/10 hover:text-neutral-500 transition duration-100">
              <div>
                <div className="text-2xl py-8 text-center ">{name}</div>
                <div className="text-6xl font-primary">
                  <span> {price} </span>
                  <span className="text-sm"> $ </span>
                  <span className="text-sm"> /month </span>
                </div>
              </div>

              <ul className="flex flex-col gap-y-4 mb-8">
                {list.map((item, idx) => {
                  return (
                    <li className="flex items-center gap-x-2" key={idx}>
                      <FaCheckCircle className="text-lg" />
                      <div> {item.name} </div>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto">
                <Button to="/signin"> Join Now </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PlanList;
