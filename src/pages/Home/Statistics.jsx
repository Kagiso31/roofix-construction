import { Play, Roof1, Roof6 } from "../../data/icons";
import statisticsImg from "../../assets/home/statistics/statistics.jpg";
import statisticsPattern from "../../assets/patterns/statistics.png";

const Statistics = () => {
  return (
    <section className="isolate relative bg-none lg:bg-statistics  bg-accent text-white bg-no-repeat bg-right bg-contain lg:after:bg-accent lg:after:absolute lg:after:-z-10 lg:after:top-0 lg:after:left-0 lg:after:h-full lg:after:w-[57%] lg:after:[clip-path:polygon(0_0,90%_0%,80%_100%,0_100%)]">
      <img
        src={statisticsPattern}
        className="absolute top-0 left-0 lg:bottom-0 lg:top-auto"
      />
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12 lg:grid lg:grid-cols-2">
        <div className="flex flex-col gap-8 py-16 px-8 xl:px-0">
          <h2 className="font-extrabold text-4xl">
            Best Roof For Your Commercial & Residential
          </h2>
          <p className="max-w-[60ch]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur, reiciendis, iure, ea recusandae eos molestiae officiis
            praesentium consequatur distinctio non deserunt ipsa amet nulla.
          </p>
          <div className="flex flex-col items-center gap-10 sm:gap-20 sm:flex-row">
            <div className="flex flex-col items-center gap-4 sm:items-start sm:border-r sm:pr-20">
              <Roof1 className="fill-white w-[65px] h-[65px]" />
              <span className="font-bold text-4xl">255</span>
              <p className="font-medium">Projects Done</p>
            </div>
            <div className="flex flex-col items-center gap-4 sm:items-start">
              <Roof6 className="fill-white w-[65px] h-[65px]" />
              <span className="font-bold text-4xl">255</span>
              <p className="font-medium">Happy Clients</p>
            </div>
          </div>
        </div>

        {/* video */}

        <div className="relative">
          <div>
            <img className="lg:hidden" src={statisticsImg} alt="" />
          </div>
          <a
            href="https://www.youtube.com"
            className="isolate top-1/2 right-1/2 translate-x-1/2 p-4 absolute w-20 h-20 rounded-full grid place-items-center bg-transparent cursor-pointer border-2 hover:bg-white"
          >
            <Play className="fill-white w-10 z-10" />
            <div className="absolute w-32 h-32 -z-10">
              <div className="waves wave-1"></div>
              <div className="waves wave-2"></div>
              <div className="waves wave-3"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
