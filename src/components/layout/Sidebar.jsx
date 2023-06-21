import { BiLogIn } from "react-icons/bi";
import { BsCardChecklist } from "react-icons/bs";
import { CgPlayListAdd } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { HiClipboardList } from "react-icons/hi";
import { VscTasklist } from "react-icons/vsc";
import { useSelector } from 'react-redux';
import { useLogout } from '../../lib/auth';
import SidebarLink from './SidebarLink';

function Sidebar() {
  const logout = useLogout();
  const user = useSelector((state) => state.user);

  return (
    <div className=" hidden h-screen min-w-max pr-5 w-3/4 flex-col border border-gray-100 bg-white sm:w-1/3 md:static md:flex lg:w-1/4">
      <h2 className="mt-8 self-center text-xl">VenomPrecision</h2>
      <ul className="mt-16">

        <SidebarLink text="MAIN PAGE" path="/" icon={<HiClipboardList/>}/>
        <SidebarLink text="MY RESERVATIONS" path="/reservations" icon={<VscTasklist/>}/>
        <SidebarLink text="ALL PRODUCTS" path="/products" icon={<BsCardChecklist/>}/>
        <SidebarLink text="ADD NEW PRODUCT" path="/products/new" icon={<CgPlayListAdd/>}/>

        {user.username === '' ? (
          // If NOT logged in ->
          <SidebarLink text="LOGIN" path="/login" icon={<BiLogIn/>} />
        ) : (
          // If logged in ->
          <div className="">
            
            <button
              type="button"
              className="ml-2 py-2 pl-3 font-bold text-slate-700 hover:cursor-pointer"
              onClick={logout}
            >
              <span className="inline-block mr-4 text-2xl align-middle"><CiLogout/></span>
              LOGOUT
            </button>
          </div>
        )}

      </ul>
    </div>
  );
}

export default Sidebar;
