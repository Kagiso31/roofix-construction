import { useParams } from "react-router-dom";
import { projects } from "../../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from "react-router-dom";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const RelatedProjects = () => {
  const { name } = useParams();
  const relatedProjects = projects.filter((project) => project.link !== name);

  return (
    <section className="py-20">
      <div className="max-w-[1200px] px-8 mx-auto xl:px-0">
        <h2 className="font-bold text-4xl">Related Projects</h2>
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
            slideNextClass="next"
            slidePrevClass="prev"
          >
            {relatedProjects.map((project) => (
              <SwiperSlide key={project.id}>
                <RelatedProject {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const RelatedProject = ({ title, tags, summary, img, link }) => {
  return (
    <div className="grid grid-cols-2 items-center border border-[#e1e1e1] rounded-md">
      <div>
        <img className="h-[14.125rem] object-cover" src={img} />
      </div>
      <div className="px-[1.875rem] py-[1.5625rem] space-y-4">
        <div>
          <h3 className="relative font-bold text-2xl text-[#393738] transition-all duration-300 ease-in-out hover:text-accent before:absolute before:top-0 before:-left-4 before:bg-accent before:h-4 before:w-1 before:translate-y-1/2">
            <NavLink to={`/roofix-construction/projects/${link}`}>
              {title}
            </NavLink>
          </h3>
          <strong className="font-medium">
            {tags.map((tag, index) => (
              <a
                key={index}
                href="#"
                className="text-[#707173] hover:text-accent transition-all duration-300 ease-in-out"
              >
                {index !== tags.length - 1 ? `${tag}, ` : `${tag}`}
              </a>
            ))}
          </strong>
        </div>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default RelatedProjects;
