import { useState } from "react";
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
    const [showPassword, setShowPassword] = useState(false);

    return (
        /* PHONE CONTAINER */
        <div className="w-[390px] min-h-screen bg-(--bg_color_L1) text-(--text_color_L1)">

            {/* SCROLLABLE CONTENT */}
            <div className="px-[0.53333rem] pt-[0.26667rem] pb-[1.6rem]">

                {/* NAVBAR */}
                <div className="h-[1.2rem] flex items-center">
                    <ArrowLeftOutlined
                        className="text-[0.6rem] cursor-pointer"
                        onClick={() => navigate(-1)}
                    />
                    <img
                        src="/whitehjj.png"
                        alt="Logo"
                        className="w-[3.98667rem] h-[3.12rem] object-contain mx-auto"
                    />
                </div>

                {/* HEADING */}
                <div className="min-h-[2.66667rem]">
                    <h1 className="text-[0.42667rem] font-bold pt-[0.26667rem] text-(--text_color_L2)">
                        Log in
                    </h1>

                    <div className="flex flex-col text-[0.29333rem] text-(--text_color_L2) mt-[0.29333rem] mb-[0.53333rem]">
                        <span>Please log in with your phone number or email</span>
                        <span>If you forget your password, please contact customer service</span>
                    </div>
                </div>

                {/* TAB */}
                <div className="flex justify-center mb-[0.74667rem]">
                    <div className="flex flex-col items-center gap-[0.26667rem] py-[0.18667rem] border-b-[0.05333rem] border-(--main-color) text-(--main-color) text-[0.4rem] font-bold">
                        <PhoneOutlined className="text-[0.64rem]" />

                        {/*<PhoneIcon color={"--main-color"}  />*/}

                        <span>Log in with phone</span>
                    </div>
                </div>

                {/* PHONE INPUT */}
                <div className="mb-[0.8rem]">
                    <label className="flex items-center gap-[0.16rem] mb-[0.32rem] text-[0.4rem] text-(--main-color)">
                        <PhoneOutlined className="text-[0.64rem]" />
                        {/*<PhoneIcon color={"FFD700"}/>*/}
                        Phone number
                    </label>

                    <div className="relative flex items-center gap-[0.24rem]">

                        {/* COUNTRY CODE */}
                        <div
                            className="
      absolute
      left-0
      z-10
      flex
      items-center
      justify-around
      min-w-[2.4rem]
      h-[1.17333rem]
      px-[0.26667rem]
      rounded-[0.26667rem]
      bg-[var(--bg_color_L1)]
      text-[0.37333rem]
      text-[var(--text_color_L2)]
    "
                        >
                            <span>+91</span>
                            <span>▼</span>
                        </div>

                        <Input
                            placeholder="Please enter the phone number"
                            className="
      w-full
      h-[1.17333rem]
      pl-[2.93333rem]
      pr-[0.34667rem]
      py-[0.36rem]
      text-[0.37333rem]
      rounded-[0.26667rem]
      bg-(--bg_color_L2)
      text-(--text_color_L1)
      placeholder:text-(--text_color_L3)
      border-none
    "
                        />

                    </div>
                </div>

                    {/* PASSWORD INPUT */}
                <div className="mb-[0.53333rem]">
                    <label className="flex items-center gap-[0.16rem] mb-[0.32rem] text-[0.4rem]">
                        <LockOutlined className="text-[0.64rem]" />
                        {/*<PasswordIcon color={"--main-color"}  />*/}
                        Password
                    </label>

                    <Input
                        type="password"
                        placeholder="Password"
                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        className="
    w-full
    h-[1.17333rem]
    px-[0.34667rem]
    py-[0.36rem]
    text-[0.37333rem]
    rounded-[0.26667rem]
    bg-(--bg_color_L2)
    text-(--text_color_L1)
    placeholder:text-(--text_color_L3)
    border-none
  "
                    />

                </div>

                {/* REMEMBER */}
                <div className="mb-[0.76rem]">
                    <Checkbox className="text-[0.32rem] text-(--van-checkbox-label-color)">
                        Remember password
                    </Checkbox>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col items-center mt-[0.76rem]">
                    <button
                        className="
              w-[7.73333rem]
              h-[1.06667rem]
              rounded-[1.06667rem]
              bg-(--main-color)
              text-(--text_color_L4)
              text-[0.48rem]
              fontWeight700
              tracking-[0.05333rem]
            "
                    >
                        Log in
                    </button>

                    <button
                        onClick={() => navigate("/register")}
                        className="
              w-[7.73333rem]
              h-[1.06667rem]
              mt-[0.53333rem]
              rounded-[1.06667rem]
              border-[0.01333rem]
              border-(--main-color)
              text-(--main-color)
              text-[0.48rem]
              font-bold
            "
                    >
                        Register
                    </button>
                </div>

                {/* FOOTER */}
                <div className="flex justify-center mt-[0.77333rem] text-[0.32rem] text-(--main-color)">
                    <div className="w-1/2 flex flex-col items-center">
                        <LockOutlined className="text-[1.06667rem]" />
                        <span className="mt-[0.21333rem]">Forgot password</span>
                    </div>

                    <div className="w-1/2 flex flex-col items-center">
                        <CustomerServiceOutlined className="text-[1.06667rem]" />
                        <span className="mt-[0.21333rem]">Customer Service</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;
