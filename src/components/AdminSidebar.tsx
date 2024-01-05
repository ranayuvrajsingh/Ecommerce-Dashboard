/* eslint-disable @typescript-eslint/no-unused-vars */

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";
// import foxo from "../assets/svg/index";
const AdminSidebar = () => {
  const location = useLocation();
  const [show, setShow] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  const img =
    "data:image/jpeg;base64,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";
  const img1 =
    "https://i.pinimg.com/564x/96/6a/fe/966afe07d2435e0bd3284702eb42d25a.jpg";

  return (
    <>
      {phoneActive && (
        <button
          id="hamburger"
          onClick={() => {
            console.log("clicked");
            setShow(true);
          }}
        >
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: show ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>
          <img
            src={img1}
            alt="Img"
            width={`78px`}
            style={{ borderRadius: "50%" }}
          />
          Foxo
        </h2>
        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShow(false)}>
            Close
          </button>
        )}
        <DivOne location={location} />
        {/* {-------------------------------------- } */}
        <DivTwo location={location} />
        {/* {-------------------------------------------- } */}
        <DivThree
          location={location}
          phoneActive={phoneActive}
          setShow={setShow}
        />
      </aside>
    </>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/product"
        text="Products"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url="/admin/customers"
        text="Customers"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url="/admin/transaction"
        text="Transaction"
        Icon={AiFillFileText}
        location={location}
      />
    </ul>
  </div>
);
const DivTwo = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <Li
        url="/admin/chart/bar"
        text="Bar"
        Icon={FaChartBar}
        location={location}
      />
      <Li
        url="/admin/chart/pie"
        text="Pie"
        Icon={FaChartPie}
        location={location}
      />
      <Li
        url="/admin/chart/line"
        text="Line"
        Icon={FaChartLine}
        location={location}
      />
    </ul>
  </div>
);
const DivThree = ({
  location,
  phoneActive,
  setShow,
}: {
  location: Location;
  phoneActive: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <Li
        url="/admin/app/stopwatch"
        text="Stopwatch"
        Icon={FaStopwatch}
        location={location}
      />
      <Li
        url="/admin/app/coupon"
        text="$Coupon"
        Icon={RiCoupon3Fill}
        location={location}
      />
      <Li
        url="/admin/app/Toss"
        text="Toss"
        Icon={FaGamepad}
        location={location}
      />
    </ul>
  </div>
);

interface LinkProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LinkProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,225,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgba(0,115,225)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
