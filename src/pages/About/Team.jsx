import { teamMembers } from "../../data";
import { Share } from "../../data/icons";

const Team = () => {
  return (
    <section className="py-28">
      <div className="px-8 xl:p-0 mx-auto max-w-[1200px]">
        <div className="space-y-20">
          <div className="flex flex-col items-center">
            <div className="text-center max-w-[60ch] space-y-2">
              <div className="space-y-2 ">
                <strong className="relative text-sm uppercase tracking-widest text-[#707173] ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
                  Our Talented Team
                </strong>
                <h2 className="font-extrabold text-4xl leading-tight">
                  The Roofing Experts
                </h2>
              </div>
            </div>
          </div>

          {/* Team Cards */}
          <section>
            <div className="grid sm:grid-cols-auto-fit-team-cards gap-8">
              {teamMembers.map((member) => (
                <TeamCard key={member.id} {...member} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

const CardPattern = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="fill-accent absolute bottom-24 hidden sm:block"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 377 114"
  >
    <path
      d="M0.000,90.000 L10.000,93.000 L21.000,96.000 L29.000,98.000 L49.000,101.000 L70.000,102.000 L114.000,100.000 L139.000,96.000 L169.000,89.000 L219.000,68.000 L258.000,47.000 L293.000,29.000 L320.000,16.000 L353.000,6.000 L364.000,3.000 L371.000,1.000 L377.000,0.000 L377.000,113.000 L0.000,114.000 L0.000,90.000 Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

const TeamCard = ({ name, role, img, href, socials }) => {
  const transitionDelays = [
    "delay-[0.6s]",
    "delay-[0.5s]",
    "delay-[0.4s]",
    "delay-[0.3s]",
    "delay-[0.2s]",
    "delay-[0.1s]",
    "delay-[0s]",
  ];
  return (
    <div className="group/img aspect-[350/480] relative rounded-md text-white overflow-hidden">
      <img
        className="w-full h-full group-hover/img:scale-110 transition-all ease-in-out duration-700"
        src={img}
      />

      {CardPattern}

      <div className="absolute bottom-0 left-0 right-0">
        <div className="my-0 flex flex-col p-6 bg-accent">
          <div className="text-2xl font-extrabold">
            <a href={href} className="block  max-w-[8ch] sm:max-w-none">
              {name}
            </a>
          </div>
          <div className="text-[0.9375rem]">{role}</div>
        </div>
      </div>

      <div className="group/share absolute bottom-8 right-4 w-[52px] h-[52px] rounded-full bg-white grid place-content-center transition-all duration-500 ease-in-out cursor-pointer">
        {/* share */}
        <div>
          <Share className="w-[22px] h-[22px] transition-all duration-500 ease-in-out group-hover/share:rotate-90 group-hover/share:fill-accent" />
        </div>

        {/* socials */}
        <div className="absolute bottom-[62px] grid gap-2.5">
          {socials.map((social, index) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              className={`group w-[52px] h-[52px] rounded-full bg-white grid place-content-center opacity-0 group-hover/share:opacity-100 transition-all duration-300 delay ${
                transitionDelays[index + 1]
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
