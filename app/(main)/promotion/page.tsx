"use client";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./promotion.css"
import {useRouter} from "next/navigation";

const Promotion = () => {
    const router = useRouter();

    const promptionDetails = [
        {
            title: "Subordinate data",
            url: "/promotion/myteam",
        } ,
        {
            title: "Commission detail",
            url: "/promotion/promotionDes",
        } ,
        {
            title: "Invitation rules",
            url: "/promotion/tutorial",
        } ,
        {
            title: "Agent line customer service",
            url: "/agent",
        } ,
        {
            title: "Rebate ratio",
            url: "/promotion/rebateRadio",
        }
    ]

    return (
        <div className="promotion-page">
            {/* ================= TOP BAR ================= */}
            <div className="promotion-topbar">
                <div className="promotion-title">Agency</div>
                <div className="promotion-filter">⚙</div>
            </div>

            {/* ================= YELLOW HEADER ================= */}
            <div className="promotion-header">
                <div className="promotion-commission">0</div>

                <div className="promotion-commission-pill">
                    Yesterday's total commission
                </div>

                <p className="promotion-upgrade">
                    Upgrade the level to increase commission income
                </p>

                {/* ================= DIRECT / TEAM ================= */}
                <div className="promotion-stats">
                    <div className="promotion-stat">
                        <div className="promotion-stat-title border-r-[0.01333rem] border-(--text_color_L3)">Direct subordinates</div>

                        <div className="promotion-stat-row">
                            <span>0</span>
                            <p>number of register</p>
                        </div>

                        <div className="promotion-stat-row green">
                            <span>0</span>
                            <p>Deposit number</p>
                        </div>

                        <div className="promotion-stat-row">
                            <span className="text-(--norm_secondary-color)">0</span>
                            <p>Deposit amount</p>
                        </div>

                        <div className="promotion-stat-row">
                            <span>0</span>
                            <p>Number of people making first deposit</p>
                        </div>
                    </div>

                    <div className="promotion-stat">
                        <div className="promotion-stat-title">Team subordinates</div>

                        <div className="promotion-stat-row">
                            <span>0</span>
                            <p>number of register</p>
                        </div>

                        <div className="promotion-stat-row green">
                            <span>0</span>
                            <p>Deposit number</p>
                        </div>

                        <div className="promotion-stat-row">
                            <span>0</span>
                            <p>Deposit amount</p>
                        </div>

                        <div className="promotion-stat-row">
                            <span>0</span>
                            <p>Number of people making first deposit</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= INVITATION ================= */}
            <div className="promotion-invite-btn">
                INVITATION LINK
            </div>

            <div className="promotion-list">
                <div className="promotion-list-row">
                    <span className="left">Copy invitation code</span>
                    <span className="right">303683383626</span>
                </div>

                {promptionDetails.map((item) => (
                    <div key={item.title} className="promotion-list-row arrow"
                        onClick={() => router.push(item.url)}
                    >
                        <span className="left">{item.title}</span>
                        <span className="chevron">›</span>
                    </div>
                ))}
            </div>

            {/* ================= PROMOTION DATA ================= */}
            <div className="promotion-promo">
                <div className="promo-title">promotion data</div>

                <div className="promo-grid">
                    <div>
                        <div className="value">0</div>
                        <div className="label">This Week</div>
                    </div>

                    <div>
                        <div className="value">0</div>
                        <div className="label">Total commission</div>
                    </div>

                    <div>
                        <div className="value">3</div>
                        <div className="label">direct subordinate</div>
                    </div>

                    <div>
                        <div className="value">0</div>
                        <div className="label">
                            Total number of subordinates in the team
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Promotion;
