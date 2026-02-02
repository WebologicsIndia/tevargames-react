"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import "./commission-details.css";

export default function CommissionDetails() {
    const router = useRouter();

    return (
        <div className="commission-page">

            {/* HEADER */}
            <div className="commission-header">
                <ArrowLeftOutlined
                    className="commission-back"
                    onClick={() => router.back()}
                />
                <span className="commission-title">Commission Details</span>
            </div>

            {/* DATE */}
            <div className="commission-date">
                02/02/2026
            </div>

            {/* STATUS */}
            <div className="commission-status">
                <div className="status-title">Settlement successful</div>
                <div className="status-time">2026-02-02 23:59:59</div>
                <div className="status-desc">
                    The commission has been automatically credited to your balance
                </div>
            </div>

            {/* INFO ROWS */}
            <div className="commission-info">
                <InfoRow label="Number of bettors" value="0 People" highlight />
                <InfoRow label="Bet amount" value="0" />
                <InfoRow label="Commission payout" value="0" />
                <InfoRow label="date" value="2026-02-02 00:00:00" highlight />
            </div>

        </div>
    );
}

const InfoRow = ({
                     label,
                     value,
                     highlight,
                 }: {
    label: string;
    value: string;
    highlight?: boolean;
}) => (
    <div className="commission-row">
        <span className="row-label">{label}</span>
        <span className={`row-value ${highlight ? "highlight" : ""}`}>
      {value}
    </span>
    </div>
);
