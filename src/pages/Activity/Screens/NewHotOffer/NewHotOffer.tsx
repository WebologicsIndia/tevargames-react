import React from "react";
import { useNavigate } from "react-router-dom";
import "./newHotOffer.css"

const NewHotOffer = () => {
    const navigate = useNavigate();

    return (
        <div className="newhot-page">
            {/* ================= TOP BAR ================= */}
            <div className="newhot-topbar">
                <div className="newhot-back" onClick={() => navigate(-1)}>‹</div>
                <div className="newhot-title">Activity details</div>
            </div>

            {/* ================= TOP IMAGE ================= */}
            <img src = "/assets/activitybanner/activity-banner2.jpg" className="newhot-top-image"/>

            {/* ================= SECTION TITLE ================= */}
            <div className="newhot-hot-title">
                🔥 New Hot Offer 🔥
            </div>


            {/* ================= BIG IMAGE ================= */}
            <img src="/assets/activity/new_hot.jpg" className="newhot-big-image"/>
        </div>
    );
};

export default NewHotOffer;
