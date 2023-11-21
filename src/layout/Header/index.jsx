import { socialsList, icons } from "../../data";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="hidden md:block bg-black">
        <div className="font-sans text-sm text-white py-2 px-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex gap-10">
              <div className="flex items-center gap-2 relative | before:block before:absolute before:w-0.5 before:h-12 before:rotate-[20deg] before:-right-5 before:bg-[#323232]">
                {icons.map}
                <span>308 Negra Arroyo Lane, New Mexico</span>
              </div>

              <div className="flex items-center gap-2">
                {icons.mail}
                <a className="hover:underline" href="#">
                  info@roofix.com
                </a>
              </div>
            </div>
            <ul className="flex items-center gap-5">
              {socialsList.map((i) => (
                <li
                  className="group relative p-2 rounded-full cursor-pointer transition-all duration-500 ease-out hover:bg-white | before:block before:absolute before:w-0.5 before:h-12 before:rotate-[20deg] before:-top-1.5 before:-left-3 before:bg-[#323232]"
                  title={i.title}
                  key={i.id}
                >
                  <a href={i.link}>{i.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      <Navbar />
    </>
  );
};

export default Header;
