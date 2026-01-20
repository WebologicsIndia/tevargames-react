import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./gift.css"

const Gift = () => {
    const navigate = useNavigate();
    const [code, setCode] = useState("");

    return (
        <div className="gift-page">
            {/* ================= HEADER ================= */}
            <div className="gift-topbar">
                <div className="gift-back" onClick={() => navigate(-1)}>‹</div>
                <div className="gift-title">Gift</div>
            </div>

            {/* ================= HERO IMAGE ================= */}
            <div className="gift-hero" />

            {/* ================= CONTENT ================= */}
            <div className="gift-content">
                <p className="gift-hi">Hi</p>
                <p className="gift-desc">We have a gift for you</p>

                <p className="gift-label">Please enter the gift code below</p>

                <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Please enter gift code"
                    className="gift-input"
                />

                <button className="gift-receive">
                    Receive
                </button>
            </div>

            {/* ================= HISTORY ================= */}
            <div className="gift-history">
                <div className="gift-history-title">
                    <span className="gift-history-icon">🧾</span>
                    History
                </div>

                <div className="gift-empty">
                    <div className="gift-empty-art" />
                    <p>No data</p>
                </div>
            </div>
        </div>
    );
};

export default Gift;
