"use client"
import {
    ArrowLeftOutlined,
    WalletOutlined,
    DownloadOutlined,
    UploadOutlined,
    HistoryOutlined
} from "@ant-design/icons";

import "./wallet.css";
import {router} from "next/client";
import { useRouter } from "next/navigation";

const games = [
    {
        name: "Lottery",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },
    {
        name: "TB_Chess",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },
    {
        name: "Wickets9",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },
    {
        name: "Jilli",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },
    {
        name: "PG",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },
    {
        name: "DG",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },
    {
        name: "MG",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },
    {
        name: "JDB",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },
    {
        name: "SaBa",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },
    {
        name: "CQ9",
        icon: "/assets/svg/companyLogo_1.svg",
        amount: 60.00
    },

]

export default function Wallet() {
    const router = useRouter();
    return (
        <div className="wallet-page">

            {/* TOP BAR */}
            <div className="wallet-topbar">
                <ArrowLeftOutlined className="wallet-back" onClick={() =>  router.push("/wallet")} />
                <span className="wallet-title">Wallet</span>
            </div>

            {/* BALANCE */}
            <div className="wallet-balance">
                <WalletOutlined className="wallet-icon" />
                <div className="wallet-amount">Rs60.00</div>
                <div className="wallet-subtitle">Total balance</div>
            </div>

            {/* STATS */}
            <div className="wallet-stats">
                <div className="wallet-stat">
                    <div className="wallet-circle blue">
                        <span>0%</span>
                    </div>
                    <div className="wallet-stat-amount">Rs 0.00</div>
                    <div className="wallet-stat-label">Total Withdraw</div>
                </div>

                <div className="wallet-stat">
                    <div className="wallet-circle yellow">
                        <span>167%</span>
                    </div>
                    <div className="wallet-stat-amount">Rs 100.00</div>
                    <div className="wallet-stat-label">Total Deposit</div>
                </div>
            </div>

            {/* MAIN BUTTON */}
            <button className="wallet-transfer-btn">
                Main wallet transfer
            </button>

            {/* ACTIONS */}
            <div className="wallet-actions">
                <WalletAction icon={<UploadOutlined />} label="Deposit" navigation="/wallet/deposit"/>
                <WalletAction icon={<DownloadOutlined />} label="Withdraw" navigation="/wallet/withdrawal"/>
                <WalletAction icon={<HistoryOutlined />} label="Deposit history" />
                <WalletAction icon={<HistoryOutlined />} label="Withdrawal history" />
            </div>

            {/* GAMES (DIMMED) */}
            <div className="wallet-games">
                {games.map((game) => (
                    <div
                        key={game.name}
                        className="wallet-game wallet-game-icon bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${game.icon})` }}
                    >
                        <div className="wallet-game-amount">{`Rs ${game.amount}`}</div>
                        <div className="wallet-game-label">{game.name}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}

const WalletAction = ({ icon, label, navigation }: any) => {
    const router = useRouter();

    return (
        <div
            className="wallet-action cursor-pointer"
            onClick={() => navigation && router.push(navigation)}
        >
            <div className="wallet-action-icon">{icon}</div>
            <div className="wallet-action-label">{label}</div>
        </div>
    );
};
