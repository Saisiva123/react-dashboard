import React, { useState } from "react";
import "./Navbar.css";
import companyLogo from "../../assets/icons/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector, useDispatch } from "react-redux";
import { loggedOut } from "../../store/actions/user-action";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

function Navbar() {
  const headers = [
    "Overview",
    "Competitor Analysis",
    "Brand Registry",
    "Compliances",
  ];
  const stateSelector = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function logOut() {
    dispatch(loggedOut());
    handleClose();
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar px-10 flex items-center justify-between gap-36">
      <img src={companyLogo} alt="logo" />
      <div className="navItemSec flex items-center justify-between gap-12 text-sm font-semibold">
        {headers.map((item, index) => {
          return (
            <p className="tracking-widest cursor-pointer" key={index}>
              {item}
            </p>
          );
        })}
      </div>
      <div className="adminSec flex items-center justify-between gap-2 cursor-pointer">
        <Button
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <AccountCircleIcon />
          <p className="text-sm font-normal px-2">
            {stateSelector.userDetails.name}
          </p>
          <KeyboardArrowDownIcon />
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
