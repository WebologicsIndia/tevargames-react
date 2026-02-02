"use client"
import {
    ArrowLeftOutlined,
    WalletOutlined,
    ReloadOutlined,
    FileTextOutlined,
    CloseOutlined
} from "@ant-design/icons";

import "./deposit.css";
import {useState} from "react";
import { useRouter } from "next/navigation";


const AMOUNTS = ["100", "200", "500", "1K", "5K", "10K"];

export default function Deposit() {
    const router = useRouter();
    const [amount, setAmount] = useState<number>(1000);
    const [activeIndex, setActiveIndex] = useState<number>(3);
    return (
        <div className="deposit-page">

            {/* HEADER */}
            <div className="deposit-header">
                <ArrowLeftOutlined className="deposit-back" />
                <span className="deposit-title">Deposit</span>
                <div className="deposit-history" onClick={() => router.push("/wallet/rechargerecord")}>Deposit history</div>
            </div>

            {/* BALANCE CARD */}
            <div className="deposit-card">
                <div className="deposit-card-top">
                    <WalletOutlined className="deposit-wallet-icon" />
                    <span className="deposit-card-label">Balance</span>
                </div>

                <div className="deposit-card-amount">
                    Rs60.00
                    <ReloadOutlined className="deposit-refresh" />
                </div>
            </div>

            {/* AMOUNT TITLE */}
            <div className="deposit-section-title">
                <WalletOutlined />
                <span>Deposit amount</span>
            </div>

            {/* QUICK AMOUNTS */}
            <div className="deposit-amount-grid">
                {AMOUNTS.map((amt, i) => {
                    const numericValue =
                        amt.includes("K") ? parseInt(amt) * 1000 : parseInt(amt);

                    return (
                        <button
                            key={amt}
                            className={`deposit-amount-btn ${
                                activeIndex === i ? "active" : ""
                            }`}
                            onClick={() => {
                                setActiveIndex(i);
                                setAmount(numericValue);
                            }}
                        >
                            <span>Rs</span>
                            {amt}
                        </button>
                    );
                })}
            </div>


            {/* INPUT */}
            <div className="deposit-input-row">
                <span className="deposit-rs">Rs</span>
                <span className="deposit-input-value">{amount}</span>

                <CloseOutlined
                    className="deposit-clear cursor-pointer"
                    onClick={() => {
                        setAmount(0);
                        setActiveIndex(-1);
                    }}
                />
            </div>


            {/* SUBMIT */}
            <button
                className="deposit-submit"
                disabled={!amount}
                onClick={() => router.push("/wallet/manual_upi")}
            >
                Deposit
            </button>

            {/* INSTRUCTIONS */}
            <div className="deposit-instructions-title">
                <FileTextOutlined />
                <span>Recharge instructions</span>
            </div>

            <div className="deposit-instructions-box">
                <ul>
                    <li>If the transfer time is up, please fill out the deposit form again.</li>
                    <li>The transfer amount must match the order you created, otherwise the money cannot be credited successfully.</li>
                    <li>If you transfer the wrong amount, our company will not be responsible for the lost amount!</li>
                    <li>Note: do not cancel the deposit order after the money has been transferred.</li>
                </ul>
            </div>

        </div>
    );
}
