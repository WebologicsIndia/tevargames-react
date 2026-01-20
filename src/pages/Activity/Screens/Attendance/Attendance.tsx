import React from "react";
import { useNavigate } from "react-router-dom";
import "./attendance.css";

//TODO: Game Rules and attendance history pages remain.

const rewards = [
    { day: 1, amount: "Rs4.00" },
    { day: 2, amount: "Rs20.00" },
    { day: 3, amount: "Rs65.00" },
    { day: 4, amount: "Rs180.00" },
    { day: 5, amount: "Rs450.00" },
    { day: 6, amount: "Rs2,200.00" },
];

const Attendance = () => {
    const navigate = useNavigate();

    return (
        <div className="attendance-page">
            {/* ================= TOP BAR ================= */}
            <div className="attendance-topbar">
                <div className="attendance-back" onClick={() => navigate(-1)}>‹</div>
                <div className="attendance-title">Attendance</div>
            </div>

            {/* ================= HEADER ================= */}
            <div className="attendance-header">
                <div className="attendance-header-content">
                    <h1>Attendance bonus</h1>
                    <p>Get rewards based on consecutive login days</p>

                    <div className="attendance-badge"
                         style={{
                             clipPath: "polygon(100% 0, 90% 50%, 100% 100%, 0 100%, 0 0)",
                         }}
                    >
                        Attended consecutively
                        <span>0th Day</span>
                    </div>

                    <div className="attendance-acc">
                        Accumulated
                        <strong>Rs60.00</strong>
                    </div>

                    <div className="attendance-header-actions">
                        <button>Game Rules</button>
                        <button>Attendance history</button>
                    </div>
                </div>
            </div>

            {/* ================= REWARDS GRID ================= */}
            <div className="attendance-grid">
                {rewards.map((item) => (
                    <div key={item.day} className="attendance-item">
                        <div className="attendance-amount">{item.amount}</div>
                        <div
                            className="attendance-coin"
                            style={{
                                backgroundImage: `url(/assets/icons/coin-gold.png)`,
                            }}
                        />

                        <div className="attendance-day">{item.day} Day</div>
                    </div>
                ))}
            </div>

            {/* ================= DAY 7 ================= */}
            <div className="attendance-day7">
                <img src="/assets/images/giftBox.png" alt="Gift"/>
                <div className="attendance-day7-text">
                    <div className="amount">Rs6,000.00</div>
                    <div className="day">7 Day</div>
                </div>
            </div>

            {/* ================= CTA ================= */}
            <div className="attendance-cta">
                <button>Attendance</button>
            </div>
        </div>
    );
};

export default Attendance;
