import "./activity.css";
import {useNavigate} from "react-router-dom";

const activityIcon = [
    {
        name: "Activity Award",
        imageUrl: "/assets/icons/activityReward.png",
        navigation: "/dailytask"
    },
    {
        name: "Betting Rebate",
        imageUrl: "/assets/icons/BettingRebate.png",
        navigation: "/rebate"
    },
    {
        name: "Super Jackpot",
        imageUrl: "/assets/icons/superJackpot.png",
        navigation: "/jackpot"
    },
    {
        name: "New member gift package",
        imageUrl: "/assets/icons/memberGift.png",
        navigation: "/newGift"
    },
]
const activityCard = [
    {
        title: "Gifts",
        description:"Enter the redemption code to receive gift rewards",
        imageUrl: "/assets/images/signInBanner.png",
        navigation: "/redenvelopes"
    },
    {
        title: "Attendance bonus",
        description:"The more consecutive days you sign in, the higher the reward will be.",
        imageUrl: "/assets/images/giftRedeem.png",
        navigation: "/attendance"
    },
]
const activityBanner = [
    {
        title: "💸 First Deposit Bonus 💸",
        imageUrl: "/assets/activitybanner/activity-banner1.jpg",
        navigation: "/first_deposit_bonus"
    },
    {
        title: "🔥 New Hot Offer 🔥",
        imageUrl: "/assets/activitybanner/activity-banner2.jpg",
        navigation: "/newHot"
    },
    {
        title: "💰 Get Daily Check-in Bonus 💰",
        imageUrl: "/assets/activitybanner/activity-banner3.jpg",
        navigation: "/attendance"
    },
    {
        title: "🚀Aviator Fly High & Win Big🚀",
        imageUrl: "/assets/activitybanner/activity-banner4.jpg",
        navigation: "/aviator_betting_reward"
    },
    {
        title: "▶️ Youtube Creative Video ▶️",
        imageUrl: "/assets/activitybanner/activity-banner5.jpg",
        navigation: "/youtube"
    },
    {
        title: "✨Member Wingo Winning Streak✨",
        imageUrl: "/assets/activitybanner/activity-banner6.jpg",
        navigation: "/winzo"
    },
    {
        title: "⚙️ Mission Bonus ⚙️",
        imageUrl: "/assets/activitybanner/activity-banner7.jpg",
        navigation: "/dailytask"
    },

]

const Activity = () => {
    const navigate = useNavigate();
    return (
        <div className={"activity-page"}>
            <img src="/whitehjj.png" alt="Logo" className="activity-logo" />
            <div className={"activity-header"}>
                <h1>Activity</h1>
                <p>
                    Please remember to follow the event page <br />
                    We will launch user feedback activities from time to time
                </p>
            </div>

            {/* ICON GRID */}
            <div className="activity-icons">
                { activityIcon.map((item) => (
                <div className="icon-item" onClick={() => navigate(item.navigation)}>
                    <img alt={item.name} src={item.imageUrl} className={"pb-[0.29333rem]"}/>
                    <span>{item.name}</span>
                </div>
                ))}
            </div>

            {/* CARDS */}
            <div className="activity-card-wrapper">
                {activityCard.map((item) => (
                    <div className="activity-card" onClick={() => navigate(item.navigation)}>
                        <img alt={item.title} src={item.imageUrl}/>
                        <div className="card-content">
                            <text className={"card-title"}>{item.title}</text>
                            <p className={"card-description"}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* BANNER */}
            <div className="activity-banner-wrapper">
            {activityBanner.map((item) => (
                <div onClick={() => navigate(item.navigation)}>
                    <img alt={item.title} src={item.imageUrl} className="activity-banner"/>
                    <div className="activity-banner-text">
                        {item.title}
                    </div>
                </div>
            ))}
             </div>
            <div className="activity-bottom-text">No More</div>
        </div>
    );
};

export default Activity;
