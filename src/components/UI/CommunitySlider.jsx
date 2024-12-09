import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { community } from "../../utils/data";

const CommunitySlider = () => {
  const { testimonials } = community;
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={-50}
        initialSlide={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className="relative overflow-hidden bg-neutral-500 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full lg:h-[500px] h-96 object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full p-4 lg:p-10 text-white">
              <h3 className="text-xl font-bold text-primary-100">
                {item.name}
              </h3>
              <p className="text-sm">{item.message}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CommunitySlider;
