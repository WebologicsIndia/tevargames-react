"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import "./tutorial.css";

const RULES = [
    {
        no: "01",
        text:
            "There are 6 subordinate levels in inviting friends, if A invites B, then B is a level 1 subordinate of A. If B invites C, then C is a level 1 subordinate of B and also a level 2 subordinate of A. If C invites D, then D is a level 1 subordinate of C, at the same time a level 2 subordinate of B and also a level 3 subordinate of A.",
    },
    {
        no: "02",
        text:
            "When inviting friends to register, you must send the invitation link provided or enter the invitation code manually so that your friends become your level 1 subordinates.",
    },
    {
        no: "03",
        text:
            "The invitee registers via the inviter's invitation code and completes the deposit, shortly after that the commission will be received immediately.",
    },
    {
        no: "04",
        text:
            "The calculation of yesterday's commission starts every morning at 01:00. After the commission calculation is completed, the commission is rewarded to the wallet and can be viewed through the commission collection record.",
    },
    {
        no: "05",
        text:
            "Commission rates vary depending on your agency level on that day.\n\nNumber of Teams: How many downline deposits you have to date.\nTeam Deposits: The total number of deposits made by your downline in one day.\nTeam Deposit: Your downline deposits within one day.",
    },
    {
        no: "06",
        text:
            "The commission percentage depends on the membership level. The higher the membership level, the higher the bonus percentage. Different game types also have different payout percentages.\n\nThe commission rate is specifically explained as follows",
        link: "View rebate ratio >>",
    },
    {
        no: "07",
        text:
            "TOP20 commission rankings will be randomly awarded with a separate bonus",
    },
    {
        no: "08",
        text:
            "The final interpretation of this activity belongs to Tiranga Live",
    },
];

const TABLE = [
    ["L0", "0", "0", "0"],
    ["L1", "10", "500K", "100K"],
    ["L2", "15", "1,000K", "200K"],
    ["L3", "20", "2.50M", "500K"],
    ["L4", "25", "3.50M", "700K"],
    ["L5", "30", "5M", "1,000K"],
    ["L6", "50", "10M", "2M"],
    ["L7", "100", "100M", "20M"],
    ["L8", "500", "500M", "100M"],
    ["L9", "1000", "1,000M", "200M"],
    ["L10", "5000", "1,500M", "300M"],
];

export default function RulesPage() {
    const router = useRouter();

    return (
        <div className="rules-page">

            {/* HEADER */}
            <div className="rules-header">
                <ArrowLeftOutlined
                    className="rules-back"
                    onClick={() => router.back()}
                />
                <span className="rules-title">Rules</span>
            </div>

            {/* TITLE */}
            <div className="rules-hero">
                <div className="rules-main-title">
                    【Promotion partner】 program
                </div>
                <div className="rules-sub-title">
                    This activity is valid for a long time
                </div>
            </div>

            {/* RULES */}
            {RULES.map((rule) => {
                return (
                    <div key={rule.no}>
                        <div className="rule-block">
                            <div className="rule-no">{rule.no}</div>

                            <div className="rule-text">
                                {rule.text.split("\n").map((t, i) => (
                                    <p key={i}>{t}</p>
                                ))}

                                {rule.link && (
                                    <span className="rule-link">{rule.link}</span>
                                )}
                            </div>
                        </div>

                        {rule.no == "05" && (
                            <div className="rules-table">
                                <div className="table-header">
                                    <span>Rebate level</span>
                                    <span>Team Number</span>
                                    <span>Team Betting</span>
                                    <span>Team Deposit</span>
                                </div>

                                {TABLE.map((row) => (
                                    <div key={row[0]} className="table-row">
                                        <span className="level">{row[0]}</span>
                                        <span>{row[1]}</span>
                                        <span>{row[2]}</span>
                                        <span>{row[3]}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )})};
        </div>
    );

}
