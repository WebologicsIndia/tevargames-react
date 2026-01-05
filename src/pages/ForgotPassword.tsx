import { useNavigate } from "react-router-dom";
import { Input, Checkbox } from "antd";
import {
    ArrowLeftOutlined,
    PhoneOutlined,
    LockOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
    SafetyOutlined
} from "@ant-design/icons";

const ForgotPassword = () => {
    const navigate = useNavigate();

    return (
        /* PHONE CONTAINER */
        <div className="w-[390px] min-h-screen bg-(--bg_color_L1) text-(--text_color_L1)">

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
                <div
                    style={{ backgroundImage: "var(--main_gradient-color)" }}
                    className="min-h-[1.86667rem] -mx-[0.53333rem] px-[0.53333rem]"
                >
                    <h1 className="text-[0.42667rem] font-bold pt-[0.26667rem] text-(--van-checkbox-label-color)">
                        Forgot Password
                    </h1>
                    <div className="text-[0.29333rem] text-(--van-checkbox-label-color) mt-[0.29333rem] pb-[0.26667rem]">
                        Please retrieve/change your password through your mobile phone number or email
                    </div>
                </div>

                {/* TAB */}
                <div className="flex justify-center mb-[0.74667rem]">
                    <div
                        className="
                        w-full
              flex flex-col items-center gap-[0.26667rem] py-[0.18667rem]
              border-b-[0.05333rem] border-(--main-color)
              text-(--main-color)
              text-[0.4rem] font-bold
            "
                    >
                        <PhoneOutlined className="text-[0.64rem]" />
                        <span>phone reset</span>
                    </div>
                </div>

                {/* PHONE INPUT */}
                <div className="mb-[0.8rem]">
                    <label className="flex items-center gap-[0.16rem] mb-[0.32rem]
            text-[0.4rem] text-(--main-color)"
                    >
                        <PhoneOutlined className="text-[0.64rem]" />
                        Phone number
                    </label>

                    <div className="relative">
                        <div
                            className="
                absolute left-0 z-10
                flex items-center justify-around
                min-w-[2.4rem] h-[1.17333rem]
                px-[0.26667rem]
                rounded-[0.26667rem]
                bg-(--bg_color_L1)
                text-[0.37333rem]
                text-(--text_color_L2)
              "
                        >
                            <span>+91</span>
                            <span>▼</span>
                        </div>

                        <Input
                            placeholder="Please enter the phone number"
                            className="
                w-full h-[1.17333rem]
                pl-[2.93333rem] pr-[0.34667rem] py-[0.36rem]
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

                {/* PASSWORD */}
                <div className="mb-[0.53333rem]">
                    <label className="flex items-center gap-[0.16rem] mb-[0.32rem] text-[0.4rem]">
                        <LockOutlined className="text-[0.64rem] text-(--main-color)" />
                        A new password
                    </label>

                    <Input
                        type="password"
                        placeholder="A new password"
                        iconRender={(v) => (v ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        className="
              w-full h-[1.17333rem]
              px-[0.34667rem] py-[0.36rem]
              text-[0.37333rem]
              rounded-[0.26667rem]
              bg-(--bg_color_L2)
              text-(--text_color_L1)
              placeholder:text-(--text_color_L3)
              border-none
              [&_.anticon]:text-(--text_color_L1)
            "
                    />
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="mb-[0.53333rem]">
                    <label className="flex items-center gap-[0.16rem] mb-[0.32rem] text-[0.4rem]">
                        <LockOutlined className="text-[0.64rem] text-(--main-color)" />
                        Confirm new password
                    </label>

                    <Input
                        type="password"
                        placeholder="Confirm new password"
                        iconRender={(v) => (v ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        className="
              w-full h-[1.17333rem]
              px-[0.34667rem] py-[0.36rem]
              text-[0.37333rem]
              rounded-[0.26667rem]
              bg-(--bg_color_L2)
              text-(--text_color_L1)
              placeholder:text-(--text_color_L3)
              border-none
              [&_.anticon]:text-(--text_color_L1)
            "
                    />
                </div>

                {/* INVITE CODE */}
                <div className="mb-[0.8rem]">

                    {/* LABEL */}
                    <label className="flex items-center gap-[0.16rem] mb-[0.32rem] text-[0.4rem] text-[var(--main-color)]">
                        <SafetyOutlined className="text-[0.64rem]" />
                        Verification Code
                    </label>

                    {/* INPUT WITH SEND BUTTON */}
                    <div className="relative">

                        <Input
                            placeholder="Please enter the confirmation code"
                            className="
        h-[1.17333rem]
        pl-[0.34667rem]
        pr-[3.2rem]
        py-[0.36rem]
        text-[0.37333rem]
        rounded-[0.26667rem]
        bg-[var(--bg_color_L2)]
        text-[var(--text_color_L1)]
        placeholder:text-[var(--text_color_L3)]
        border-none
      "
                        />

                        {/* SEND BUTTON */}
                        <button
                            className="
        absolute
        right-[0.13333rem]
        top-1/2
        -translate-y-1/2
        h-[0.93333rem]
        px-[0.6rem]
        rounded-full
        bg-(--main-color)
        text-(--text_color_L4)
        text-[0.37333rem]
        font-medium
      "
                            onClick={() => console.log("Send code")}
                        >
                            Send
                        </button>

                    </div>
                </div>


                {/* TERMS */}
                <div className="mb-[0.76rem]">
                    <Checkbox className="text-[0.32rem] leading-[0.53333rem]">
  <span className="text-(--text_color_L2) font-normal">
    I have read and agree{" "}
      <span
          className="text-(--text_color_L5) cursor-pointer"
          onClick={() => navigate("/privacy-policy")}
      >
      【Privacy Agreement】
    </span>
  </span>
                    </Checkbox>

                </div>

                {/* REGISTER BUTTON */}
                <div className="flex flex-col items-center mt-[0.76rem]">
                    <button
                        className="
              w-[7.73333rem]
              h-[1.06667rem]
              rounded-[1.06667rem]
              bg-(--main-color)
              text-(--text_color_L4)
              text-[0.48rem]
              tracking-[0.05333rem]
              font-bold
            "
                    >
                        Reset
                    </button>

                </div>
            </div>




        </div>
    );
};

export default ForgotPassword;


