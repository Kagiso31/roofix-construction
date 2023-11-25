import residentialImg from "../../assets/home/features/residential.png";
import { features, icons } from "../../data";

const Features = () => {
  return (
    <section className="py-16 md+:py-0">
      <div className="flex flex-col md+:flex-row gap-12 md+:gap-10 xl:max-w-[1200px] px-8 xl:px-0 mx-auto">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

const FeatureCard = ({ title, body, icon }) => {
  return (
    <article className="isolate relative group flex flex-col items-center gap-4 text-center pt-10 pb-6 px-10 rounded bg-white shadow-lg transition-all duration-500 ease-out md+:-translate-y-20 z-10 | before:absolute before:top-0 before:bg-accent before:h-1 before:w-1/5 before:hover:w-full before:transition-all before:duration-500 before:ease-out | after:absolute after:w-full after:h-0.5 after:bottom-20 after:bg-[#e8e8e8]">
      <div className="group-hover:bg-accent relative bg-[#efefef] rounded-full w-[90px] h-[90px] p-2 grid place-content-center transition-all duration-500 ease-out after:absolute after:rounded-full after:w-full after:h-full after:top-0 after:left-0 after:shadow-feature-icon t after:-z-10 after:scale-0 after:group-hover:scale-100 after:transition-all after:duration-300 after:ease-in-out">
        {icon}
      </div>
      <div className="mb-12 space-y-2">
        <h2 className="font-bold text-2xl">
          <a href="#">{title}</a>
        </h2>
        <p className="max-w-[42ch]">{body}</p>
      </div>
      <a href="#" className="flex items-center gap-2 font-semibold uppercase">
        Read More {icons.chevronRight}
      </a>
    </article>
  );
};

export default Features;
