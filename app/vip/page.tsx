"use client";

import {
    ArrowLeftOutlined,
    CrownOutlined,
    GiftOutlined,
    SafetyOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import "./vip.css";
import { useState } from "react";

const VIP_LEVELS = [
    {
        name: "VIP1",
        level: 1,
        icons: {
            left: "/assets/vip/vipcardleft_1.png",
            right: "/assets/vip/vip_icon_big1.png",
            emblem: "/assets/vip/vip_emblem.png",
        },
        background: {
            gradient: ["#a6b7d0", "#889ebe"],
            image: "/assets/vip/vipCard_bg1.png",
        },
        progress: {
            current: 40,
            required: 3000,
            remaining: 2971,
        },
        status: "active",
        benefits: {
            levelUp: 60,
            monthly: 30,
            safe: "0.2%",
            rebate: "0.05%",
        },
    },
    {
        name: "VIP2",
        level: 2,
        icons: {
            left: "/assets/vip/vipcardleft_2.png",
            right: "/assets/vip/vip_icon_big2.png",
            emblem: "/assets/vip/vip_emblem.png",
        },
        background: {
            gradient: ["#f8bd83", "#e2984e"],
            image: "/assets/vip/vipCard_bg2.png",
        },
        progress: {
            current: 200,
            required: 5000,
            remaining: 4800,
        },
        status: "active",
        benefits: {
            levelUp: 100,
            monthly: 60,
            safe: "0.4%",
            rebate: "0.1%",
        },
    },
    {
        name: "VIP3",
        level: 3,
        icons: {
            left: "/assets/vip/vipcardleft_2.png",
            right: "/assets/vip/vip_icon_big3.png",
        },
        background: {
            gradient: ["#ffa493", "#ff7878"],
            image: "/assets/vip/vipCard_bg3.png",
        },
        progress: {
            current: 40,
            required: 3000,
            remaining: 2971,
        },
        status: "locked",
        benefits: {
            levelUp: 0,
            monthly: 0,
            safe: "0%",
            rebate: "0%",
        },
    },
    {
        name: "VIP4",
        level: 4,
        icons: {
            left: "/assets/vip/vipcardleft_2.png",
            right: "/assets/vip/vip_icon_big4.png",
        },
        background: {
            gradient: ["#78dbeb", "#48c7f0"],
            image: "/assets/vip/vipCard_bg4.png",
        },
        progress: {
            current: 40,
            required: 3000,
            remaining: 2971,
        },
        status: "locked",
        benefits: {
            levelUp: 0,
            monthly: 0,
            safe: "0%",
            rebate: "0%",
        },
    },
    {
        name: "VIP5",
        level: 5,
        icons: {
            left: "/assets/vip/vipcardleft_2.png",
            right: "/assets/vip/vip_icon_big5.png",
        },
        background: {
            gradient: ["#df91fb", "#ef82d5"],
            image: "/assets/vip/vipCard_bg5.png",
        },
        progress: {
            current: 40,
            required: 3000,
            remaining: 2971,
        },
        status: "locked",
        benefits: {
            levelUp: 0,
            monthly: 0,
            safe: "0%",
            rebate: "0%",
        },
    },
    {
        name: "VIP6",
        level: 6,
        icons: {
            left: "/assets/vip/vipcardleft_2.png",
            right: "/assets/vip/vip_icon_big6.png",
        },
        background: {
            gradient: ["#61dca6", "#229b5f"],
            image: "/assets/vip/vipCard_bg6.png",
        },
        progress: {
            current: 40,
            required: 3000,
            remaining: 2971,
        },
        status: "locked",
        benefits: {
            levelUp: 0,
            monthly: 0,
            safe: "0%",
            rebate: "0%",
        },
    },
    {
        name: "VIP7",
        level: 7,
        icons: {
            left: "/assets/vip/vipcardleft_2.png",
            right: "/assets/vip/vip_icon_big7.png",
        },
        background: {
            gradient: ["#57b733", "#229b5f"],
            image: "/assets/vip/vipCard_bg7.png",
        },
        progress: {
            current: 40,
            required: 3000,
            remaining: 2971,
        },
        status: "locked",
        benefits: {
            levelUp: 0,
            monthly: 0,
            safe: "0%",
            rebate: "0%",
        },
    },
    {
        name: "VIP8",
        level: 8,
        icons: {
            left: "/assets/vip/vipcardleft_2.png",
            right: "/assets/vip/vip_icon_big8.png",
        },
        background: {
            gradient: ["#54baf1", "#3d77e8"],
            image: "/assets/vip/vipCard_bg8.png",
        },
        progress: {
            current: 40,
            required: 3000,
            remaining: 2971,
        },
        status: "locked",
        benefits: {
            levelUp: 0,
            monthly: 0,
            safe: "0%",
            rebate: "0%",
        },
    },
    {
        name: "VIP9",
        level: 9,
        icons: {
            left: "/assets/vip/vipcardleft_2.png",
            right: "/assets/vip/vip_icon_big9.png",
        },
        background: {
            gradient: ["#d084e2", "#8d49ff"],
            image: "/assets/vip/vipCard_bg9.png",
        },
        progress: {
            current: 40,
            required: 3000,
            remaining: 2971,
        },
        status: "locked",
        benefits: {
            levelUp: 0,
            monthly: 0,
            safe: "0%",
            rebate: "0%",
        },
    },
    {
        name: "VIP10",
        level: 10,
        icons: {
            left: "/assets/vip/vipcardleft_2.png",
            right: "/assets/vip/vip_icon_big10.png",
        },
        background: {
            gradient: ["#eeaf3a", "#f98b3b"],
            image: "/assets/vip/vipCard_bg10.png",
        },
        progress: {
            current: 40,
            required: 3000,
            remaining: 2971,
        },
        status: "locked",
        benefits: {
            levelUp: 0,
            monthly: 0,
            safe: "0%",
            rebate: "0%",
        },
    },
];

const rules = [
    {
        title: "Upgrade standard",
        description: "The IP member's experience points (valid bet amount) that meet the requirements of the corresponding rank will be promoted to the corresponding VIP level, the member's VIP data statistics period starts from 00:00:00 days VIP system launched.VIP level calculation is refreshed every 10 minutes! The corresponding experience level is calculated according to valid odds 1:1 !",
    },
    {
        title: "Upgrade order",
        description: "The VIP level that meets the corresponding requirements can be promoted by one level every day, but the VIP level cannot be promoted by leapfrogging."
    },
    {
        title: "Level Maintenance",
        description: "VIP members need to complete the maintenance requirements of the corresponding level within 30 days after the \"VIP level change\"; if the promotion is completed during this period, the maintenance requirements will be calculated according to the current level.",
    },
    {
        title: "Downgrade standard",
        description: "If a VIP member fails to complete the corresponding level maintenance requirements within 30 days, the system will automatically deduct the experience points corresponding to the level. If the experience points are insufficient, the level will be downgraded, and the corresponding discounts will be adjusted to the downgraded level accordingly."
    },
    {
        title: "Upgrade Bonus",
        description: "The upgrade benefits can be claimed on the VIP page after the member reaches the VIP membership level, and each VIP member can only get the upgrade reward of each level once.\n"
    },
    {
        title: "Monthly reward",
        description: "VIP members can earn the highest level of VIP rewards once a month.Can only be received once a month. Prizes cannot be accumulated. And any unclaimed rewards will be refreshed on the next settlement day. When receiving the highest level of monthly rewards this month Monthly Rewards earned in this month will be deducted e.g. when VIP1 earns 500 and upgrades to VIP2 to receive monthly rewards 500 will be deducted."
    },
    {
        title: "Real-time rebate",
        description: "The higher the VIP level, the higher the return rate, all the games are calculated in real time and can be self-rewarded!"
    },
    {
        title: "Safe",
        description: "VIP members who have reached the corresponding level will get additional benefits on safe deposit based on the member's VIP level."
    },
]

export default function VipPage() {
    const router = useRouter();
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeBottomIndex] = useState(0);
    const [activeTab, setActiveTab] = useState<"history" | "rules">("history");

    const active = VIP_LEVELS[activeIndex];
    const progressPercent = Math.min(
        (active.progress.current / active.progress.required) * 100,
        100
    );

    return (
        <div className="vip-page">
            {/* HEADER */}
            <div className="vip-header">
                <ArrowLeftOutlined
                    className="vip-back"
                    onClick={() => router.back()}
                />
                <span className="vip-title">VIP</span>
            </div>

            {/* PROFILE */}
            <div className="vip-profile">
                <img
                    src="/assets/avatars/avatar_1.png"
                    className="vip-avatar"
                />
                <div>
                    <img
                        src="/assets/icons/VIP0.png"
                        className="vip-badge"
                    />
                    <div className="vip-name">MemberNNGNCBQ7</div>
                </div>
            </div>

            {/* STATS */}
            <div className="vip-stats">
                <div className="vip-stat">
                    <div className="vip-stat-value">40 EXP</div>
                    <div className="vip-stat-label">My experience</div>
                </div>
                <div className="vip-stat">
                    <div className="vip-stat-value">22 Days</div>
                    <div className="vip-stat-label">Payout time</div>
                </div>
            </div>

            {/* NOTICE */}
            <div className="vip-notice">
                VIP level rewards are settled at 2:00 am on the 1st of every month
            </div>

            {/* VIP CARDS */}
            <div className="vip-card-scroll">
                {VIP_LEVELS.map((card, index) => (
                    <div
                        key={card.level}
                        className={`vip-card ${
                            index === activeIndex ? "active" : ""
                        }`}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            backgroundImage: `
    url(${card.background.image}),
    linear-gradient(135deg, ${card.background.gradient[0]}, ${card.background.gradient[1]})
  `,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        <div className="vip-card-center">
                            <img
                                src={card.icons.left}
                                alt={"crown"}
                                className="vip-left-icon"
                            />
                            <div className="vip-card-header">
                                <span className="vip-level">{card.name}</span>

                                <span className="vip-lock">

                            <img src="/assets/icons/ununlocked.png" alt={"lock"}/>

                                    {card.status === "locked"
                                        ? "Not open yet"
                                        : "Opened"}
                </span>
                            </div>

                            <div className="vip-sub">
                                Upgrading {card.name} requires{" "}
                                {card.progress.remaining} EXP
                            </div>

                            <div className="vip-chip">Bet Rs1 = 1EXP</div>

                            {/* PROGRESS */}
                            <div className="vip-progress">
                                <span className="vip-dot" />
                                <div className="vip-track">
                                    <div
                                        className="vip-fill"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>
                            </div>

                            <div className="vip-progress-text">
                <span>
                  {card.progress.current} /{" "}
                    {card.progress.required}
                </span>
                                <span>
                  {card.progress.required} EXP can be leveled up
                </span>
                            </div>
                        </div>

                        {/* RIGHT ICON */}
                        <img
                            src={card.icons.right}
                            className="vip-emblem"
                        />
                    </div>
                ))}
            </div>

            {/* BENEFITS */}
            <div className="vip-benefits-title">
                {active.name} Benefits level
            </div>

            <BenefitRow
                icon="/assets/vip/gift.png"
                title="Level up rewards"
                desc="Each account can only receive 1 time"
                value={active.benefits.levelUp}
            />

            <BenefitRow
                icon="/assets/vip/reward.png"
                title="Monthly reward"
                desc="Each account can only receive 1 time per month"
                value={active.benefits.monthly}
            />

            <BenefitRow
                icon="/assets/vip/safe.png"
                title="Safe"
                desc="Increase the extra income of the safe"
                value={active.benefits.safe}
            />

            <BenefitRow
                icon="/assets/vip/rebate.png"
                title="Rebate rate"
                desc="Increase income of rebate"
                value={active.benefits.rebate}
            />
            <div className="vip-tabs">
                <div
                    className={`vip-tab-${activeTab === "history" ? "active" : ""}`}
                    onClick={() => setActiveTab("history")}
                >
                    History
                </div>
                <div
                    className={`vip-tab-${activeTab === "rules" ? "active" : ""}`}
                    onClick={() => setActiveTab("rules")}
                >
                    Rules
                </div>
            </div>
            {activeTab === "history" && (
                <div className="vip-tab-content">
                    <div className="vip-empty">
                        {/*<img src="/assets/vip/no-data.png" alt="no data" />*/}
                        <span>No data</span>
                    </div>
                </div>
            )}
            {activeTab === "rules" && (
                <div className="px-2">
                    <div className="flex flex-col justify-between items-center gap-1 py-2">
                        <div className={"rule-header"}>VIP privileges</div>
                        <div>VIP rule description</div>
                    </div>
                    {rules.map((rule, index) => (
                        <div className={"flex flex-col items-center py-2"} key={index}>
                            <div className={"pb-1 font-semibold text-[0.32rem]"}>
                                {rule.title}
                            </div>
                            <div>
                                {rule.description}
                            </div>
                        </div>
                    ))

                    }
                </div>
            )}
        </div>
    );
}

/* REUSABLE BENEFIT ROW */
function BenefitRow({
                        icon,
                        title,
                        desc,
                        value,
                    }: {
    icon: string;
    title: string;
    desc: string;
    value: string | number;
}) {
    return (
        <div className="vip-benefit">
            <img src={icon} className="benefit-icon" />
            <div className="benefit-info">
                <div className="benefit-title">{title}</div>
                <div className="benefit-desc">{desc}</div>
            </div>
            <div className="benefit-box">{value}</div>
        </div>
    );
}

function RuleBlock({
                       title,
                       text,
                   }: {
    title: string;
    text: string;
}) {
    return (
        <div className="mb-4">
            <div className="text-[0.75rem] text-white mb-1">
                {title}
            </div>
            <div className="text-[0.65rem] leading-tight text-gray-400">
                {text}
            </div>
        </div>
    );
}
