import Logo from "../../assets/logos/neofi-logo.svg";
import {
  DrawerContent,
  NavigationContainer,
  ModalCloseButton,
} from "./index.styles";
import { ROUTE_PATHS } from "../../utils";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { SwipeableDrawer } from "@mui/material";
import CloseIcon from "../../assets/asset-close.png";
export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <NavigationContainer>
      <div className="wrapper">
        <img src={Logo} alt="NeoFi-logo" className="logo" />
        <nav className="nav-links desktop">
          <ul>
            <NavLink to={ROUTE_PATHS.root}>Trade</NavLink>
            <NavLink to={ROUTE_PATHS.earn}>Earn</NavLink>
            <NavLink to={ROUTE_PATHS.support}>Support</NavLink>
            <NavLink to={ROUTE_PATHS.about}>About</NavLink>
          </ul>
        </nav>
        <div className="mobile-menu">
          <i
            className="fa-solid fa-bars menu_icon"
            onClick={() => setOpen(true)}
          ></i>
        </div>
        <button className="connect-btn desktop">Connect Wallet</button>
        <SwipeableDrawer
          anchor={"right"}
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
        >
          <DrawerContent className="wrapper">
            <ModalCloseButton onClick={() => setOpen(false)}>
              <img src={CloseIcon} alt="close" />
            </ModalCloseButton>
            <nav className="nav-links mobile-nav-links">
              <ul>
                <NavLink to={ROUTE_PATHS.root}>Trade</NavLink>
                <NavLink to={ROUTE_PATHS.earn}>Earn</NavLink>
                <NavLink to={ROUTE_PATHS.support}>Support</NavLink>
                <NavLink to={ROUTE_PATHS.about}>About</NavLink>
              </ul>
            </nav>
            <button className="connect-btn mobile-connect-btn">
              Connect Wallet
            </button>
          </DrawerContent>
        </SwipeableDrawer>
      </div>
    </NavigationContainer>
  );
};
