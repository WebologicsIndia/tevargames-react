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
                        <MenuItem icon={<SwapOutlined />} title="Transaction" sub="My transaction history" />
                        <MenuItem icon={<WalletOutlined />} title="Deposit" sub="My deposit history" />
                        <MenuItem icon={<WalletOutlined />} title="Withdraw" sub="My withdraw history" />
                    </div>

                    {/* LIST */}
                    <ListRow icon={<NotificationOutlined />} text="Notification" badge="3" />
                    <ListRow icon={<GiftOutlined />} text="Gifts" />

                    <div className="divider" />

                    <ListRow icon={<BarChartOutlined />} text="Game statistics" />
                    <ListRow icon={<GlobalOutlined />} text="Language" right="English" />

                    {/* SERVICE CENTER */}
                    <div className="section-title">Service center</div>

                    <div className="service-grid">
                        <ServiceItem icon={<SettingOutlined />} text="Settings" />
                        <ServiceItem icon={<MessageOutlined />} text="Feedback" />
                        <ServiceItem icon={<NotificationOutlined />} text="Notification" />
                        <ServiceItem icon={<CustomerServiceOutlined />} text="24/7 Customer service" />
                        <ServiceItem icon={<BookOutlined />} text="Beginner’s Guide" />
                        <ServiceItem icon={<InfoCircleOutlined />} text="About us" />
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
const MenuItem = ({ icon, title, sub, navigation }: any) => (
    <div className="icon-item" onClick={() => navigation}>
        {icon}
        <div>
            <div className="title">{title}</div>
            <div className="sub">{sub}</div>
        </div>
    </div>
);

const ListRow = ({ icon, text, right, badge }: any) => (
    <div className="list-row">
        {icon}
        <span>{text}</span>
        {badge && <span className="badge">{badge}</span>}
        {right && <span className="right-text">{right} <RightOutlined /></span>}
        {!badge && !right && <RightOutlined className="arrow" />}
    </div>
);

const ServiceItem = ({ icon, text }: any) => (
    <div className="service-item">
        {icon}
        <span>{text}</span>
    </div>
);
