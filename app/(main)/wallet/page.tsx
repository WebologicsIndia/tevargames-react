import {
    ArrowLeftOutlined,
    WalletOutlined,
    DownloadOutlined,
    UploadOutlined,
    HistoryOutlined
} from "@ant-design/icons";

import "./wallet.css";

export default function Wallet() {
    return (
        <div className="wallet-page">

            {/* TOP BAR */}
            <div className="wallet-topbar">
                <ArrowLeftOutlined className="wallet-back" />
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
                <WalletAction icon={<UploadOutlined />} label="Deposit" />
                <WalletAction icon={<DownloadOutlined />} label="Withdraw" />
                <WalletAction icon={<HistoryOutlined />} label="Deposit history" />
                <WalletAction icon={<HistoryOutlined />} label="Withdrawal history" />
            </div>

            {/* GAMES (DIMMED) */}
            <div className="wallet-games">
                {["Lottery", "TB_Chess", "Wickets9", "JILI", "PG", "DG"].map((g) => (
                    <div key={g} className="wallet-game">
                        <div className="wallet-game-icon" />
                        <div className="wallet-game-amount">Rs 60.00</div>
                        <div className="wallet-game-label">{g}</div>
                    </div>
                ))}
            </div>

        </div>
    );
}

const WalletAction = ({ icon, label }: any) => (
    <div className="wallet-action">
        <div className="wallet-action-icon">{icon}</div>
        <div className="wallet-action-label">{label}</div>
    </div>
);
