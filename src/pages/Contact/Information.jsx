import { getInTouchCards } from "../../data";

const Information = () => {
  return (
    <div className=" py-[3.75rem] px-8 shadow-md space-y-5 rounded-md sm:p-[3.75rem]">
      <div className="space-y-5">
        <div className="space-y-2 ">
          <strong className="relative text-sm uppercase tracking-widest text-[#707173] ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
            Information
          </strong>
          <h2 className="font-extrabold text-4xl leading-tight">
            Get in Touch
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          repellendus ipsa totam quis deleniti nulla alias? Atque, accusantium
          et nesciunt molestiae iusto!
        </p>
      </div>
      <div className="space-y-[1.875rem]">
        {getInTouchCards.map((card) => (
          <div
            key={card.id}
            className="flex sm:items-center flex-col sm:flex-row gap-5 pb-[1.875rem] border-b border-b-[#e8e8e8]"
          >
            <div className="flex-shrink-0 bg-accent w-[60px] h-[60px] rounded-lg grid place-content-center">
              {card.icon}
            </div>
            <div>
              <h3 className="font-semibold text-xl">{card.title}</h3>
              <div className="text-[#707173]">
                <p>{card.body}</p>
                <p>{card.body2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
