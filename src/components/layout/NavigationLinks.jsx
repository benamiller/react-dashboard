import { HomeIcon, AnnotationIcon, ChartBarIcon } from "@heroicons/react/solid";
import { NavLink, useLocation } from "react-router-dom";
function NavigationLinks() {
  let currentLocation = useLocation();
  console.log(currentLocation.pathname);
  return (
    <nav className="flex justify-evenly ml-6 md:flex-col  md:m-auto">
      <NavLink to="/" aria-label="navigates to home dashboard">
        <HomeIcon
          className={`w-9 h-9 ${
            currentLocation.pathname === "/"
              ? "text-fuchsia-800"
              : "text-gray-500"
          } mx-6 sm:mx-12 md:w-8 md:h-8 md:my-5 md:mx-0 nav-link`}
          alt="home dashboard"
        />
      </NavLink>
      <NavLink to="/reviews" aria-label="navigates to reviews dashboard">
        <AnnotationIcon
          className={`w-9 h-9 ${
            currentLocation.pathname === "/reviews"
              ? "text-fuchsia-800"
              : "text-gray-500"
          } mx-6 sm:mx-12 md:w-8 md:h-8 md:my-5 md:mx-0 nav-link`}
        />
      </NavLink>
      <NavLink
        to="/sales"
        activeClassName="text-fuchsia-800"
        aria-label="navigates to sales dashboard"
      >
        <ChartBarIcon
          className={`w-9 h-9 ${
            currentLocation.pathname === "/sales"
              ? "text-fuchsia-800"
              : "text-gray-500"
          } mx-6 sm:mx-12 md:w-8 md:h-8 md:my-5 md:mx-0 nav-link`}
        />
      </NavLink>
    </nav>
  );
}

export default NavigationLinks;
