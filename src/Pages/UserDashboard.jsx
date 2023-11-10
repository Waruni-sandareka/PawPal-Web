import { useState } from "react";
import logo from '../assets/img/logo2.png';
import Button from "../layouts/Button";
import control from '../assets/img/control.png';

const UserDashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "homeicon" },
    { title: "Contact", src: "contact2"},
    { title: "Past Services", src: "past" , gap:true },
    { title: "Upcoming Appoinments ", src: "up" },
    { title: "Wellness ", src: "well", gap: true},
    { title: "Help", src: "help"  },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
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
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          
        </div>
        <ul className=" pt-12 mt-5">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black text-sm items-center gap-x-4
              ${Menu.gap ? "mt-7" : "mt-2"} ${
                index === 0 && "hover:bg-textYellowColor"
              } `}
            >
              <img src={`./src/assets/img/${Menu.src}.png`} className="w-7" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
            
          ))}
        </ul>
        <div className="mt-11 flex flex-row justify-center">
        <Button title="Logout"/>
        </div>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-medium">Which service do you need?</h1>
      </div>
    </div>
  );
};
export default UserDashboard;