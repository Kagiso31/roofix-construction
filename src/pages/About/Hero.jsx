import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="relative text-white h-[20.375rem] bg-about-hero bg-no-repeat bg-cover before:absolute before:inset-0 before:bg-black before:opacity-60">
        <div className="relative h-full max-w-[1200px] px-8 xl:px-0 mx-auto">
          <div className=" flex flex-col justify-center gap-2 font-semibold text-center h-full sm:text-left">
            <h1 className="font-extrabold sm:text-[2.625rem] sm:pt-0 pt-6 text-4xl leading-tight">
              About Our History
            </h1>
            <nav>
              <div className="space-x-2">
                <NavLink
                  className="transition-all duration-500 ease-in-out hover:text-accent"
                  to="/roofix-construction"
                >
                  Roofix Construction Home
                </NavLink>
                <span>—</span>
                <NavLink>About</NavLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
