import React, { useState } from "react";
import "./kpis.css";
import { useHistory } from "react-router-dom";

function Kpis() {
  const kpisData = [
    {
      name: "Product Availability",
      percent: "30%",
      tooltip: "no data",
      desc: "First results page",
    },
    {
      name: "Price Change",
      percent: "30%",
      tooltip: "no data",
      desc: "First results page",
    },
    {
      name: "Seller Analysis",
      percent: "30%",
      tooltip: "no data",
      desc: "First results page",
    },
    {
      name: "Content Compliance",
      percent: "30%",
      tooltip: "no data",
      desc: "First results page",
    },
    {
      name: "Share of Search",
      percent: "30%",
      tooltip: "no data",
      desc: "First results page",
    },
    {
      name: "Product Reviews",
      percent: "30%",
      tooltip: "no data",
      desc: "First results page",
    },
  ];
  const history = useHistory();

  var [kpisList, setkpi] = useState(kpisData);

  function selectedKpi(item,index) {
    kpisList.map((item) => {
      item.active = false;
    });
    kpisList[index].active = true;
    setkpi([...kpisList]);
    history.push({pathname:`/dashboard/overview/${item.name}`,state:{breadcrumbItem:item.name}})
  }

  return (
    <div className="flex items-center justify-around kpis">
      {console.log(kpisList)}
      {kpisList.map((item, index) => {
        return (
          <div
            className={`kpi ${
              item.active ? "activekpi" : ""
            } py-2 cursor-pointer`}
            key={index}
            onClick={() => selectedKpi(item,index)}
          >
            <p className="text-xs px-2 font-semibold mb-1">{item.name}</p>
            <p className="text-tiny px-2 font-light">{item.desc}</p>
            <span className="flex px-2 items-center justify-start gap-2 mt-4">
              <p className="text-xs font-bold">{item.percent}</p>
              <sup className="text-tiny font-normal noData">{item.tooltip}</sup>
            </span>
            <p className="btmTxt text-tiny font-normal">
              Data is not available
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Kpis;
