import HistoryTabs from "./HistoryTabs";

const History = () => {
  return (
    <section className="bg-about-history bg-[#F8F8F8] py-28">
      <div className="px-8 xl:p-0 mx-auto max-w-[1200px]">
        <div className="space-y-20">
          <div className="flex flex-col items-center">
            <div className="text-center max-w-[60ch] space-y-2">
              <div className="space-y-2 ">
                <strong className="relative text-sm uppercase tracking-widest text-[#707173] ps-8 before:absolute before:top-1/3 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
                  History
                </strong>
                <h2 className="font-extrabold text-4xl leading-tight">
                  Our Roofing History
                </h2>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
                voluptatum. Minus assumenda laborum commodi provident quia optio
                eligendi.
              </p>
            </div>
          </div>
          {/* Tabs */}
          <HistoryTabs />
        </div>
      </div>
    </section>
  );
};

export default History;
