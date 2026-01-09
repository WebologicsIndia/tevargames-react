import "./forgotPassword.css";
import { useNavigate } from "react-router-dom";
import { Input, Checkbox } from "antd";
import {
    ArrowLeftOutlined,
    PhoneOutlined,
    LockOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
    SafetyOutlined,
} from "@ant-design/icons";

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        <div className="forgot-container">
            <div className="forgot-content">

                {/* NAVBAR */}
                <div className="forgot-navbar">
                    <ArrowLeftOutlined
                        className="forgot-back"
                        onClick={() => navigate(-1)}
                    />
                    <img src="/whitehjj.png" className="forgot-logo" />
                </div>

                {/* HEADER */}
                <div
                    className="forgot-header"
                    style={{ backgroundImage: "var(--main_gradient-color)" }}
                >
                    <h1 className="forgot-title">Forgot Password</h1>
                    <div className="forgot-subtitle">
                        Please retrieve/change your password through your mobile phone number or email
                    </div>
                </div>

                {/* TAB */}
                <div className="flex justify-center mb-[0.74667rem]">
                    <div className="forgot-tab">
                        <PhoneOutlined className="text-[0.64rem]" />
                        <span>phone reset</span>
                    </div>
                </div>

                {/* PHONE */}
                <label className="forgot-label forgot-label-primary">
                    <PhoneOutlined className="text-[0.64rem]" />
                    Phone number
                </label>

                <div className="forgot-phone-wrapper mb-[0.8rem]">
                    <div className="forgot-country">
                        <span>+91</span>
                        <span>▼</span>
                    </div>

                    <Input
                        placeholder="Please enter the phone number"
                        className="forgot-input forgot-phone-input"
                    />
                </div>

                {/* PASSWORD */}
                <label className="forgot-label">
                    <LockOutlined className="text-[0.64rem] text-(--main-color)" />
                    A new password
                </label>

                <Input
                    type="password"
                    placeholder="A new password"
                    iconRender={(v) => (v ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    className="forgot-input forgot-password-input mb-[0.53333rem]"
                />

                {/* CONFIRM PASSWORD */}
                <label className="forgot-label">
                    <LockOutlined className="text-[0.64rem] text-(--main-color)" />
                    Confirm new password
                </label>

                <Input
                    type="password"
                    placeholder="Confirm new password"
                    iconRender={(v) => (v ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    className="forgot-input forgot-password-input mb-[0.53333rem]"
                />

                {/* VERIFICATION CODE */}
                <label className="forgot-label forgot-label-primary">
                    <SafetyOutlined className="text-[0.64rem]" />
                    Verification Code
                </label>

                <div className="forgot-code-wrapper mb-[0.8rem]">
                    <Input
                        placeholder="Please enter the confirmation code"
                        className="forgot-code-input"
                    />
                    <button
                        className="forgot-send-btn"
                        onClick={() => console.log("Send code")}
                    >
                        Send
                    </button>
                </div>

                {/* TERMS */}
                <div className="mb-[0.76rem]">
                    <Checkbox className="forgot-terms">
            <span className="forgot-terms-text">
              I have read and agree{" "}
                <span
                    className="forgot-terms-link"
                    onClick={() => navigate("/privacy-policy")}
                >
                【Privacy Agreement】
              </span>
            </span>
                    </Checkbox>
                </div>

                {/* BUTTON */}
                <div className="flex flex-col items-center mt-[0.76rem]">
                    <button className="forgot-primary-btn">Reset</button>
                </div>

            </div>
        </div>
    );
};

export default ForgotPassword;
