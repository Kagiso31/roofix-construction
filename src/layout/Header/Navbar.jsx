import { navList, icons } from "../../data";
import logo from "../../assets/shared/logo/logo-light.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((isOpen) => !isOpen);

  const hamburgerMenuLine = `h-1 w-8 rounded-full bg-white transition ease transform duration-300`;

  useEffect(() => {
    const nav = document.querySelector("#nav");
    const scrollWatcher = document.querySelector("#scrollWatcher");
    const navStyles = [
      "bg-black",
      "shadow-md",
      "shadow-black",
      "sticky",
      "-top-px",
    ];

    const navObserver = new IntersectionObserver(
      (entries) => {
        navStyles.map((value) =>
          nav.classList.toggle(value, !entries[0].isIntersecting)
        );
      },
      { rootMargin: "80px 0px 0px 0px" }
    );

    navObserver.observe(scrollWatcher);
  }, []);

  return (
    <>
      <div id="scrollWatcher"></div>

      <div
        id="nav"
        className={`absolute z-10 w-full font-semibold text-white transition-all duration-300 ease-in-out `}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto py-5 sm:px-8 px-4">
          <div>
            <img
              className="max-w-[195px] aspect-[489/121] w-[150px] sm:w-auto"
              src={logo}
              alt="Roofix Construction logo"
            />
          </div>
          <nav className="flex-1">
            <ul
              role="list"
              className="hidden md+:flex md+:justify-center md+:gap-9"
            >
              {navList.map((i) => (
                <li
                  key={i.id}
                  className="uppercase transition-all duration-300 ease hover:text-accent"
                >
                  <Link to={i.link}>{i.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden md+:flex md+:items-center md+:gap-1 text-lg">
            {icons.phone}+980-222-444
          </div>

          {/* hamburger & mobile menu */}
          <div className="md+:hidden">
            <button
              className="flex flex-col gap-1 relative p-2 z-10"
              onClick={toggleMenu}
            >
              <div
                className={`${hamburgerMenuLine} ${
                  isOpen && "rotate-45 translate-y-2"
                }`}
              ></div>
              <div
                className={`${hamburgerMenuLine} ${isOpen && "opacity-0"}`}
              ></div>
              <div
                className={`${hamburgerMenuLine} ${
                  isOpen && "-rotate-45 -translate-y-2"
                }`}
              ></div>
            </button>
            <div
              className={`flex justify-center items-center h-screen w-full fixed top-0 ${
                isOpen ? "left-0" : "-left-full"
              } bg-slate-900 transition-all ease duration-300`}
            >
              <nav>
                <ul
                  role="list"
                  className="flex flex-col items-center justify-center gap-10 font-medium text-xl"
                >
                  {navList.map((navLink) => (
                    <li key={navLink.id}>
                      <Link onClick={toggleMenu} to={navLink.link}>
                        {navLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
