import { socialsList, footerLinks, workingHours } from "../../data";
import { ChevronRight, Phone } from "../../data/icons";
import logo from "../../assets/shared/logo/logo-light.png";

const Footer = () => {
  const firstThreeLinks = footerLinks.slice(0, 3);
  const lastThreeLinks = footerLinks.slice(3, footerLinks.length);
  return (
    <footer className="bg-black  text-white">
      <div className="max-w-[540px] md+:max-w-[1200px] mx-auto px-8 xl:px-0 ">
        {/* top */}
        <div className="flex flex-col border-b-2 border-[#252525] py-16 gap-8 md+:flex-row md+:items-center md+:justify-between md+:gap-0">
          <div>
            <img className="w-48 aspect-[489 / 121]" src={logo} />
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="grid place-content-center w-12 h-12 rounded-full bg-accent">
              <Phone className={`w-4 h-4 fill-white`} />
            </div>
            <div className="space-y-1">
              <p className="text-lg">Need Any Roofing Help?</p>
              <p className="font-bold text-2xl">Call Us: +123-559-990</p>
            </div>
          </div>
          <div>
            <ul className="flex items-center gap-1 flex-wrap">
              {socialsList.map((social) => (
                <li title={social.title} key={social.id}>
                  <a
                    href={social.link}
                    className="bg-[#2e2f31] rounded group transition-all duration-500 ease-in-out hover:bg-white w-12 h-12 grid place-content-center"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* middle */}
        <div className="py-28 md+:flex items-start justify-between grid md+:gap-0 gap-12">
          <div className="flex flex-col gap-6">
            <h3 className="relative font-extrabold text-2xl pb-5 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-12 before:bg-accent">
              Our Services
            </h3>
            <ul className="grid items-center lg:grid-cols-2 gap-x-4 gap-y-4">
              {firstThreeLinks.map((footerLink) => (
                <li className="group text-[#a5a5a5]" key={footerLink.id}>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="font-medium w-4 h-4 fill-[#a5a5a5] group-hover:fill-accent" />
                    <a
                      href={footerLink.link}
                      className="transition-all duration-700 ease-in-out hover:text-white hover:translate-x-1"
                    >
                      {footerLink.title}
                    </a>
                  </div>
                </li>
              ))}
              {lastThreeLinks.map((footerLink) => (
                <li className="group text-[#a5a5a5]" key={footerLink.id}>
                  <div className="flex items-center gap-2">
                    <ChevronRight className="font-medium w-4 h-4 fill-[#a5a5a5] group-hover:fill-accent" />
                    <a
                      href={footerLink.link}
                      className="transition-all duration-700 ease-in-out hover:text-white hover:translate-x-1"
                    >
                      {footerLink.title}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="relative font-extrabold text-2xl pb-5 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-12 before:bg-accent">
              Newsletter
            </h3>
            <p className="text-[#d5d2d2]">
              Subscribe For Daily Latest News & Updates
            </p>
            <form className="space-y-2">
              <label className="visually-hidden" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                autoComplete="true"
                required
                className="text-white py-[0.625rem] px-[1.875rem] w-full bg-[#252525] rounded border-[transparent]"
              />
              <button className="px-[0.625rem] py-[0.75rem] bg-accent rounded transition-all duration-300 ease-in-out w-full hover:bg-[#d21c1d]">
                Subscribe Now
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="relative font-extrabold text-2xl pb-5 before:absolute before:bottom-0 before:left-0 before:h-1 before:w-12 before:bg-accent">
              Working Hours
            </h3>
            <ul className="flex flex-col gap-3">
              {workingHours.map((i) => (
                <li key={i.id}>
                  <p>
                    <span className="font-semibold text-[#d5d2d2]">
                      {i.day}:{" "}
                    </span>
                    <span className="text-[#a5a5a5]">{i.timePeriod}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* bottom */}
        <div className="flex justify-center">
          <p className="text-[#777777] text-center">
            &copy; Copyright Roofix 2023. All Rights Reserved. Designed by
            <a
              href="https://www.radiustheme.com/"
              className="transition-all duration-500 ease-in-out text-white hover:text-accent"
            >
              {" "}
              RadiusTheme
            </a>
            . Developed by{" "}
            <a
              title="Kagiso Mokou"
              href="https://www.github.com/Kagiso31"
              className="transition-all duration-500 ease-in-out text-white hover:text-accent"
            >
              @Kagiso31
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
