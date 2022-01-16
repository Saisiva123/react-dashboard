import React, { useEffect, useState } from "react";
import "./Breadcrumb.css";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function Breadcrumb() {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  useEffect(() => {
    let allpaths = location.pathname.split("/");
    console.log(location);
    setBreadcrumbs(allpaths.slice(1, allpaths.length));
  }, [location]);

  return (
    <div role="presentation" className="breadcrumb py-3 px-3 ">
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((item, index) => {
          return (
            <Link
            key={index}
              className={`text-sm font-normal no-underline capitalize ${
                index == breadcrumbs.length - 1 ? "highlight" : ""
              }`}
              underline="hover"
              color="inherit"
            >
              {item}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
