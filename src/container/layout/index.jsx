import { Outlet } from "react-router-dom";
import Header from "../header";
import Search from "../search/Search";
import Footer from "../footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Search />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
