"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./game-statistics.css";

const TABS = ["Today", "Yesterday", "This week", "This month"];

export default function GameStatistics() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("Today");

    return (
        <div className="gs-wrapper">
            <div className="gs-page">

                {/* HEADER */}
                <div className="gs-header">
                    <ArrowLeftOutlined
                        className="gs-back"
                        onClick={() => router.back()}
                    />
                    <span className="gs-title">Game statistics</span>
                </div>

                {/* TABS */}
                <div className="gs-tabs">
                    {TABS.map((tab) => (
                        <div
                            key={tab}
                            className={`gs-tab ${
                                activeTab === tab ? "active" : ""
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </div>
                    ))}
                </div>

                {/* CONTENT */}
                <div className="gs-content">
                    <div className="gs-amount">Rs0.00</div>
                    <div className="gs-label">Total bet</div>
                </div>

            </div>
        </div>
    );
}
