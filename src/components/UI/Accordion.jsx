import { useState } from "react";
import { FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa";

const Accordion = ({ accordion }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { question, answer } = accordion;
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="100"
      className="cursor-pointer"
    >
      <div className="bg-neutral-400/10">
        <div className="min-h-16 flex items-center justify-between px-7 ">
          <h6 className="h6"> {question} </h6>
          <div>
            {isOpen ? (
              <FaChevronCircleUp className="text-lg text-neutral-500" />
            ) : (
              <FaChevronCircleDown className="text-lg text-neutral-500" />
            )}
          </div>
        </div>
        <div
          className={` ${
            isOpen ? "min-h-44 " : "min-h-0"
          } max-h-0 overflow-hidden flex justify-center px-7 transition-all`}
        >
          <div className="mt-3">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
