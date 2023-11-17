import { useState } from "react";
import logo from '../../assets/img/logo2.png';
import {Button} from "reactstrap";
import control from '../../assets/img/control.png';
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "homeicon", path: "/userdashboard" },
    { title: "Contact", src: "contact2", path: "/contact" },
    { title: "Past Services", src: "past", path: '/pastservice' },
    { title: "Upcoming Appoinments ", src: "up", path: "/upcoming" },
    { title: "Wellness ", src: "well", path: "/" },
    { title: "Help", src: "help" },
  ];

  let navigate = useNavigate();

  // Clear the user object from localStorage
  const clearUserFromLocalStorage = () => {
    localStorage.removeItem('user');
  };

  const handleLogout = () => {
    // Call the function to clear user from localStorage
    clearUserFromLocalStorage();
    navigate("/home");
  };


  return (

    <div
      className={` ${open ? "w-72" : " w-32"
        } bg-backgroundColor h-screen p-5  pt-8 relative duration-300 shadow-md`}
    >
      <img
        src={control}
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-textYellowColor
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src={logo}
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"
            }`}
        />

      </div>
      <ul className=" pt-12 mt-5">

        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4
              ${Menu.gap ? "mt-7" : "mt-2"} ${"hover:bg-textYellowColor"
              } `}
          >

            <img src={`./src/assets/img/${Menu.src}.png`} className="w-7" />
            <Link to={Menu.path}>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          </li>

        ))}
      </ul>
      <div className="mt-11 flex flex-row justify-center">
        <Button
          className="mt-5 flex justify-center bg-amber-100 hover:bg-amber-200 text-black py-2 px-6 rounded-3xl focus:outline-none focus:ring-1 focus:ring-textDarkBrown"
          type='submit' onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>

  );
};
export default Sidebar;