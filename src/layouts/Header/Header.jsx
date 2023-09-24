import HeaderButton from "./HeaderButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Header = () => {
   return (
      <div>
         <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
               <Logo />
               <HeaderButton />
               <NavLinks />
            </div>
         </nav>
      </div>
   );
};

export default Header;
