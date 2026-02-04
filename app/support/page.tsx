'use client';
import "./AgentCustomerService.css";

export default function AgentCustomerService() {
    return (
        <div className="page-wrapper">
            <div className="mobile-container">

                {/* HEADER */}
                <div className="header">
                    <span className="back-arrow">←</span>
                    <div className="header-title">Agent line customer service</div>
                </div>

                {/* BANNER */}
                <div className="banner">
                    <img
                        src="/assets/images/customer-support.png"   // replace with your image
                        alt="agent"
                        className="agent-img"
                    />
                </div>

                {/* BODY */}
                <div className="content" />

            </div>
        </div>
    );
}
