"use client"
import { useState } from "react";
import "./RebateRatio.css";
import {useRouter} from "next/navigation";

const TABS = ["Lottery", "Casino", "Sports", "Running"];

const DATA = [
    {
        level: "L0",
        values: ["0.6%", "0.18%", "0.054%", "0.016%", "0.0048%", "0.0014%"],
    },
    {
        level: "L1",
        values: ["0.7%", "0.24%", "0.085%", "0.03%", "0.01%", "0.0036%"],
    },
    {
        level: "L2",
        values: ["0.75%", "0.28%", "0.1%", "0.039%", "0.014%", "0.0055%"],
    },
    {
        level: "L3",
        values: ["0.8%", "0.32%", "0.12%", "0.051%", "0.02%", "0.0081%"],
    },
    {
        level: "L4",
        values: ["0.85%", "0.36%", "0.15%", "0.065%", "0.027%", "0.011%"],
    },
];

export default function RebateRatio() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("Lottery");

    return (
        <div className="page-wrapper">
            <div className="mobile-container">

                {/* TOP BAR */}
                <div className="top-bar">
                   <span className="back" onClick={() => router.back()}>
            ←
          </span>
                    <span className="title">Rebate ratio</span>
                </div>

                {/* SCROLLABLE TABS */}
                <div className="tabs-wrapper">
                    <div className="tabs">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                className={`tab ${activeTab === tab ? "active" : ""}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* CONTENT */}
                <div className="scroll-area">
                    {DATA.map((section) => (
                        <div className="section" key={section.level}>
                            <h3>
                                Rebate level <span>{section.level}</span>
                            </h3>

                            {section.values.map((val, index) => (
                                <div className="row" key={index}>
                                    <div className="left">
                                        <span className="dot" />
                                        <span>{index + 1} level lower level commission rebate</span>
                                    </div>
                                    <span className="value">{val}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
