import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import { FaRegCompass } from "react-icons/fa";
import { MdOutlineAccountTree } from "react-icons/md";
import { BsLightningChargeFill, BsPlay } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";

const routes = [
  {
    path: "/community",
    name: "Community",
    icon: <FaRegCompass />,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: <MdOutlineAccountTree />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Form Automation ",
        icon: <AiOutlineStar />,
      },
      {
        path: "/settings/2fa",
        name: "Ngage UI Library",
        icon: <AiOutlineStar />,
      },
    ],
  },
  {
    path: "/training",
    name: "Training",
    icon: <BsLightningChargeFill />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Learning Management ",
        icon: <AiOutlineStar />,
      },
      {
        path: "/settings/2fa",
        name: "Professional Growth",
        icon: <AiOutlineStar />,
      },
    ],
  },
  {
    path: "/recreation",
    name: "Recreation",
    icon: <BsPlay />,
  },
  {
    path: "/management",
    name: "Management",
    icon: <FiUsers />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "User ",
        icon: <AiOutlineStar />,
      },
      {
        path: "/settings/2fa",
        name: "Admin Control",
        icon: <AiOutlineStar />,
      },
    ],
  },
  {
    path: "/store",
    name: "Store",
    icon: <HiShoppingCart />,
  },
];

const HomePage = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
  //     transition: {
  //       duration: 0.2,
  //     },
  //   },
  // };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "250px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                  style={{ display: "flex" }}
                >
                  <AdbIcon
                    style={{ fontSize: "30px" }}
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                  />
                  <Typography
                    variant="h6"
                    noWrap
                    component="NavLink"
                    to="/community"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontFamily: "monospace",
                      fontWeight: 700,
                      letterSpacing: ".3rem",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    NGAGE
                  </Typography>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon" className="routeIcon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>

          <div className="profileCard">
            <div className="avatar">
              <Avatar>N</Avatar>
            </div>
            <div className="info">
              <div className="name">Sunny</div>
              <div className="roleParent">
                <div className="role">admin</div>
                {/* <Chip label="primary" color="primary" /> */}
              </div>
            </div>
            <div className="notification">
              <Badge style={{"color":'white'}} badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
            </div>
            <div className="settings">
              <SettingsIcon />
            </div>
          </div>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default HomePage;
