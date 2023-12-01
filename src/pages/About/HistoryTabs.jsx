import { useRef, useState } from "react";
import { historyTabsConfig } from "../../data";
import { Checkmark } from "../../data/icons";

const HistoryTabs = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tabRefs = useRef({});

  return (
    <div className="flex flex-col gap-8">
      <ul
        role="tablist"
        className="relative flex justify-around items-center bg-about-timeline bg-repeat-x bg-bottom before:absolute before:top-[40%] before:left-0 before:w-0 before:h-0 before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent before:border-r-[10px] before:border-r-[#393738] after:absolute after:top-[40%] after:right-0 after:w-0 after:h-0 after:border-t-8 after:border-t-transparent after:border-b-8 after:border-b-transparent after:border-l-[10px] after:border-l-[#393738]"
      >
        {historyTabsConfig.map((tab, index) => (
          <li key={tab.id} className="group mb-6">
            <HistoryTab
              tab={tab}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
              tabRefs={tabRefs}
            />
          </li>
        ))}
      </ul>
      <div>
        {historyTabsConfig.map((tab, index) => (
          <HistoryTabPanel
            key={tab.id}
            tab={tab}
            index={index}
            selectedIndex={selectedIndex}
          />
        ))}
      </div>
    </div>
  );
};

const HistoryTab = ({
  tab,
  index,
  selectedIndex,
  setSelectedIndex,
  tabRefs,
}) => {
  const handleClick = (index) => setSelectedIndex(index);

  const setIndex = (index) => {
    const tab = tabRefs.current[index];
    if (tab) {
      tab.focus();
    }
  };

  const onKeyDown = (event) => {
    const count = historyTabsConfig.length;
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
    <button
      className={`relative text-center pb-6 before:absolute  before:left-0 before:right-0 before:bottom-0 before:mx-auto before:border-2  before:bg-white before:w-5 before:h-5 before:rounded-full before:transition-all before:duration-500 before:ease-in-out before:group-hover:border-accent | after:absolute  after:left-0 after:right-0 after:bottom-[5px] after:mx-auto after:w-[10px] after:h-[10px] after:rounded-full after:transition-all after:duration-500 after:ease-in-out after:group-hover:bg-accent ${
        selectedIndex === index
          ? "before:border-accent after:bg-accent"
          : "before:border-[#b7b7b7] after:bg-[#797979]"
      }`}
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
      <span className="block font-bold">{tab.label}</span>
    </button>
  );
};

const HistoryTabPanel = ({ tab, index, selectedIndex }) => {
  return (
    <section
      className="bg-white text-black rounded-[10px] shadow-sm transition-all duration-500 ease"
      key={tab.id}
      hidden={selectedIndex !== index}
      tabIndex={0}
      role="tabpanel"
      aria-labelledby={`tab-id-${tab.id}`}
      id={`panel-id-${tab.id}`}
    >
      <div className="grid md+:grid-cols-2">
        {/* image section */}
        <div>
          <img className="rounded-l-[10px] h-full w-full" src={tab.img} />
        </div>

        {/* text section */}
        <div className="isolate relative px-3  lg:px-[50px] py-[60px] flex flex-col gap-5">
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
                <p className="font-bold text-[#707173]">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HistoryTabs;
