import {GiftOutlined, HistoryOutlined, HomeOutlined, UserOutlined, WalletOutlined} from "@ant-design/icons";

const BottomTab = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0b1a44]">
            <div className="relative flex items-center justify-between px-6 h-[3.2rem]">

                {/* Home */}
                <div className="flex flex-col items-center text-yellow-400">
                    <HomeOutlined className="text-xl" />
                    <span className="text-xs mt-1">Home</span>
                </div>

                {/* Activity */}
                <div className="flex flex-col items-center text-gray-400">
                    <HistoryOutlined className="text-xl" />
                    <span className="text-xs mt-1">Activity</span>
                </div>

                {/* Center Promotion (raised) */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-[1.1rem]">
                    <div className="h-[3rem] w-[3rem] rounded-full bg-[#4aa3ff] flex items-center justify-center shadow-lg">
                        <GiftOutlined className="text-white text-xl" />
                    </div>
                    <p className="text-center text-xs text-white mt-1">Promotion</p>
                </div>

                {/* Wallet */}
                <div className="flex flex-col items-center text-gray-400">
                    <WalletOutlined className="text-xl" />
                    <span className="text-xs mt-1">Wallet</span>
                </div>

                {/* Account */}
                <div className="flex flex-col items-center text-gray-400">
                    <UserOutlined className="text-xl" />
                    <span className="text-xs mt-1">Account</span>
                </div>

            </div>
        </div>
    );
};
export default BottomTab;
