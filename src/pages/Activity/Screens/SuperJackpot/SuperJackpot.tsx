import React from "react";
import "./superJackpot.css"
import {useNavigate} from "react-router-dom";

const SuperJackpot = () => {
    const navigator = useNavigate();
    return (
        <div className="superjackpot-page">
            {/* ================= HEADER ================= */}
            <div className="sj-topbar">
                <div className="sj-back" onClick={() => navigator(-1)}>‹</div>
                <div className="sj-title">Super Jackpot</div>
            </div>

            {/* ================= HERO ================= */}
            <div className="sj-hero">
                    <h1 className="sj-hero-title">Super Jackpot</h1>
                    <p className="sj-hero-text">
                        When you get the Super Jackpot in <b>(Slots)</b> <br />Can get 1 additional
                        bonus
                    </p>

                    <p className="sj-hero-text">
                        The reward is valid for 30 day and you <br /> will not be able to claim it
                        after it expires!
                    </p>

            </div>

            {/* ================= RECEIVE BUTTON ================= */}
            <div className="sj-receive-wrapper">
                <button className="sj-receive-btn" disabled>
                    Receive in batches
                </button>
            </div>

            {/* ================= ACTION ROW ================= */}
            <div className="sj-actions">
                <div className="sj-action">
                    <div className="sj-action-icon">📜</div>
                    <span>Rule</span>
                </div>

                <div className="sj-action">
                    <div className="sj-action-icon">👑</div>
                    <span>Winning star</span>
                </div>
            </div>

            {/* ================= EMPTY STATE ================= */}
            <div className="sj-empty">
                <div className="sj-empty-art" />
                <p className="sj-empty-text">
                    You don't have a big jackpot yet, let's bet
                </p>
            </div>

            {/* ================= CTA ================= */}
            <div className="sj-cta-wrapper">
                <button className="sj-cta-btn">Go bet</button>
            </div>
        </div>
    );
};

export default SuperJackpot;
