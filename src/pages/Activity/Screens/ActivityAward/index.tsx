import "./activity-award.css";
import {WalletFilled} from "@ant-design/icons";


const activityAward = [
    {
        mission: "Daily Mission",
        status: "Unfinished",
        button: "to Complete",
        currentDeposit: 0,
        requiredDeposite: 1000,
        awardAmount:"RS 38.00",
        description: "If your cumulative deposit reaches the maximum of 100,000 rupees on that day, you can claim the entire bonus"
    },
    {
        mission: "Daily Mission",
        status: "Unfinished",
        button: "to Complete",
        currentDeposit: 0,
        requiredDeposite: 5000,
        awardAmount: "RS. 128.00",
        description: "If your cumulative deposit reaches the maximum of 100,000 rupees on that day, you can claim the entire bonus"
    },
    {
        mission: "Daily Mission",
        status: "Unfinished",
        button: "to Complete",
        currentDeposit: 0,
        requiredDeposite: 10000,
        awardAmount: "RS. 208.00",
        description: "If your cumulative deposit reaches the maximum of 100,000 rupees on that day, you can claim the entire bonus"
    },
    {
        mission: "Daily Mission",
        status: "Unfinished",
        button: "to Complete",
        currentDeposit: 0,
        requiredDeposite: 50000,
        awardAmount: "RS. 508.00",
        description: "If your cumulative deposit reaches the maximum of 100,000 rupees on that day, you can claim the entire bonus"
    },
    {
        mission: "Daily Mission",
        status: "Unfinished",
        button: "to Complete",
        currentDeposit: 0,
        requiredDeposite: 100000,
        awardAmount: "RS. 808.00",
        description: "If your cumulative deposit reaches the maximum of 100,000 rupees on that day, you can claim the entire bonus"
    },
];

//TODO: Reward History screen Needed

const ActivityAward = () => {
    return (
        <div className={"award-page"}>
            {/* TOP BAR */}
            <div className="award-topbar">
                <button className="back-btn">←</button>
                <div className="record-btn">
                    ⏱ <span className="text-[0.35rem]">Collection record</span>
                </div>
            </div>

            {/* HEADER BANNER */}
            <div className="award-banner">
                <text className="banner-heading">Activity Award</text>
                <text className="banner-text"> Complete weekly/daily tasks to receive <br />
                    rich rewards Weekly rewards cannot be <br />
                    accumulated to the next week, and daily <br />
                        rewards cannot be accumulated to the next day.</text>

            </div>

            {/* LIST */}
            <div className = "award-wrapper">
                {activityAward.map((item) => (
                    <div className="award-card">
                        <div >
                        <div className="card-header">
                            <div className="card-header-title">{item.mission}</div>
                            <text className="card-status-text">{item.status}</text>
                        </div>
                        <div className= "card-bottom-line"/>
                            </div>
                        <div className="recharge-bonus">
                            <text className="recharge-bonus-title">Recharge Bonus</text>
                            <div className="recharge-bonus-data">{`${item.currentDeposit}/${item.requiredDeposite}`}</div>
                        </div>
                        <div className="award-card-description">{item.description}</div>
                        <div className="award-amount-wrapper">
                            <text className="award-amount-title">Award Amount</text>
                            <div className="award-amount-amount">
                                <WalletFilled />
                                <text className="award-amount-text">{item.awardAmount}</text>
                            </div>
                        </div>
                        <div className="button-wrapper">
                            {item.button}
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default ActivityAward;
