"use client";

import {
    ArrowLeftOutlined,
    DeleteOutlined,
    DownOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import "./notification.css";

const NOTIFICATIONS = [
    {
        id: 1,
        title: "LOGIN NOTIFICATION",
        time: "2025-02-03 02:58:22",
        desc: "Your account is logged in 2025-02-03 02:58:22",
    },
    {
        id: 2,
        title: "LOGIN NOTIFICATION",
        time: "2025-02-03 16:58:42",
        desc: "Your account is logged in 2025-02-03 16:58:42",
    },
    {
        id: 3,
        title: "LOGIN NOTIFICATION",
        time: "2025-02-03 16:54:03",
        desc: "Your account is logged in 2025-02-03 16:54:03",
    },
    {
        id: 4,
        title: "LOGIN NOTIFICATION",
        time: "2025-02-03 16:53:18",
        desc: "Your account is logged in 2025-02-03 16:53:18",
    },
    {
        id: 5,
        title: "LOGIN NOTIFICATION",
        time: "2025-02-03 13:28:16",
        desc: "Your account is logged in 2025-02-03 13:28:16",
    },
];

export default function Notification() {
    const router = useRouter();

    return (
        <div className="notify-wrapper">
            <div className="notify-page">

                {/* HEADER */}
                <div className="notify-header">
                    <ArrowLeftOutlined
                        className="notify-back"
                        onClick={() => router.back()}
                    />
                    <span className="notify-title">Notification</span>
                </div>

                {/* LIST */}
                <div className="notify-list">
                    {NOTIFICATIONS.map((n) => (
                        <div key={n.id} className="notify-item">
                            <div className="notify-left">
                <span className="notify-icon">
                  <DownOutlined />
                </span>

                                <div>
                                    <div className="notify-heading">{n.title}</div>
                                    <div className="notify-time">{n.time}</div>
                                    <div className="notify-desc">{n.desc}</div>
                                </div>
                            </div>

                            <DeleteOutlined className="notify-delete" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
