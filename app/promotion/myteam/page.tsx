"use client";

import {
    ArrowLeftOutlined,
    SearchOutlined,
    CopyOutlined,
    DownOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./myteam.css";

const TIERS = ["Tier 2", "Tier 3", "Tier 4", "Tier 5", "Tier 6"];

export default function SubordinateData() {
    const router = useRouter();

    const [tier, setTier] = useState("Tier 3");
    const [tempTier, setTempTier] = useState("Tier 3");
    const [showTierSheet, setShowTierSheet] = useState(false);

    return (
        <div className="sub-page">

            {/* HEADER */}
            <div className="sub-header">
                <ArrowLeftOutlined
                    className="sub-back"
                    onClick={() => router.back()}
                />
                <span className="sub-title">Subordinate data</span>
            </div>

            {/* SEARCH */}
            <div className="sub-search-row">
                <input
                    className="sub-search-input"
                    placeholder="Search subordinate UID"
                />
                <button className="sub-search-btn">
                    <SearchOutlined />
                </button>
            </div>

            {/* FILTER ROW */}
            <div className="sub-filter-row">
                <div
                    className="sub-tier"
                    onClick={() => setShowTierSheet(true)}
                >
                    <span>{tier}</span>
                    <DownOutlined />
                </div>

                <div className="sub-date">02/01/2026</div>
            </div>

            {/* STATS CARD */}
            <div className="sub-card">
                <div className="sub-card-grid">
                    <Stat value="0" label="Deposit number" />
                    <Stat value="0" label="Deposit amount" />
                    <Stat value="0" label="Number of bettors" />
                    <Stat value="0" label="Total bet" />
                    <Stat value="0" label="Number of people making first deposit" />
                    <Stat value="0" label="First deposit amount" />
                </div>
            </div>

            {/* USER INFO */}
            <div className="sub-user">
                <div className="sub-uid">
                    UID:0710305 <CopyOutlined />
                </div>

                <div className="sub-info-row">
                    <span>Level</span>
                    <span>1</span>
                </div>

                <div className="sub-info-row">
                    <span>Deposit amount</span>
                    <span className="yellow">0</span>
                </div>

                <div className="sub-info-row">
                    <span>Bet amount</span>
                    <span className="yellow">0.00</span>
                </div>

                <div className="sub-info-row">
                    <span>Commission</span>
                    <span className="yellow">0.00</span>
                </div>

                <div className="sub-info-row">
                    <span>Time</span>
                    <span className="gray">01/02/2026</span>
                </div>
            </div>

            {/* TIER BOTTOM SHEET */}
            {showTierSheet && (
                <div className="tier-overlay">
                    <div className="tier-sheet">

                        {/* ACTIONS */}
                        <div className="tier-actions">
                            <span onClick={() => setShowTierSheet(false)}>Cancel</span>
                            <span
                                className="confirm"
                                onClick={() => {
                                    setTier(tempTier);
                                    setShowTierSheet(false);
                                }}
                            >
        Confirm
      </span>
                        </div>

                        {/* SCROLLABLE TIERS */}
                        <div className="tier-scroll">
                            {TIERS.map((t) => (
                                <div
                                    key={t}
                                    className={`tier-item ${tempTier === t ? "active" : ""}`}
                                    onClick={() => setTempTier(t)}
                                >
                                    {t}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            )}

        </div>
    );
}

const Stat = ({ value, label }: any) => (
    <div className="sub-stat">
        <div className="sub-stat-value">{value}</div>
        <div className="sub-stat-label">{label}</div>
    </div>
);
