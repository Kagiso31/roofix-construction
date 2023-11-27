import { whyChooseUsFeatures } from "../../data";
import WhyChooseUsImg from "../../assets/home/why-choose-us/why-choose-us.png";
import WhyChooseUsBg from "../../assets/home/why-choose-us/why-choose-us-bg.png";

const WhyChooseUs = () => {
  const firstTwo = whyChooseUsFeatures.slice(0, 2);
  const lastTwo = whyChooseUsFeatures.slice(2, whyChooseUsFeatures.length);
  return (
    <section className="py-28 px-8 xl:px-0">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-16">
        <div className="space-y-5 max-w-[64ch]">
          <div className="space-y-5">
            <strong className="relative text-sm uppercase tracking-widest ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
              Why Choose Us
            </strong>
            <h2 className="font-extrabold text-4xl">
              Modern Roofing Technology
            </h2>
          </div>
          <p className="text-[#707173]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quia rem ipsum ea iste perspiciatis, recusandae, inventore magni
            alias nam repellendus commodi minus dolore et.
          </p>
        </div>

        <div
          style={{ backgroundImage: `url('${WhyChooseUsBg}')` }}
          className="flex flex-col gap-8 bg-no-repeat bg-center bg-contain lg:bg-top lg:grid lg:grid-cols-4 lg:items-center"
        >
          <div className="col-span-1 self-start flex flex-col gap-12 justify-between">
            {firstTwo.map((feature) => (
              <WhyChooseUsCard key={feature.id} {...feature} />
            ))}
          </div>
          <div className="col-span-2 self-center">
            <img src={WhyChooseUsImg} />
          </div>
          <div className="col-span-1 self-start flex flex-col gap-12">
            {lastTwo.map((feature) => (
              <WhyChooseUsCard key={feature.id} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsCard = ({ title, body, icon }) => {
  return (
    <div className="group flex gap-4 flex-col sm:flex-row sm:text-left">
      <div className="flex-shrink-0">{icon}</div>
      <div className="space-y-4 max-w-2xl">
        <h3 className="font-semibold text-xl group-hover:text-accent transition-colors duration-300 ease">
          {title}
        </h3>
        <p className="text-[#707173]">{body}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
