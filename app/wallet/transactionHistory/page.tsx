"use client";

import { ArrowLeftOutlined, DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./transactionHistory.css";

const FILTERS = [
    "Bets",
    "Bet Win",
    "Recharge",
    "Withdraw",
    "Commissions",
];

export default function TransactionHistory() {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("All");

    return (
        <div className="txn-wrapper">
            <div className="txn-page">

                {/* HEADER */}
                <div className="txn-header">
                    <ArrowLeftOutlined
                        className="txn-back"
                        onClick={() => router.back()}
                    />
                    <span className="txn-title">Transaction history</span>
                </div>

                {/* FILTER BAR */}
                <div className="txn-filter">
                    <div
                        className="txn-filter-left"
                        onClick={() => setShowMenu(true)}
                    >
                        <span>{selectedFilter}</span>
                        <DownOutlined />
                    </div>

                    <div className="txn-date">02/09/2026</div>
                </div>

                {/* SAMPLE CARD */}
                <div className="txn-card">
                    <div className="txn-card-header">Bet</div>

                    <div className="txn-row">
                        <span>Detail</span>
                        <span>Bet</span>
                    </div>

                    <div className="txn-row">
                        <span>Time</span>
                        <span>2024-05-25 21:16:35</span>
                    </div>

                    <div className="txn-row">
                        <span>Balance</span>
                        <span className="txn-negative">Rs1.00</span>
                    </div>

                    <div className="txn-box" />
                </div>

                {showMenu && (
                    <div className="txn-overlay">
                        <div className="txn-menu">

                            {/* ACTIONS ON TOP */}
                            <div className="txn-menu-actions">
        <span
            className="txn-cancel"
            onClick={() => setShowMenu(false)}
        >
          Cancel
        </span>

                                <span
                                    className="txn-confirm"
                                    onClick={() => setShowMenu(false)}
                                >
          Confirm
        </span>
                            </div>

                            {/* SCROLLABLE LIST */}
                            <div className="txn-menu-list">
                                {FILTERS.map((item) => (
                                    <div
                                        key={item}
                                        className={`txn-menu-item ${
                                            selectedFilter === item ? "active" : ""
                                        }`}
                                        onClick={() => setSelectedFilter(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                )}


            </div>
        </div>
    );
}
