"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import "./beginners-guide.css";

const GUIDE_CONTENT = [
    {
        title: "1. How to Register",
        type: "bullets",
        items: [
            "Fill Your Phone Number",
            "Set Your Own Password (8 letters)",
            "Confirm The Password",
            "Fill Your Recommendation Code",
            "Click I Have Read And Agree",
            "Click Register",
        ],
    },
    {
        title: "2. How To Betting WinGo",
        type: "mixed",
        paragraphs: [
            "Click start game then choose 1 minute, 3 minute, 5 minute or 10 minute.",
        ],
        bullets: [
            "Green: result shows 1, 3, 7, 9",
            "Red: result shows 2, 4, 6, 8",
            "Violet: result shows 0 or 5",
            "Small: result shows 0, 1, 2, 3, 4",
            "Big: result shows 5, 6, 7, 8, 9",
        ],
        footer: [
            "This company is not allowed to place illegal betting.",
            "Exp: Betting (Big & Small together) or (Red & Green together) is not allowed.",
        ],
    },
    {
        title: "3. How to Recharge",
        type: "paragraph",
        paragraphs: [
            "Click Wallet Icon → Click Recharge Button. We provide multiple recharge methods such as Bank Transfer and E-Wallet.",
        ],
    },
    {
        title: "4. How to Withdraw",
        type: "bullets",
        items: [
            "Click Wallet Icon",
            "Click Withdraw Button",
            "Enter Withdraw Amount",
            "Make Sure Total Bet is Zero",
            "Select or Add Bank Account",
            "Input Amount to Withdraw",
            "Input Login Password",
        ],
    },
    {
        title: "5. Orders",
        type: "paragraph",
        paragraphs: [
            "After betting is complete, click My Game Record to view bet history and chart trends.",
        ],
    },
    {
        title: "7. Promotion",
        type: "mixed",
        paragraphs: [
            "Invite users using your referral link. If they recharge, you will receive commission.",
            "Level 1 earns 0.6% and Level 2 earns 0.18% from each transaction.",
            "Rewards are added daily at 00:30 AM. Additional bonuses apply when targets are reached.",
        ],
        bullets: [
            "Click Sharing Invitation Poster to view barcode",
        ],
    },
    {
        title: "8. Account Security",
        type: "bullets",
        items: [
            "Go to My Icon → Settings",
            "Click Login Password",
            "Re-enter Old Password",
            "Enter New Password and Confirm",
            "Click Save Changes",
        ],
    },
    {
        title: "9. Forgot Password",
        type: "paragraph",
        paragraphs: [
            "If you forget your login password, please contact customer service immediately.",
        ],
    },
    {
        title: "10. App Download",
        type: "paragraph",
        paragraphs: [
            "Click the download icon in the top-right corner to download the app.",
        ],
    },
    {
        title: "11. About",
        type: "paragraph",
        paragraphs: [
            "Click About to view Privacy Policy and Risk Disclosure Agreement.",
        ],
    },
    {
        title: "12. Gift",
        type: "bullets",
        items: [
            "Click Gift Exchange",
            "Enter Redemption Code",
            "Click Receive",
        ],
    },
];


export default function BeginnersGuide() {
    const router = useRouter();

    return (
        <div className="bg-wrapper">
            <div className="bg-page">

                {/* HEADER */}
                <div className="bg-header">
                    <ArrowLeftOutlined
                        className="bg-back"
                        onClick={() => router.back()}
                    />
                    <span className="bg-title">Beginner&apos;s Guide</span>
                </div>

                {/* CONTENT */}
                <div className="bg-content">
                    {GUIDE_CONTENT.map((section, idx) => (
                        <div key={idx} className="bg-section">
                            <div className="bg-section-title">{section.title}</div>

                            {/* Paragraphs */}
                            {section.paragraphs?.map((p, i) => (
                                <div key={i} className="bg-paragraph">
                                    {p}
                                </div>
                            ))}

                            {/* Bullets */}
                            {section.items?.map((item, i) => (
                                <div key={i} className="bg-bullet">
                                    - {item}
                                </div>
                            ))}

                            {/* Mixed bullets */}
                            {section.bullets?.map((item, i) => (
                                <div key={i} className="bg-bullet">
                                    - {item}
                                </div>
                            ))}

                            {/* Footer paragraphs */}
                            {section.footer?.map((p, i) => (
                                <div key={i} className="bg-paragraph">
                                    {p}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
