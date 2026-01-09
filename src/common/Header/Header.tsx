import "./header.css";
import { DownloadOutlined, MailOutlined } from "@ant-design/icons";

const Header = () => {
    return (
        <div className="app-header">

            {/* LEFT PLACEHOLDER */}
            <div className="header-left-space" />

            {/* CENTER LOGO */}
            <div className="header-logo-wrapper">
                <img
                    src="/whitehjj.png"
                    alt="Tevar Game"
                    className="header-logo"
                />
            </div>

            {/* RIGHT ICONS */}
            <div className="header-actions">

                {/* MAIL ICON */}
                <div className="header-icon header-icon-primary">
                    <MailOutlined className="header-icon-mail" />
                </div>

                {/* DOWNLOAD ICON */}
                <div className="header-icon">
                    <DownloadOutlined />
                </div>

            </div>
        </div>
    );
};

export default Header;
