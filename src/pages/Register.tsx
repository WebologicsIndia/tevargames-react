import { useNavigate } from "react-router-dom";
import { Input, Checkbox } from "antd";
import {
    ArrowLeftOutlined,
    PhoneOutlined,
    LockOutlined,
    EyeInvisibleOutlined,
    EyeTwoTone,
    MailOutlined
} from "@ant-design/icons";

const Register = () => {
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
                <div className="min-h-[2.66667rem]">
                    <h1 className="text-[0.42667rem] font-bold pt-[0.26667rem] text-(--text_color_L2)">
                        Register
                    </h1>

                    <div className="text-[0.29333rem] text-(--text_color_L2) mt-[0.29333rem] mb-[0.53333rem]">
                        Please register by phone number or email
                    </div>
                </div>

                {/* TAB */}
                <div className="flex justify-center mb-[0.74667rem]">
                    <div
                        className="
              flex flex-col items-center gap-[0.26667rem] py-[0.18667rem]
              border-b-[0.05333rem] border-(--main-color)
              text-(--main-color)
              text-[0.4rem] font-bold
            "
                    >
                        <PhoneOutlined className="text-[0.64rem]" />
                        <span>Register your phone</span>
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
                        Set password
                    </label>

                    <Input
                        type="password"
                        placeholder="Set password"
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
                        Confirm password
                    </label>

                    <Input
                        type="password"
                        placeholder="Confirm password"
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
                    <label className="flex items-center gap-[0.16rem] mb-[0.32rem] text-[0.4rem]" >
                        <MailOutlined className="text-[0.64rem] text-(--main-color)" />
                        Invite code
                    </label>

                    <Input
                        placeholder="Please enter the invitation code"
                        className="
              w-full h-[1.17333rem]
              px-[0.34667rem] py-[0.36rem]
              text-[0.37333rem]
              rounded-[0.26667rem]
              bg-(--bg_color_L2)
              text-(--text_color_L1)
              placeholder:text-(--text_color_L3)
              border-none
            "
                    />
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
                        Register
                    </button>

                    <button
                        onClick={() => navigate("/login")}
                        className="
    w-[7.73333rem]
    h-[1.06667rem]
    mt-[0.53333rem]
    rounded-[1.06667rem]
    border-[0.01333rem]
    border-[var(--main-color)]
    flex
    items-center
    justify-center
    gap-[0.16rem]
    text-[0.48rem]
    font-bold
    bg-transparent
  "
                    >
   <span className="text-[0.32rem] font-normal text-(--text_color_L2)">
    I have an account
  </span>
                        <span
                            className="
      text-[0.48rem]
      font-bold
      text-(--main-color)
    "
                        >
    Login
  </span>
                    </button>

                </div>
            </div>




        </div>
    );
};

export default Register;


