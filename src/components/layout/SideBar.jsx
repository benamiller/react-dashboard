import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

function SideBar() {
  return (
    <div className="flex justify-around px-3 w-screen fixed bottom-0  md:fixed md:top-0 md:w-auto md:flex-col  py-6 md:shadow-2xl">
      <Logo />
      <NavigationLinks />
      <button aria-label="Expand sidebar">
        <ArrowCircleRightIcon className=" hidden md:block md:w-12 md:h-12 md:text-gray-500 nav-link" />
      </button>
    </div>
  );
}

export default SideBar;
