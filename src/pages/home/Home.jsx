
import React, { useState } from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import { options } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { Search } from "@material-ui/icons";

export default function Home() {
  const [ select, setSelect ] = useState("All")

 const handleChange = (e) => {
    setSelect(e.target.value);
  }

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="pay">
        <span>Payments</span>
      </div>
      <div className="homeSearch">
        <div>
           <span>showing <span>20 </span> out of 500 payments</span>
        </div>
        <div className="search">
          <div className="topSearch">
            <Search className="searchIcon" />
            <input type="text" placeholder="Search payments"/>
          </div>
          <div className="line"></div>
        </div>
        <div className="list">
           <span>show <span> 
             <select value={select} onChange={handleChange} className="select">
            {options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))}
          </select></span>
          </span>
        </div>
      </div>
      <div className="homeWidgets">
        <WidgetLg/>
      </div>
    </div>
  );
}
