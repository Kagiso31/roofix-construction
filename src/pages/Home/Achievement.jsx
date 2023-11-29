import { ChevronDoubleRight, Play } from "../../data/icons";

const Achievement = () => {
  return (
    <section className="isolate relative text-white grid place-items-center py-20 bg-achievement bg-no-repeat bg-cover bg-fixed before:absolute before:inset-0 before:bg-black before:opacity-50 md+:py-0 md+:h-[500px]">
      <div className="relative z-10 text-center md+:text-left grid md+:grid-cols-2 gap-20 md+:gap-10 max-w-[1200px] mx-auto px-2 sm:px-8 xl:px-0 items-center justify-items-center">
        <div className="flex flex-col gap-10 md+:gap-6">
          <h2 className="font-extrabold text-4xl">
            Top Rated Roofing Construction Company Since 1992
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            perspiciatis porro, ex magnam ullam consequuntur at nemo iure.
          </p>
          <button
            type="button"
            className="self-center flex items-center font-bold text-[0.9375rem] uppercase py-3 px-4 rounded bg-accent transition-colors duration-500 ease-out hover:bg-[#d21c1d] md+:self-start"
          >
            Read More
            <span>
              <ChevronDoubleRight className={`w-[16px] fill-white`} />
            </span>
          </button>
        </div>

        <div className="relative w-40 h-40 grid place-content-center">
          <div className="before:absolute before:bg-white before:opacity-20 before:inset-0 before:rounded-full"></div>
          <div className="absolute w-full h-full bg-achievement-spin bg-no-repeat bg-cover bg-center rounded-full animate-spin"></div>
          <a
            href="https://www.youtube.com"
            className="group grid place-content-center w-20 h-20 bg-white rounded-full transition-all duration-all ease-in-out hover:bg-accent "
          >
            <Play className="fill-accent w-10 h-10 transition-all duration-all ease-in-out group-hover:fill-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
