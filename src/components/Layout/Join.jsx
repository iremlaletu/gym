import JoinImg from "../../assets/img/join/woman.png";
import Button from "../UI/Button";

const Join = () => {
  return (
    <section className="bg-neutral-500 min-h-[530px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:-space-x-12 -space-y-24 lg:-space-y-0 ">
          <div
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-delay="200"
            className="-mt-20 max-w-[375px] md:max-w-[442px] lg:max-w-full "
          >
            <img src={JoinImg} alt="womanpicture" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-delay="200"
            className="max-w-[350px] ml-8"
          >
            <h2 className="h1 text-white md:text-[60px] md:leading-[62px] mb-4 lg:mb-6 ">
              Take the First Step <span className="text-primary-100">&</span>{" "}
              Sign Up Today!
            </h2>
            <p className="text-body-md text-white mb-6">
              We’ll keep you updated on the things you need to know about Gym
              Center. Nothing more, nothing less.{" "}
            </p>
            <Button> Join now </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
