import { pricingPlans } from "../../data";
import { Checkmark } from "../../data/icons";

const PricingPlans = () => {
  return (
    <section className="py-28 px-8 xl:px-0 bg-[#F8F8F8]">
      <div className="flex flex-col gap-10 max-w-[1200px] mx-auto">
        <div className="grid gap-8 md+:grid-cols-2 md+:justify-start md+:items-end">
          <div className="space-y-5">
            <strong className="relative text-sm text-[#707173] uppercase tracking-widest ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
              Pricing Plan
            </strong>
            <h2 className="font-extrabold text-4xl">
              Roofix Easy & Flexible Pricing Plans
            </h2>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ex
            enim illum dolore quam consectetur soluta. Illum rem, dolore quas
            impedit ducimus voluptates, molestias quaerat alias temporibus
            aperiam aspernatur!
          </p>
        </div>

        <section className="grid md+:grid-cols-auto-fit gap-8">
          {pricingPlans.map((plan) => (
            <PricingPlanCard key={plan.id} {...plan} />
          ))}
        </section>
      </div>
    </section>
  );
};

const PricingPlanCard = ({ title, price, img, features }) => {
  return (
    <div className="isolate bg-white pb-12 rounded-lg shadow-sm">
      <div className="relative">
        <img className="w-full rounded-t-lg" src={img} />
        <div className="flex flex-col items-center gap-2 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white">
          <h3 className="font-medium text-xl uppercase tracking-widest">
            {title}
          </h3>
          <span className="font-extrabold text-5xl">${price}</span>
          <p className="text-sm">Per Month</p>
        </div>
      </div>
      <div className="px-8">
        <ul className="flex flex-col gap-4 py-8">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Checkmark className="w-5 h-5 fill-accent" /> {feature}
            </li>
          ))}
        </ul>
        <button className="relative border-[1px] bg-white border-accent text-accent uppercase rounded w-full px-2 py-3 hover:text-white hover:bg-accent transition-all duration-500 ease-out after:absolute after:w-full after:h-full after:top-0 after:left-0 after:shadow-feature-icon after:opacity-0 after:hover:opacity-100 after:transition-all after:duration-500 after:ease-in-out">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default PricingPlans;
