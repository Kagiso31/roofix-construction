import whatWeDoImg from "../../assets/about/about-11.jpg";

const WhatWeDo = () => {
  return (
    <section className="py-28">
      <div className="px-8 xl:px-0 mx-auto max-w-[1200px]">
        <div className="grid justify-items-center gap-12 md+:gap-0 md+:grid-cols-2">
          <div className="space-y-5 pr-12">
            <div className="space-y-2">
              <strong className="relative text-sm uppercase tracking-widest text-[#707173] ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
                What We Do
              </strong>
              <h2 className="font-extrabold text-4xl leading-tight max-w-2xl">
                The Best Services For The Best Clients
              </h2>
            </div>
            <div className="space-y-5 text-[#707173] max-w-2xl">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt velit rerum dolor, debitis commodi voluptatem
                voluptatibus eligendi voluptates corrupti? Placeat, hic
                corrupti. Provident assumenda nisi enim, nobis suscipit quo
                inventore.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt velit rerum dolor, debitis commodi voluptatem
                voluptatibus eligendi voluptates corrupti? Placeat, hic
                corrupti. Provident assumenda nisi enim, nobis suscipit quo
                inventore.
              </p>
            </div>
          </div>

          {/* image */}
          <div>
            <img src={whatWeDoImg} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
