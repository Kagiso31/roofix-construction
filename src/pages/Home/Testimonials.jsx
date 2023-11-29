import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../../data";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="testimonials bg-testimonials text-[#C3C3C3] py-[120px] select-none">
      <div className="max-w-[1200px] mx-auto ">
        <Swiper
          grabCursor={true}
          slidesPerView={1}
          modules={[Navigation]}
          navigation={true}
          loop={true}
          spaceBetween={60}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const TestimonialCard = ({ img, name, profession, comment }) => {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <div className="relative before:absolute before:top-0 before:right-0 before:bg-accent before:w-8 before:h-8 before:rounded-full before:translate-x-1/2 before:content-['”'] before:text-7xl before:grid before:place-items-center before:rotate-180 before:text-white">
        <img src={img} className="w-20 h-20 rounded-full" />
      </div>
      <p className="md:w-[72ch] sm:w-[48ch] px-4">{comment}</p>
      <div className="space-y-1">
        <p className="font-medium text-xl text-white">{name}</p>
        <p>{profession}</p>
      </div>
    </div>
  );
};

export default Testimonials;
