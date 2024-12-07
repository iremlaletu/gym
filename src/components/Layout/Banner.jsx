import Button from "../UI/Button";

const Banner = () => {
  return (
    <section id="banner" className="h-screen bg-neutral-500 ">
      <div className="h-full">
        <div className="flex items-center h-full relative -space-x-48 lg:-space-x-52">
          <div
            className="w-full h-full bg-banner bg-cover bg-right lg:bg-center bg-no-repeat flex-1"
            data-aos="fade-left"
            data-aos-delay="900"
          ></div>
          <div className="flex-1 text-right z-10 lg:pr-20 pr-5 ">
            <h1
              className="h1 mb-5 text-white"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Find Balance, Strength, and Energy <br />
              <span className="text-primary-200">
                your fitness your style.
              </span>{" "}
            </h1>
            <p
              className=" max-w-[480px] ml-auto text-body-md lg:text-body-lg mb-5"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Discover a fitness experience that fits your lifestyle and
              transforms your goals into reality.
            </p>
            <div
              className="w-fit ml-auto"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <Button to="/register">Join Now</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
