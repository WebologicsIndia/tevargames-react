import "./register.css";
import { useNavigate } from "react-router-dom";
import { Input, Checkbox } from "antd";
import {
    ArrowLeftOutlined,
    PhoneOutlined,
    LockOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
    MailOutlined,
} from "@ant-design/icons";

const Register = () => {
    const navigate = useNavigate();

    return (
        <div className="register-container">
            <div className="register-content">

                {/* NAVBAR */}
                <div className="register-navbar">
                    <ArrowLeftOutlined
                        className="register-back"
                        onClick={() => navigate(-1)}
                    />
                    <img src="/whitehjj.png" className="register-logo" />
                </div>

                {/* HEADING */}
                <h1 className="register-title">Register</h1>
                <div className="register-subtitle">
                    Please register by phone number or email
                </div>

                {/* TAB */}
                <div className="flex justify-center mb-[0.74667rem]">
                    <div className="register-tab">
                        <PhoneOutlined className="text-[0.64rem]" />
                        <span>Register your phone</span>
                    </div>
                </div>

                {/* PHONE */}
                <label className="register-label register-label-primary">
                    <PhoneOutlined className="text-[0.64rem]" />
                    Phone number
                </label>

                <div className="register-phone-wrapper mb-[0.8rem]">
                    <div className="register-country">
                        <span>+91</span>
                        <span>▼</span>
                    </div>

                    <Input
                        placeholder="Please enter the phone number"
                        className="register-input register-phone-input"
                    />
                </div>

                {/* PASSWORD */}
                <label className="register-label">
                    <LockOutlined className="text-[0.64rem] text-(--main-color)" />
                    Set password
                </label>

                <Input
                    type="password"
                    placeholder="Set password"
                    iconRender={(v) => (v ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    className="register-input register-password-input mb-[0.53333rem]"
                />

                {/* CONFIRM PASSWORD */}
                <label className="register-label">
                    <LockOutlined className="text-[0.64rem] text-(--main-color)" />
                    Confirm password
                </label>

                <Input
                    type="password"
                    placeholder="Confirm password"
                    iconRender={(v) => (v ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    className="register-input register-password-input mb-[0.53333rem]"
                />

                {/* INVITE */}
                <label className="register-label">
                    <MailOutlined className="text-[0.64rem] text-(--main-color)" />
                    Invite code
                </label>

                <Input
                    placeholder="Please enter the invitation code"
                    className="register-input mb-[0.8rem]"
                />

                {/* TERMS */}
                <div className="mb-[0.76rem]">
                    <Checkbox className="register-terms">
            <span className="register-terms-text">
              I have read and agree{" "}
                <span
                    className="register-terms-link"
                    onClick={() => navigate("/privacy-policy")}
                >
                【Privacy Agreement】
              </span>
            </span>
                    </Checkbox>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col items-center mt-[0.76rem]">
                    <button className="register-primary-btn">Register</button>

                    <button
                        onClick={() => navigate("/login")}
                        className="register-secondary-btn"
                    >
                        <span className="register-secondary-text">I have an account</span>
                        <span className="register-secondary-link">Login</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Register;
