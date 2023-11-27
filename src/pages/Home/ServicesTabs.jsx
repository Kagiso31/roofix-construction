import { useRef, useState } from "react";
import { servicesTabsConfig } from "../../data";
import { Checkmark, ChevronDoubleRight } from "../../data/icons";

const ServicesTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleClick = (index) => setSelectedIndex(index);
  const tabRefs = useRef({});

  const setIndex = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      tab.focus();
    }
  };

  const onKeyDown = (event) => {
    const count = servicesTabsConfig.length;
    const nextTab = () => setIndex((selectedIndex + 1) % count);
    const prevTab = () => setIndex((selectedIndex - 1 + count) % count);
    const firstTab = () => setIndex(0);
    const lastTab = () => setIndex(count - 1);

    const keyMap = {
      ArrowRight: nextTab,
      ArrowLeft: prevTab,
      Home: firstTab,
      End: lastTab,
    };

    const action = keyMap[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  return (
    <div className="flex flex-col gap-8">
      <div
        role="tablist"
        className="flex justify-between items-center gap-6 overflow-x-auto"
      >
        {servicesTabsConfig.map((tab, index) => (
          <button
            className={`flex-1 min-w-[160px] rounded-md ${
              selectedIndex === index ? "bg-accent" : "bg-[#353535]"
            }`}
            key={tab.id}
            ref={(element) => (tabRefs.current[index] = element)}
            onKeyDown={onKeyDown}
            onFocus={() => setSelectedIndex(index)}
            tabIndex={selectedIndex === index ? 0 : -1}
            onClick={() => handleClick(index)}
            role="tab"
            aria-controls={`panel-id-${tab.id}`}
            aria-selected={tab.id === selectedIndex + 1}
            id={`tab-id-${tab.id}`}
          >
            <div className="flex flex-col items-center gap-2 font-bold text-center py-[30px] px-[10px]">
              {tab.icon}
              {tab.label}
            </div>
          </button>
        ))}
      </div>
      <div>
        {servicesTabsConfig.map((tab, index) => (
          <section
            className="bg-white text-black rounded shadow-sm transition-all duration-500 ease"
            key={tab.id}
            hidden={selectedIndex !== index}
            tabIndex={0}
            role="tabpanel"
            aria-labelledby={`tab-id-${tab.id}`}
            id={`panel-id-${tab.id}`}
          >
            <div className="grid md+:grid-cols-2">
              {/* text section */}
              <div className="isolate relative px-3  lg:px-[50px] py-[60px] flex flex-col gap-5">
                <div className="absolute bottom-0 right-[5%] -z-10">
                  {tab.bgImg}
                </div>
                <h3 className="font-extrabold text-3xl">{tab.title}</h3>
                <p className="text-[#707173]">{tab.body}</p>
                <ul className="flex flex-col gap-2">
                  {tab.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      {
                        <Checkmark
                          className={`w-[18px] h-[18px] bg-accent rounded-full fill-white`}
                        />
                      }
                      <p className="font-bold text-[#393738]">{feature}</p>
                    </li>
                  ))}
                </ul>
                <button className="group self-start flex items-center font-bold text-white uppercase px-4 py-3 rounded bg-accent transition-all duration-300 ease-out w-[176.578] hover:w-[190.578] hover:bg-[#d21c1d] ">
                  Premium Calculate
                  <ChevronDoubleRight
                    className={`group-hover:w-[14px] w-[0px] fill-white transition-all duration-300 ease-out`}
                  />
                </button>
              </div>

              {/* image section */}
              <div>
                <img className="rounded-r h-full w-full" src={tab.img} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServicesTabs;
