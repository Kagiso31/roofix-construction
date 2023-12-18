import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../../utilities/ScrollToTop";
import ScrollToTopButton from "../../components/ScrollToTopButton";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default RootLayout;
