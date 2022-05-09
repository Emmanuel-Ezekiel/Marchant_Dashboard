import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Speed,
  AccountBalanceWallet,
  AccountBalanceWalletTwoTone,
  RadioButtonChecked,
  ReceiptOutlined
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">

        <div className="btn">
          <span>GENERATE INVOICE</span>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Main</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <Speed className="sidebarIcon" />
              Overview
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Payments</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <AccountBalanceWallet className="sidebarIcon" />
                All Payments
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <AccountBalanceWalletTwoTone className="sidebarIcon" />
                Reconcilled Payment
              </li>
            </Link>
            <li className="sidebarListItem">
              <AccountBalanceWallet className="sidebarIcon" />
              Un-reconcilled payment
            </li>
            <li className="sidebarListItem">
              <RadioButtonChecked className="sidebarIcon" />
              Manuel Settlement
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Order</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ReceiptOutlined className="sidebarIcon" />
              All Orders
            </li>
            <li className="sidebarListItem">
              <ReceiptOutlined className="sidebarIcon" />
              Pending Orders
            </li>
            <li className="sidebarListItem">
              <ReceiptOutlined className="sidebarIcon" />
              Reconcilled Orders
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              < PermIdentity className="sidebarIcon" />
              Merchant Profile
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
