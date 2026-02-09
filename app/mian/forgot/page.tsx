"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    ArrowLeftOutlined,
    LockOutlined,
    EyeInvisibleOutlined,
    EyeOutlined,
} from "@ant-design/icons";
import "./change-password.css";

export default function ChangePassword() {
    const router = useRouter();

    const [showOld, setShowOld] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    return (
        <div className="cp-wrapper">
            <div className="cp-page">

                {/* NAVBAR */}
                <div className="cp-navbar">
                    <ArrowLeftOutlined
                        className="cp-back"
                        onClick={() => router.back()}
                    />
                    <div className="cp-title">Change login password</div>
                </div>

                {/* OLD PASSWORD */}
                <label className="cp-label cp-label-primary">
                    <LockOutlined /> Login password
                </label>

                <div className="cp-input-row">
                    <input
                        type={showOld ? "text" : "password"}
                        placeholder="Login password"
                        className="cp-input"
                    />
                    <span onClick={() => setShowOld(!showOld)} className="cp-eye">
            {showOld ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
                </div>

                {/* NEW PASSWORD */}
                <label className="cp-label cp-label-primary">
                    <LockOutlined /> New login password
                </label>

                <div className="cp-input-row">
                    <input
                        type={showNew ? "text" : "password"}
                        placeholder="New login password"
                        className="cp-input"
                    />
                    <span onClick={() => setShowNew(!showNew)} className="cp-eye">
            {showNew ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
                </div>

                {/* CONFIRM PASSWORD */}
                <label className="cp-label cp-label-primary">
                    <LockOutlined /> Confirm new password
                </label>

                <div className="cp-input-row">
                    <input
                        type={showConfirm ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="cp-input"
                    />
                    <span onClick={() => setShowConfirm(!showConfirm)} className="cp-eye">
            {showConfirm ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </span>
                </div>

                {/* SUPPORT */}
                <div
                    className="cp-support"
                    onClick={() => router.push("/customer-service")}
                >
                    Contact customer service →
                </div>

                {/* BUTTON */}
                <div className="cp-btn-wrapper">
                    <button className="cp-primary-btn">
                        Save changes
                    </button>
                </div>

            </div>
        </div>
    );
}
