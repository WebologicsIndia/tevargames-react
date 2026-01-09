import "./login.css";
import { useNavigate } from "react-router-dom";
import { Input, Checkbox } from "antd";
import {
    ArrowLeftOutlined,
    PhoneOutlined,
    LockOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
    CustomerServiceOutlined,
} from "@ant-design/icons";

const Login = () => {
    const navigate = useNavigate();

    return (
        <div className="login-container">
            <div className="login-content">

                {/* NAVBAR */}
                <div className="login-navbar">
                    <ArrowLeftOutlined
                        className="login-back"
                        onClick={() => navigate(-1)}
                    />
                    <img src="/whitehjj.png" alt="Logo" className="login-logo" />
                </div>

                {/* HEADING */}
                <h1 className="login-title">Log in</h1>
                <div className="login-subtitle">
                    <span>Please log in with your phone number or email</span>
                    <span>If you forget your password, please contact customer service</span>
                </div>

                {/* TAB */}
                <div className="flex justify-center mb-[0.74667rem]">
                    <div className="login-tab">
                        <PhoneOutlined className="text-[0.64rem]" />
                        <span>Log in with phone</span>
                    </div>
                </div>

                {/* PHONE INPUT */}
                <label className="login-label login-label-primary">
                    <PhoneOutlined className="text-[0.64rem]" />
                    Phone number
                </label>

                <div className="login-phone-wrapper mb-[0.8rem]">
                    <div className="login-country-code">
                        <span>+91</span>
                        <span>▼</span>
                    </div>

                    <Input
                        placeholder="Please enter the phone number"
                        className="login-input login-phone-input"
                    />
                </div>

                {/* PASSWORD */}
                <label className="login-label">
                    <LockOutlined className="text-[0.64rem]" />
                    Password
                </label>

                <Input
                    type="password"
                    placeholder="Password"
                    iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                    className="login-input mb-[0.53333rem]"
                />

                {/* REMEMBER */}
                <Checkbox className="login-remember">Remember password</Checkbox>

                {/* BUTTONS */}
                <div className="flex flex-col items-center mt-[0.76rem]">
                    <button className="login-primary-btn">Log in</button>
                    <button
                        onClick={() => navigate("/register")}
                        className="login-secondary-btn"
                    >
                        Register
                    </button>
                </div>

                {/* FOOTER */}
                <div className="login-footer">
                    <div
                        className="login-footer-item"
                        onClick={() => navigate("/forgot_reset")}
                    >
                        <LockOutlined className="text-[1.06667rem]" />
                        <span className="mt-[0.21333rem]">Forgot password</span>
                    </div>

                    <div className="login-footer-item">
                        <CustomerServiceOutlined className="text-[1.06667rem]" />
                        <span className="mt-[0.21333rem]">Customer Service</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
