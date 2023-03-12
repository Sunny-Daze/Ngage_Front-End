import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Divider from "@mui/material/Divider";
import Logout from "@mui/icons-material/Logout";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SideBarMenu";
import Avatar from "@mui/material/Avatar";
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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

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
        path: "/training/learning-management",
        name: "Learning Management ",
        icon: <AiOutlineStar />,
      },
      {
        path: "/training/professional-growth",
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
        path: "/user-control",
        name: "User ",
        icon: <AiOutlineStar />,
      },
      {
        path: "/admin-control",
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

function getuserDetails(type) {
  let userDetails = JSON.parse(localStorage.getItem("user") ?? "");
  switch (type) {
    case "role":
      return userDetails.role;

    case "name":
      return userDetails.userName;

    case "avatar":
      return userDetails.userName[0].toUpperCase();

    default:
      break;
  }
}

function getUserRoutes() {
  let role = getuserDetails("role");

  if (role === "Employee") {
    return [routes[0], routes[1], routes[2], routes[4]];
  }

  if (role === "Customer") {
    return [routes[0], routes[1]];
  }

  if (role === "Admin") {
    return routes;
  }

  if (role === "SuperAdmin") {
    return routes;
  }
}

const HomePage = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showProfileCard, setShowProfileCard] = useState(true);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
    setShowProfileCard(!showProfileCard);
  };

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
  const navigate = useNavigate();

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
            {getUserRoutes().map((route, index) => {
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
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        <Typography
                          variant="body1"
                          style={{ fontWeight: "bold", color: "darkslategray" }}
                        >
                          {route.name}
                        </Typography>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>

          {showProfileCard && (
            <div className="profileCard">
              <div className="avatar">
                <Avatar style={{ width: "2.3rem", height: "2.3rem" }}>
                  {getuserDetails("avatar")}
                </Avatar>
              </div>
              <div className="info">
                <div className="logged-in-username">
                  <Typography
                    style={{
                      color: "white",
                      fontWeight: "540",
                      fontSize: "0.9rem",
                    }}
                    variant="body2"
                  >
                    {getuserDetails("name")}
                  </Typography>
                </div>
                <div className="roleParent">
                  <div className="role">
                    <Typography
                      style={{
                        color: "#001f54",
                        fontWeight: "700",
                        fontSize: "0.7rem",
                      }}
                      variant="body2"
                    >
                      {getuserDetails("role")}
                    </Typography>
                  </div>
                  {/* <Chip label="primary" color="primary" /> */}
                </div>
              </div>
              <div className="notification">
                <Badge
                  // style={{ color: "white", fontSize:'1px' }}
                  badgeContent={1}
                  // color="error"
                  sx={{
                    "& .MuiBadge-badge": {
                      background: "red",
                      color: "white",
                      fontSize: 12,
                      height: 18,
                      minWidth: 10,
                    },
                  }}
                >
                  <MailIcon style={{ fontSize: "1.4rem", color: "white" }} />
                </Badge>
              </div>
              <div className="settings">
                <SettingsIcon
                  style={{ fontSize: "1.4rem" }}
                  id="basic-menu"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Avatar sx={{ width: 32, height: 32, marginRight: 1 }} />
                    </ListItemIcon>
                    My Account
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={() => {
                      localStorage.clear();
                      navigate("/");
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          )}
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default HomePage;
