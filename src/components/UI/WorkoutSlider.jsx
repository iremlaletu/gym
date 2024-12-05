import { workouts } from "../../utils/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WorkoutSlider = () => {
  const { programs } = workouts;
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={32}
      navigation={true}
      breakpoints={{
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      modules={[Navigation, Pagination]}
    >
      {programs.map((program, idx) => {
        const { image, name } = program;
        return (
          <SwiperSlide className="max-w-80 max-h-80 relative" key={idx}>
            <img className="w-full h-full object-cover" src={image} alt="" />
            <div className="absolute left-5 bottom-5">
              <div> {name} </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkoutSlider;
