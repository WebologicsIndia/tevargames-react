import React from "react";
import "./newGift.css"

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
            <div className="newGift-info-values">
                <div>First deposit for new users</div>
                <div>
                    Total negative profit rebate for the day
                    <span className="highlight">30%</span>
                </div>
                <div className="highlight">Rs200.00</div>
            </div>

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
