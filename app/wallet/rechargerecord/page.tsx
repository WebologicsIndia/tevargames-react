"use client";

import { ArrowLeftOutlined, CopyOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./rechargerecord.css";

const PAYMENT_TYPES = ["All", "UPI-APP", "UPI-Manual", "Bank"];

const PAYMENTS = [
    {
        id: 1,
        amount: 100,
        type: "UPI-Manual",
        status: "Complete",
        time: "2025-05-14 2:42:29 AM",
        order: "2025411334524809241249",
    },
    {
        id: 2,
        amount: 500,
        type: "UPI-APP",
        status: "Pending",
        time: "2025-05-15 10:12:11 AM",
        order: "2025411334524809241250",
    },
    {
        id: 3,
        amount: 1000,
        type: "Bank",
        status: "Complete",
        time: "2025-05-16 8:10:00 PM",
        order: "2025411334524809241251",
    },
];

export default function DepositHistory() {
    const router = useRouter();
    const [activeType, setActiveType] = useState("All");

    const filteredPayments =
        activeType === "All"
            ? PAYMENTS
            : PAYMENTS.filter((p) => p.type === activeType);

    return (
        <div className="history-page">

            {/* HEADER */}
            <div className="history-header">
                <ArrowLeftOutlined
                    className="history-back"
                    onClick={() => router.push("/wallet")}
                />
                <span className="history-title">Deposit history</span>
            </div>

            {/* PAYMENT TYPE SCROLL */}
            <div className="payment-type-scroll">
                {PAYMENT_TYPES.map((type) => (
                    <button
                        key={type}
                        className={`payment-type ${
                            activeType === type ? "active" : ""
                        }`}
                        onClick={() => setActiveType(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* FILTER INFO */}
            <div className="filter-row">
                <span>{activeType}</span>
                <span>2024-5-20 / 2024-5-31</span>
            </div>

            {/* PAYMENT LIST */}
            {filteredPayments.length === 0 ? (
                <div className="no-records">No records found</div>
            ) : (
                filteredPayments.map((payment) => (
                    <div key={payment.id} className="payment-card">

                        {/* STATUS */}
                        <div className="status-row">
                            <span className="status-pill">Deposit</span>
                            <span
                                className={
                                    payment.status === "Complete"
                                        ? "status-complete"
                                        : "status-pending"
                                }
                            >
                {payment.status} &gt;
              </span>
                        </div>

                        <div className="divider" />

                        {/* DETAILS */}
                        <div className="detail-row">
                            <span>Balance</span>
                            <span className="amount">Rs{payment.amount}.00</span>
                        </div>

                        <div className="detail-row">
                            <span>Type</span>
                            <span>{payment.type}</span>
                        </div>

                        <div className="detail-row">
                            <span>Time</span>
                            <span>{payment.time}</span>
                        </div>

                        <div className="detail-row">
                            <span>Order number</span>
                            <span className="order">
                {payment.order}
                                <CopyOutlined />
              </span>
                        </div>

                    </div>
                ))
            )}

            <div className="no-more">No more</div>
        </div>
    );
}
