import { getToKnowFeatures } from "../../data";
import yearsBg from "../../assets/home/get-to-know/years-bg2.png";
import getToKnowImg1 from "../../assets/home/get-to-know/banner-1.jpg";
import getToKnowImg2 from "../../assets/home/get-to-know/banner-2.jpg";
import getToKnowImg3 from "../../assets/home/get-to-know/banner-3.jpg";
import { Phone } from "../../data/icons";

const GetToKnow = () => {
  return (
    <section className="py-28 px-8 xl:px-0">
      <div className="max-w-[1200px] mx-auto grid xl:grid-cols-2 gap-12">
        <div className="md+:ps-4 md+:pe-12 flex flex-col gap-8">
          <div className="space-y-2">
            <strong className="relative text-sm uppercase tracking-widest text-[#707173] ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
              Get To Know
            </strong>
            <h2 className="font-extrabold text-4xl leading-tight max-w-2xl">
              We Provide the Best Roofing Services in Town
            </h2>
          </div>

          <p className="text-[#707173] max-w-2xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            velit rerum dolor, debitis commodi voluptatem voluptatibus eligendi
            voluptates corrupti? Placeat, hic corrupti. Provident assumenda nisi
            enim, nobis suscipit quo inventore.
          </p>

          <div className="flex flex-col gap-6">
            {getToKnowFeatures.map((feature) => (
              <GetToKnowFeatureCard key={feature.id} {...feature} />
            ))}
          </div>

          <div className="flex justify-between flex-col items-center gap-8 lg:gap-0 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-[54px] h-[54px] grid place-content-center rounded-full border border-[#3E3E3E]">
                <Phone className={`w-[26px] fill-black`} />
              </div>

              <div className="space-y-1">
                <p className="font-black text-sm uppercase">
                  Call for services
                </p>
                <p className="font-black text-3xl text-[#EC0101]">
                  123-555-667
                </p>
              </div>
            </div>

            <div className="md+:w-[40%] w-fit rounded bg-gradient-270 from-[#FA5F22] to-[#EC0101]">
              <div
                style={{ backgroundImage: `url('${yearsBg}')` }}
                className="bg-no-repeat bg-cover bg-center p-4"
              >
                <p className="flex items-center gap-2 text-white">
                  <span className="font-bold text-6xl">25</span>{" "}
                  <span className="text-xl leading-tight text-left">
                    Years of Experience
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:place-self-end place-self-center px-4">
          {/* images here */}
          <div className="sm:flex items-end gap-2">
            <div className="flex flex-col items-end gap-6 p-2">
              <img src={getToKnowImg1} />
              <img className="ps-9" src={getToKnowImg2} />
            </div>
            <div className="p-2">
              <img src={getToKnowImg3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const GetToKnowFeatureCard = ({ title, body, icon }) => {
  return (
    <div className="group flex gap-4 isolate flex-col sm:flex-row">
      <div className="flex-shrink-0 bg-[#ee212b1a] group-hover:bg-accent rounded-full w-[70px] h-[70px] p-2 grid place-content-center transition-all duration-500 ease-out relative before:absolute before:bg-white before:w-full before:h-full before:rounded-full before:-z-10 before:opacity-100">
        {icon}
      </div>
      <div className="space-y-4 max-w-2xl">
        <h3 className="font-semibold text-xl">{title}</h3>
        <p className="text-[#707173]">{body}</p>
      </div>
    </div>
  );
};

export default GetToKnow;
