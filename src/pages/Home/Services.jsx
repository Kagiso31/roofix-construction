import Tabs from "./ServicesTabs";

const Services = () => {
  return (
    <section className="text-white bg-[#242424] bg-services bg-[bottom_center] bg-no-repeat py-28 px-8 xl:px-0">
      <div className="flex flex-col gap-10 max-w-[1200px] mx-auto">
        <div className="grid place-items-end gap-8 md+:grid-cols-2">
          <div className="space-y-5">
            <strong className="relative text-sm uppercase tracking-widest text-white ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
              Our Roofing Services
            </strong>
            <h2 className="font-extrabold text-4xl">
              We’re Providing Quality Roofing Services
            </h2>
          </div>
          <p className="text-[#CACACA]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ex
            enim illum dolore quam consectetur soluta. Illum rem, dolore quas
            impedit ducimus voluptates, molestias quaerat alias temporibus
            aperiam aspernatur, illo ratione at omnis!
          </p>
        </div>

        {/* Tabs */}
        <Tabs />
      </div>
    </section>
  );
};

export default Services;
