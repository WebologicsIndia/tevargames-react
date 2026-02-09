"use client";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import "./feedback.css";

export default function Feedback() {
    const router = useRouter();
    const [text, setText] = useState("");

    return (
        <div className="fb-wrapper">
            <div className="fb-page">

                {/* HEADER */}
                <div className="fb-header">
                    <ArrowLeftOutlined
                        className="fb-back"
                        onClick={() => router.back()}
                    />
                    <span className="fb-title">Feedback</span>
                </div>

                {/* TEXT INPUT */}
                <div className="fb-input-wrapper">
          <textarea
              className="fb-textarea"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Welcome to feedback, please give feedback-please describe the problem in detail when providing feedback, preferably attach a screenshot of the problem you encountered, we will immediately process your feedback!"
          />
                </div>

                {/* CENTER CONTENT */}
                <div className="fb-center">
                    <div className="fb-highlight">
                        Send helpful feedback
                    </div>
                    <div className="fb-sub">
                        Chance to win Mystery Rewards
                    </div>

                    <img
                        src="/assets/images/feedbackImg.png"
                        alt="feedback"
                        className="fb-image"
                    />
                </div>

                {/* SUBMIT */}
                <button className="fb-submit">
                    Submit
                </button>

            </div>
        </div>
    );
}
