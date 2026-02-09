"use client";

import { LeftOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./betHistory.css";

const GAMES = [
    { id: "win-go", label: "Win Go", active: false },
    { id: "trx-win-go", label: "Trx Win Go", active: true },
    { id: "5d", label: "5D", active: false },
    { id: "k3", label: "K3", active: false },
];

export default function BetHistory() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Trx Win Go");

    return (
        <div className="page-wrapper">
            <div className="mobile-container">

                {/* HEADER */}
                <div className="top-bar">
                    <LeftOutlined
                        className="back"
                        onClick={() => window.history.back()}
                    />
                    <span className="title">Bet history</span>
                </div>

                {/* FILTER */}
                <div className="filter-row">
                    <div className="game-select" onClick={() => setOpen(true)}>
                        <span>{selected}</span>
                        <DownOutlined />
                    </div>

                    <div className="date-pill">02/04/2026</div>
                </div>

                {/* EMPTY */}
                <div className="empty-state">No more</div>

                {/* OVERLAY */}
                {open && <div className="overlay" onClick={() => setOpen(false)} />}

                {/* BOTTOM SHEET */}
                <div className={`bottom-sheet ${open ? "open" : ""}`}>
                    <div className="sheet-grid">
                        {GAMES.map((g) => (
                            <div
                                key={g.id}
                                className={`sheet-item ${
                                    selected === g.label ? "active" : ""
                                }`}
                                onClick={() => {
                                    setSelected(g.label);
                                    setOpen(false);
                                }}
                            >
                                <div className="sheet-icon" />
                                <span>{g.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
