"use client";

import { ArrowLeftOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import "./betHistory.css";
import { useRouter } from "next/navigation";


const GAMES = [
    { id: "wingo", label: "Win Go" },
    { id: "trx", label: "Trx Win Go" },
    { id: "5d", label: "5D" },
    { id: "k3", label: "K3" },
];

export default function BetHistory() {
    const [selectedGame, setSelectedGame] = useState("trx");
    const [showGameList, setShowGameList] = useState(false);
    const router = useRouter();

    const handleSelectGame = (gameId: string) => {
        setSelectedGame(gameId);
        setShowGameList(false); // hide panel after select
    };

    return (
        <div className="bet-wrapper">
            <div className="bet-page">

                {/* ===== HEADER ===== */}
                <div className="bet-header">
                    <ArrowLeftOutlined
                        className="bet-back cursor-pointer"
                        onClick={() => router.back()}
                    />
                    <span className="bet-title">Bet history</span>
                </div>

                {/* ===== FILTER ===== */}
                <div className="bet-filter">
                    <div
                        className="bet-game-select cursor-pointer"
                        onClick={() => setShowGameList(true)}
                    >
            <span>
              {GAMES.find((g) => g.id === selectedGame)?.label}
            </span>
                        <DownOutlined />
                    </div>

                    <div className="bet-date">02/09/2026</div>
                </div>

                {/* ===== EMPTY ===== */}
                <div className="bet-empty">No more</div>

                {/* ===== GAME SELECTOR ===== */}
                {showGameList && (
                    <div className="bet-game-panel">
                        {GAMES.map((g) => (
                            <div
                                key={g.id}
                                onClick={() => handleSelectGame(g.id)}
                                className={`bet-game-card ${
                                    selectedGame === g.id
                                        ? "bet-game-active"
                                        : "bet-game-inactive"
                                }`}
                            >
                                {g.label}
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
}
