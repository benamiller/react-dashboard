import Footer from "./Footer";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <SideBar />
      <div className="w-full">
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
