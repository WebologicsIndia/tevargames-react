import React from "react";
import "./newGift.css"

const gift = [
    {
        "Condition": "First deposit for new users",
        "Next day Bonus": "Total negative profit rebate for the day",
        percentage: "30%",
        "Bonus limit": "RS200.00"
    },
    {
        "Condition": "First deposit for new users",
        "Next day Bonus": "Total negative profit rebate for the day",
        percentage: "30%",
        "Bonus limit": "RS200.00"
    },
]
const NewGift = () => {
    return (
        <div className="newGift-page">
            {/* ================= TOP BAR ================= */}
            <div className="newGift-topbar">
                <div className="newGift-back">‹</div>
                <div className="newGift-title">Activity details</div>
            </div>

            {/* ================= HERO ================= */}
            <div className="newGift-hero">
                <div className="newGift-hero-content">
                    <h1 className="newGift-hero-title">
                        New member gift package
                    </h1>

                    <p className="newGift-hero-text">
                        There are two types of new member gift package rewards:
                    </p>

                    <ul className="newGift-hero-list">
                        <li>① Bonus bonus for first deposit negative profit</li>
                        <li>② Play games and get bonuses only for new members</li>
                    </ul>

                    <button className="newGift-hero-btn">
                        Activity details
                    </button>
                </div>
            </div>

            {/* ================= EVENT TIME ================= */}
            <div className="newGift-event">
                <div className="newGift-event-label">Event start time</div>
                <div className="newGift-event-time">
                    2024-06-06 00:00:00
                </div>
            </div>

            {/* ================= INFO STRIP ================= */}
            <div className="newGift-info-strip">
                <div>Conditions of participation</div>
                <div>Get bonus the next day</div>
                <div>Bonus limit</div>
            </div>

            {/* ================= INFO VALUES ================= */}
            {gift.map((item) =>(
                <div className="newGift-info-values">
                    <div className="pt-[0.6rem]">{item.Condition}</div>
                    <div className="line">
                        {item["Next day Bonus"]}
                        <span className="highlight">{item.percentage}</span>
                    </div>
                    <div className="highlight pt-[0.6rem]">{item["Bonus limit"]}</div>
                </div>
            ))}


            {/* ================= NOTICE ================= */}
            <div className="newGift-notice">
                <span className="notice-icon">!</span>
                The membership system that meets the standard automatically
                distributes bonuses
            </div>
        </div>
    );
};

export default NewGift;
