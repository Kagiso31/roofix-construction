import { archives, categories, tags } from "../data";
import { Search } from "../data/icons";
import ad from "../assets/blog/ad.png";

const Sidebar = () => {
  return (
    <aside className=" flex-auto basis-1/3 pb-11 sm:min-w-[35ch] md+:pe-11 space-y-10">
      <form>
        <div className="flex items-center shadow-md bg-white rounded border border-[#e1e1e1]">
          <input
            type="search"
            placeholder="Search Keywords ..."
            className="w-full text-[#707173] py-2.5 px-5 border-none shadow-none rounded"
          />
          <button type="button" className="group px-5">
            <Search className="w-5 h-5 fill-[#b7b7b7] transition-all duration-300 ease-in-out group-hover:fill-accent" />
          </button>
        </div>
      </form>

      <div className="space-y-6">
        <h3 className="relative font-bold text-[1.375rem] ps-8 before:absolute before:-translate-y-1/2 before:top-1/2 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
          Categories
        </h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li
              key={category.id}
              className="pb-3 border-b border-b-[#b7b7b7] last-of-type:border-none"
            >
              <a
                href="#"
                className="text-[#707173] transition-all duration-300 ease-in-out hover:text-accent"
              >
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <img src={ad} />
      </div>

      <div className="space-y-6">
        <h3 className="relative font-bold text-[1.375rem] ps-8 before:absolute before:-translate-y-1/2 before:top-1/2 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
          Archives
        </h3>
        <ul className="space-y-3">
          {archives.map((archive) => (
            <li
              key={archive.id}
              className="pb-3 border-b border-b-[#b7b7b7] last-of-type:border-none"
            >
              <a
                href="#"
                className="text-[#707173] transition-all duration-300 ease-in-out hover:text-accent"
              >
                {archive.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        <h3 className="relative font-bold text-[1.375rem] ps-8 before:absolute before:-translate-y-1/2 before:top-1/2 before:left-0 before:h-[3px] before:w-6 before:bg-accent">
          Tags
        </h3>
        <ul>
          {tags.map((tag) => (
            <a
              key={tag.id}
              href="#"
              className="inline-block py-2 px-3.5 transition-all duration-300 ease-in-out bg-[#f8f8f8] text-[#707173] capitalize rounded mb-[3px] mr-[3px] hover:bg-accent hover:text-white"
            >
              {tag.title}
            </a>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
