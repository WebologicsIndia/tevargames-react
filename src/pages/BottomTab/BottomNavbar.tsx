import { useLocation, useNavigate } from "react-router-dom";
import "./bottomNavbar.css";
import {GiftOutlined, HomeOutlined, ThunderboltOutlined, UserOutlined, WalletOutlined} from "@ant-design/icons";

const BottomNavbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path ? "active" : "";

    return (
        <div className="tabbar__container">
            {/* Home */}
            <div
                className={`tabbar__container-item home_tab_btn ${isActive("/home")}`}
                onClick={() => navigate("/home")}
            >
                <HomeOutlined />
                <span>Home</span>
            </div>

            {/* Activity */}
            <div
                className={`tabbar__container-item activity_tab_btn ${isActive("/activity")}`}
                onClick={() => navigate("/activity")}
            >
                <ThunderboltOutlined />
                <span>Activity</span>
            </div>

            {/* Promotion (center) */}
            <div
                className="tabbar__container-item"
                onClick={() => navigate("/promotion")}
            >
                <GiftOutlined />
                <div className="promotionBg" />
                <span>Promotion</span>
            </div>

            {/* Wallet */}
            <div
                className={`tabbar__container-item wallet_tab_btn ${isActive("/wallet")}`}
                onClick={() => navigate("/wallet")}
            >
                {/*<svg className="svg-icon icon-wallet">*/}
                {/*    <use xlinkHref="#icon-wallet" />*/}
                {/*</svg>*/}
                <WalletOutlined />
                <span>Wallet</span>
            </div>

            {/* Account */}
            <div
                className={`tabbar__container-item account_tab_btn ${isActive("/account")}`}
                onClick={() => navigate("/account")}
            >
                {/*<svg className="svg-icon icon-main">*/}
                {/*    <use xlinkHref="#icon-main" />*/}
                {/*</svg>*/}
                <UserOutlined />
                <span>Account</span>
            </div>
        </div>
    );
};

export default BottomNavbar;
