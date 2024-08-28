import React from "react";
import SidebarItem from "./SidebarItem";
//  icons
import { RiBuilding2Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPersonLinesFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlinePostAdd } from "react-icons/md";

// import img
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <nav className="sidebar">
      <Link to="/user">
        <img src={logo} alt="Logo site" />
      </Link>
      <p className="sidebar_menu">{t("menu")}</p>

      <ul className="sidebar_lists">
        <SidebarItem link="/user" Icon={RiBuilding2Line} text={t("Users")} />
        <SidebarItem
          link="./products"
          Icon={IoSettingsOutline}
          text={t("Products")}
        />
        <SidebarItem
          link="/clients"
          Icon={BsPersonLinesFill}
          text={t("Customers")}
        />
        <SidebarItem
          link="/couriers"
          Icon={TbTruckDelivery}
          text={t("Couriers")}
        />
        <SidebarItem
          link="/orders"
          Icon={MdOutlinePostAdd}
          text={t("Orders")}
        />
      </ul>
    </nav>
  );
}
