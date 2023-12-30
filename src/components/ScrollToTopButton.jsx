import { useEffect, useState } from "react";
import { ChevronDoubleUp } from "../data/icons";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <button
          className="grid place-content-center fixed bottom-10 right-5 h-10 w-10 bg-[#111111cc] rounded-full z-10"
          onClick={scrollToTop}
        >
          <ChevronDoubleUp className="w-4 h-4 fill-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;
