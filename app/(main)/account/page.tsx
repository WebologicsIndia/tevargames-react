"use client";

import {
    BarChartOutlined,
    GlobalOutlined,
    SettingOutlined,
    MessageOutlined,
    NotificationOutlined,
    CustomerServiceOutlined,
    BookOutlined,
    InfoCircleOutlined,
    PoweroffOutlined,
    HomeOutlined,
    WalletOutlined,
    SwapOutlined,
    GiftOutlined,
    RightOutlined,
} from "@ant-design/icons";

import "./Account.css";
import {useRouter} from "next/navigation";

export default function Account() {
    const router = useRouter();
    return (
        <div className="page-wrapper">
            <div className="mobile-container">

                {/* SCROLL AREA */}
                <div className="scroll-area">

                    {/* PROFILE */}
                    <div className="account-header">
                        <img src="/assets/avatars/avatar_7.png" className="avatar" />

                        <div>
                            <div className="username">
                                <span>Member13178</span>
                                <img
                                    className="vip-badge"
                                    alt="VIP0"
                                    src="/assets/icons/VIP0.png"
                                />
                            </div>

                            <div className="uid">UID | 3383626 ⧉</div>

                            <div className="last-login">
                                Last login: 2025-02-02 14:33:44
                            </div>
                        </div>
                    </div>

                    {/* BALANCE */}
                    <div className="balance-card">
                        <div className="balance-title">Total balance</div>
                        <div className="balance-amount">Rs 60.00</div>

                        <div className="balance-actions">
                            <div className="flex flex-col items-center gap-[0.1rem]" onClick={() => router.push("/wallet/")}><WalletOutlined /> Wallet</div>
                            <div className="flex flex-col items-center gap-[0.1rem]" onClick={() => router.push("/wallet/deposit")}><SwapOutlined /> Deposit</div>
                            <div className="flex flex-col items-center gap-[0.1rem]" onClick={() => router.push("/wallet/withdrawal")}><SwapOutlined rotate={180} /> Withdraw</div>
                            <div className="flex flex-col items-center gap-[0.1rem]" onClick={() => router.push("/vip")}><GiftOutlined /> VIP</div>
                        </div>
                    </div>

                    {/* SAFE */}
                    <div className="safe-card">
                        <div>
                            <div className="safe-title">Safe</div>
                            <div className="safe-desc">
                                Daily interest rate 0.1% + VIP extra income safe,
                                calculated every 1 minute
                            </div>
                        </div>
                        <div className="safe-right">Rs0.00 <RightOutlined /></div>
                    </div>

                    {/* HISTORY GRID */}
                    <div className="two-col">
                        <MenuItem icon={<BarChartOutlined />} title="Game History" sub="My game history" navigation={"/game_history"}/>
                        <MenuItem icon={<SwapOutlined />} title="Transaction" sub="My transaction history" navigation={"/wallet/transactionHistory"}/>
                        <MenuItem icon={<WalletOutlined />} title="Deposit" sub="My deposit history" navigation={"/wallet/deposit"}/>
                        <MenuItem icon={<WalletOutlined />} title="Withdraw" sub="My withdraw history" navigation={"/wallet/withdrawal"} />
                    </div>

                    {/* LIST */}
                    <ListRow icon={<NotificationOutlined />} text="Notification" badge="3"  navigation={"/login_notification"}/>
                    <ListRow icon={<GiftOutlined />} text="Gifts" />

                    <div className="divider" />

                    <ListRow icon={<BarChartOutlined />} text="Game statistics" navigation={"/mian/game_statistics"}/>
                    <ListRow icon={<GlobalOutlined />} text="Language" right="English" />

                    {/* SERVICE CENTER */}
                    <div className="section-title">Service center</div>

                    <div className="service-grid">
                        <ServiceItem icon={<SettingOutlined />} text="Settings" />
                        <ServiceItem icon={<MessageOutlined />} text="Feedback" navigation={"/feedback"}/>
                        <ServiceItem icon={<NotificationOutlined />} text="Notification" navigation={"/login_notification"}/>
                        <ServiceItem icon={<CustomerServiceOutlined />} text="24/7 Customer service" navigation={"/support"}/>
                        <ServiceItem icon={<BookOutlined />} text="Beginner’s Guide" navigation={"/guide"}/>
                        <ServiceItem icon={<InfoCircleOutlined />} text="About us" navigation={"/about"}/>
                    </div>

                    {/* LOGOUT */}
                    <button className="logout-btn">
                        <PoweroffOutlined /> Log out
                    </button>

                </div>

            </div>
        </div>
    );
}

/* small components */
const MenuItem = ({ icon, title, sub, navigation }: any) => {
    const router = useRouter();
    return (
    <div className="icon-item"
         onClick={() => navigation && router.push(navigation)}
    >
        {icon}
        <div>
            <div className="title">{title}</div>
            <div className="sub">{sub}</div>
        </div>
    </div>
    )
};

const ListRow = ({ icon, text, right, badge, navigation }: any) =>  {
    const router = useRouter();
    return (
    <div className="list-row" onClick={() => router.push(navigation)}>
        {icon}
        <span>{text}</span>
        {badge && <span className="badge">{badge}</span>}
        {right && <span className="right-text">{right} <RightOutlined /></span>}
        {!badge && !right && <RightOutlined className="arrow" />}
    </div>
)};

const ServiceItem = ({ icon, text, navigation }: any) => {
   const router = useRouter();
    return (
    <div className="service-item" onClick={() => navigation && router.push(navigation)}>
        {icon}
        <span>{text}</span>
    </div>
)};
