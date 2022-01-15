import React, { useState } from "react";
import "./Navbar.css";
import companyLogo from "../../../assets/icons/logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useSelector, useDispatch } from "react-redux";
import { loggedOut } from "../../../store/actions/user-action";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import {NavLink, useHistory} from 'react-router-dom';
import { RoutePaths } from "../../../config/RouteConstants";

function Navbar(props) {
  const headers = [
   { name:"Overview",
     path:RoutePaths.overview.path
  },
  {
    name:"Competitor Analysis",
    path:RoutePaths.analysis.path
  },
  {
    name:"Brand Registry",
    path:'/registry'
  },
  {
    name:"Compliances",
    path:'/compliance'
  }
  ];
  const stateSelector = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const {getRoute} = props;
  
  function getCurrentRoute(path)
  {
    getRoute(path)
  }
  function logOut() {
    dispatch(loggedOut());
    handleClose();
    localStorage.clear()
    history.push('/')
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
      <div className="navItemSec flex items-center justify-between gap-12 text-sm font-medium">
        {headers.map((item, index) => {
          return (
            <NavLink to={{pathname:item.path,state:{breadcrumbItem:item.name}}} className="tracking-wider cursor-pointer" key={index} activeClassName="actNavItem" onClick={()=>getCurrentRoute(item.path)}>
              {item.name}
            </NavLink>
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
          <AccountCircleIcon className="accIcon" />
          <p className="text-sm font-normal px-2 user">
            {stateSelector.userDetails.name ||    localStorage.getItem('user')}
          </p>
          <KeyboardArrowDownIcon className="arrow"/>
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
