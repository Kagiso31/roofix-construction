import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from "../../data";
import { useState } from "react";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// swiper modules
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { ChevronDoubleRight, Play } from "../../data/icons";

const Hero = () => {
  const [showArrows, setShowArrows] = useState(false);
  return (
    <section className="hero">
      <div
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
        className="relative h-[46.875rem] text-white select-none"
      >
        <Swiper
          navigation={showArrows}
          autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
          effect={"fade"}
          modules={[Autoplay, EffectFade, Navigation]}
          loop={true}
          slidesPerView={1}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                style={{ backgroundImage: slide.bgImg }}
                className={`flex flex-col justify-center bg-no-repeat bg-cover bg-center w-full aspect-video h-full`}
              >
                <div className="flex flex-col gap-6 px-12 xl:container xl:mx-auto">
                  <strong className="font-bold uppercase text-base tracking-[0.3em] md:text-lg">
                    {slide.subtitle}
                  </strong>
                  <h1 className="relative font-black text-3xl sm:text-5xl md:text-6xl lg:w-[800px] before:block before:absolute before:bg-accent before:w-1  before:top-4 before:-left-5 before:bottom-4 ">
                    {slide.title}
                  </h1>

                  <p className="md:w-96">{slide.body}</p>

                  <div className="self-start flex flex-col gap-4 sm:flex-row">
                    <button
                      type="button"
                      className="self-start sm:self-auto flex items-center font-bold text-[0.9375rem] uppercase py-3 px-4 rounded bg-accent transition-colors duration-500 ease-out hover:bg-[#d21c1d]"
                    >
                      Read More{" "}
                      <span>
                        <ChevronDoubleRight
                          className={`w-[16px] fill-white `}
                        />
                      </span>
                    </button>

                    <div className="flex items-center gap-4">
                      <a
                        href="#"
                        className="group w-16 h-16 rounded-full grid place-content-center bg-white transition-colors duration-500 ease-out hover:bg-accent"
                      >
                        <Play
                          className={`w-[32px] fill-accent group-hover:fill-white transition-all duration-500 ease-out`}
                        />
                      </a>

                      <div className="flex flex-col font-semibold tracking-widest">
                        <span>Our Workflow</span>
                        <span>Play Video</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
