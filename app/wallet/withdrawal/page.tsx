"use client";

import {
    ArrowLeftOutlined,
    WalletOutlined,
    ReloadOutlined,
    CreditCardOutlined,
    PlusOutlined,
    FileTextOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import "./withdrawal.css";
import {useState} from "react";

export default function Withdraw() {
    const router = useRouter();
    const [withdrawMethod, setWithdrawMethod] = useState<"BANK" | "USDT">("BANK");
    const [withdrawAmount, setWithdrawAmount] = useState<string>("");



    return (
        <div className="withdraw-page">

            {/* HEADER */}
            <div className="withdraw-header">
                <ArrowLeftOutlined
                    className="withdraw-back"
                    onClick={() => router.push("/wallet")}
                />
                <span className="withdraw-title">Withdraw</span>
                <span
                    className="withdraw-history-link"
                    onClick={() => router.push("/wallet/withdrawalrecord")}
                >
          Withdrawal history
        </span>
            </div>

            {/* BALANCE CARD */}
            <div className="withdraw-card">
                <div className="withdraw-card-top">
                    <WalletOutlined className="withdraw-wallet-icon" />
                    <span>Available balance</span>
                </div>

                <div className="withdraw-card-amount">
                    Rs60.00
                    <ReloadOutlined />
                </div>
            </div>

            {/* METHOD SELECT */}
            <div className="withdraw-methods">
                <div
                    className={`withdraw-method ${
                        withdrawMethod === "BANK" ? "active" : ""
                    }`}
                    onClick={() => setWithdrawMethod("BANK")}
                >
                    <CreditCardOutlined />
                    <span>BANK CARD</span>
                </div>

                <div
                    className={`withdraw-method ${
                        withdrawMethod === "USDT" ? "active" : "usdt"
                    }`}
                    onClick={() => setWithdrawMethod("USDT")}
                >
                    <div className="usdt-icon">T</div>
                    <span>USDT</span>
                </div>
            </div>


            {/* ADD BANK */}
            <div className="withdraw-add">
                <div className="withdraw-add-icon">
                    <PlusOutlined />
                </div>
                <div className="withdraw-add-text">Add a bank account number</div>
            </div>

            <div className="withdraw-warning">
                Need to add beneficiary information to be able to withdraw money
            </div>

            {/* AMOUNT */}
            <div className="withdraw-input-row">
                <span className="withdraw-rs">Rs</span>
                <input
                    type="number"
                    className="withdraw-input"
                    placeholder="Please enter the amount"
                    value={withdrawAmount}
                    onChange={(e) => setWithdrawAmount(e.target.value)}
                />
            </div>


            {/* BUTTON */}
            <button className="withdraw-submit" disabled>
                Withdraw
            </button>

            {/* RULES */}
            <div className="withdraw-rules">
                <ul>
                    <li>
                        Need to bet <span>Rs 105.00</span> to be able to withdraw
                    </li>
                    <li>
                        Withdraw time <span>00:00-23:59</span>
                    </li>
                    <li>
                        Inday Remaining Withdrawal Times <span>3</span>
                    </li>
                    <li>
                        Withdrawal amount range <span>Rs110.00-Rs10,000,000.00</span>
                    </li>
                    <li>
                        Please confirm your beneficial account information before
                        withdrawing. If your information is incorrect, our company will not
                        be liable for the amount of loss
                    </li>
                    <li>
                        If your beneficial information is incorrect, please contact
                        customer service
                    </li>
                </ul>
            </div>

            {/* HISTORY EMPTY */}
            <div className="withdraw-history-empty">
                <div className="withdraw-history-title">
                    <FileTextOutlined />
                    Withdrawal history
                </div>

                <div className="withdraw-empty">
                    <div className="empty-illustration" />
                    <div className="empty-text">No data</div>
                </div>

                <button
                    className="withdraw-all-history"
                    onClick={() => router.push("/wallet/withdraw-history")}
                >
                    All history
                </button>
            </div>

        </div>
    );
}
