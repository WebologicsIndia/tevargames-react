import React, { useState } from "react";
import "./rebate.css";

const tabs = [
    { id: "all", label: "All", icon: "⬛⬛" },
    { id: "lottery", label: "Lottery", icon: "🎱" },
    { id: "casino", label: "Casino", icon: "📺" },
    { id: "slots", label: "Slots", icon: "🎰" },
];

const Rebate = () => {
    const [activeTab, setActiveTab] = useState("all");

    return (
        <div className="rebate-page">
            {/* ================= HEADER ================= */}
            <div className="rebate-topbar">
                <div className="back-btn">‹</div>
                <div className="rebate-header">Rebate</div>
            </div>

            {/* ================= TABS ================= */}
            <div className="rebate-tabs">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`rebate-tab ${
                            activeTab === tab.id ? "rebate-tab-active" : ""
                        }`}
                    >
                        <span className="text-[0.48rem]">{tab.icon}</span>
                        <span>{tab.label}</span>
                    </div>
                ))}
            </div>

            {/* ================= CONTENT ================= */}
            <div className="rebate-section">
                <h3 className="rebate-title">All-Total betting rebate</h3>

                <div className="realtime-badge">
                    ✔ Real-time count
                </div>

                <div className="rebate-amount">
                    💰 40.00
                </div>

                <div className="vip-banner">
                    Upgrade VIP level to increase rebate rate
                </div>

                <div className="rebate-cards">
                    <div className="rebate-card">
                        <div className="rebate-card-label">Today rebate</div>
                        <div className="rebate-card-value">0.00</div>
                    </div>

                    <div className="rebate-card">
                        <div className="rebate-card-label">Total rebate</div>
                        <div className="rebate-card-value">0.00</div>
                    </div>
                </div>

                <p className="rebate-note">
                    Automatic code washing at 01:00:00 every morning
                </p>

                <div className="rebate-btn">
                    One-Click Rebate
                </div>
            </div>

            {/* ================= HISTORY ================= */}
            <div className="rebate-history">
                <div className="rebate-history-title">Rebate history</div>

                <div className="rebate-history-btn">
                    All history
                </div>
            </div>
        </div>
    );
};

export default Rebate;
