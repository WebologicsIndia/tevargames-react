import { RightOutlined } from "@ant-design/icons";

const SettingRow = ({
                        icon,
                        label,
                    }: {
    icon: React.ReactNode;
    label: string;
}) => {
    return (
        <div className="flex items-center justify-between border-b border-(--text_color_L3) py-[.333333rem]" >
            <div className="flex items-center gap-[0.24rem] text-yellow-400 text-[0.4733rem]">
                {icon}
                <span className="text-(--van-checkbox-label-color)">{label}</span>
            </div>
            <RightOutlined className="text-gray-500" />
        </div>
    );
};

export default SettingRow;
