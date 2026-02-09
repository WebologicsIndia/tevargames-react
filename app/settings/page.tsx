"use client";

import {
    ArrowLeftOutlined,
    RightOutlined,
    CopyOutlined,
    LockOutlined,
    MailOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import "./settings.css";

export default function SettingsCenter() {
    const router = useRouter();
    const fileRef = useRef<HTMLInputElement>(null);

    const [avatar, setAvatar] = useState("/assets/avatars/avatar_1.png");
    const [nickname, setNickname] = useState("hello");
    const [editing, setEditing] = useState(false);

    const handleAvatarChange = (e: any) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setAvatar(URL.createObjectURL(file));
    };

    return (
        <div className="sc-wrapper">
            <div className="sc-page">

                {/* HEADER */}
                <div className="sc-header">
                    <ArrowLeftOutlined
                        className="sc-back"
                        onClick={() => router.back()}
                    />
                    <span className="sc-title">Settings Center</span>
                </div>

                {/* PROFILE CARD */}
                <div className="sc-card">

                    {/* AVATAR */}
                    <div
                        className="sc-avatar-row"
                        onClick={() => fileRef.current?.click()}
                    >
                        <img src={avatar} className="sc-avatar" />
                        <span className="sc-link">
              Change avatar <RightOutlined />
            </span>
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/*"
                            hidden
                            onChange={handleAvatarChange}
                        />
                    </div>

                    {/* NICKNAME */}
                    <div
                        className="sc-row"
                        onClick={() => setEditing(true)}
                    >
                        <span className="sc-label">Nickname</span>

                        {editing ? (
                            <input
                                className="sc-input"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                onBlur={() => setEditing(false)}
                                autoFocus
                            />
                        ) : (
                            <span className="sc-value yellow">
                {nickname} <RightOutlined />
              </span>
                        )}
                    </div>

                    {/* UID */}
                    <div className="sc-row">
                        <span className="sc-label">UID</span>
                        <span
                            className="sc-value yellow"
                            onClick={() => navigator.clipboard.writeText("3383626")}
                        >
              3383626 <CopyOutlined />
            </span>
                    </div>
                </div>

                {/* SECURITY */}
                <div className="sc-section">
                    <div className="sc-section-title">
                        <span className="sc-bar" /> Security information
                    </div>

                    <Item
                        navigation = "/mian/forgot"
                        icon={<LockOutlined />}
                        label="Login password"
                        right="Edit"
                    />

                    <Item
                        icon={<MailOutlined />}
                        label="Bind mailbox"
                        right="to bind"
                    />

                    <Item
                        icon={<InfoCircleOutlined />}
                        label="Updated version"
                        right="1.0.9"
                    />
                </div>

            </div>
        </div>
    );
}

/* ===== SMALL COMPONENT ===== */
const Item = ({ icon, label, right, navigation }: any) => {
    const router = useRouter();
    return (
    <div className="sc-item" onClick={() => router.push(navigation)}>
        <div className="sc-item-left">
            <span className="sc-item-icon">{icon}</span>
            <span className="sc-item-text">{label}</span>
        </div>
        <span className="sc-item-right">
      {right} <RightOutlined />
    </span>
    </div>
)};
