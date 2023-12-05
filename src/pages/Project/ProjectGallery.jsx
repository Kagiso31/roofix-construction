import { useParams } from "react-router-dom";
import { projects } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const ProjectGallery = () => {
  const { name } = useParams();
  const { gallery } = projects.find((project) => project.link === name);

  return (
    <div className="custom-nav select-none pt-16">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },
        }}
        spaceBetween={60}
        modules={[Navigation]}
        navigation={true}
        loop={true}
      >
        {gallery.map((galleryImg, index) => (
          <SwiperSlide key={index}>
            <img className="w-full" src={galleryImg} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectGallery;
