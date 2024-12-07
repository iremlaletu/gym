import JoinImg from "../../assets/img/join/join.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Join = () => {
  return (
    <section className="bg-neutral-500 flex flex-col md:flex-row justify-evenly space-y-5 mt-20 ">
      <div className="">
        <div className="flex flex-col h-full md:flex-row md:items-center md:-space-x-24 -space-y-32 lg:-space-y-0">
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="300"
            className="-mt-20 max-w-[375px] md:max-w-[442px] lg:max-w-full "
          >
            <img src={JoinImg} alt="womanpicture" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="200"
            className="max-w-[350px] ml-8 lg:ml-0"
          >
            <h2 className="h1 text-white md:text-[60px] mb-6 ">
              Take the First Step <span className="text-primary-100">&</span>{" "}
              Sign Up Today!
            </h2>
            <p className="text-body-md text-white mb-6">
              Discover tips, updates, and motivation from Gym Center. Your
              fitness journey, our priority.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="100"
        className="text-left ml-8 flex flex-col justify-evenly"
      >
        <div className="mb-8">
          <h3 className="text-white mb-4">Useful PDFs</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/pdfs/privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:underline"
              >
                Privacy Policy & Terms of Use
              </a>
            </li>
            <li>
              <a
                href="/pdfs/membership-agreement.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:underline"
              >
                Membership Agreement
              </a>
            </li>
            <li>
              <a
                href="/pdfs/membership-rules.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:underline"
              >
                Membership Rules & Regulations
              </a>
            </li>
            <li>
              <a
                href="/pdfs/cancellation-form.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white hover:underline"
              >
                Cancellation Form
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="text-white mb-4">Main Office</h3>
          <div className="flex items-center mb-2">
            <FaLocationDot className="text-primary-100 text-xl mr-2" />
            <p className="text-sm text-white">
              123 Fitness Lane, Gym City, Fitland
            </p>
          </div>
          <div className="flex items-center mb-2">
            <FaPhone className="text-primary-100 text-xl mr-2" />
            <p className="text-sm text-white">Phone: (123) 456-7890</p>
          </div>
          <div className="flex items-center">
            <IoIosMail className="text-primary-100 text-xl mr-2" />
            <p className="text-sm text-white">Email: contact@gymcenter.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
