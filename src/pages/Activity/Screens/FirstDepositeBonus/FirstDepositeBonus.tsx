
import { useNavigate } from "react-router-dom";
import "./firstDepositeBonus.css"

const depositList = [
    { deposit: 100000, bonus: 10000, progress: 0 },
    { deposit: 50000, bonus: 5000, progress: 0 },
    { deposit: 30000, bonus: 3000, progress: 0 },
    { deposit: 10000, bonus: 1000, progress: 0 },
    { deposit: 5000, bonus: 500, progress: 0 },
    { deposit: 2000, bonus: 200, progress: 0 },
    { deposit: 200, bonus: 20, progress: 50 }, // example partially filled
];

const FirstDepositBonus = () => {
    const navigate = useNavigate();
    return (
        <div className="fdb-page">
            {/* ================= TOP BAR ================= */}
            <div className="fdb-topbar">
                <div className="fdb-back" onClick={() => navigate(-1)}>‹</div>
                <div className="fdb-title">First deposit bonus</div>
            </div>

            {/* ================= LIST ================= */}
            <div className="fdb-list">
                {depositList.map((item, idx) => (
                    <div key={idx} className="fdb-item">
                        <div className="fdb-row">
                            <div className="fdb-left">
                                <div className="fdb-heading">
                                    {"First deposit "}
                                    <span className={"text-(--norm_secondary-color)"}>{item.deposit.toLocaleString()}.00</span>
                                </div>
                                <div className="fdb-desc">
                                    Deposit {item.deposit.toLocaleString()}.00 for the first time
                                    and you will receive {item.bonus.toLocaleString()}.00 bonus
                                </div>
                            </div>

                            <div className="fdb-right">
                                <div className="fdb-bonus">
                                    + Rs{item.bonus.toLocaleString()}.00
                                </div>
                                {/*<button className="fdb-btn">Deposit</button>*/}
                            </div>
                        </div>

                        {/* progress */}
                        <div className="flex items-center justify-between">
                        <div className="fdb-progress">
                            <div
                                className="fdb-progress-fill"
                                style={{ width: `${item.progress}%` }}
                            />

                        </div>
                        <button className="fdb-btn">Deposit</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= RULES ================= */}
            <div className="fdb-rules">
                <h3>Activity Rules</h3>

                <ul>
                    <li>
                        Exclusive for the first recharge of the account. There is only one
                        chance. The more you recharge, the more rewards you will receive.
                        The highest reward is Rs800.00;
                    </li>
                    <li>Activities cannot be participated in repeatedly;</li>
                    <li>
                        Rewards can only be claimed manually on IOS, Android, H5, and PC;
                    </li>
                    <li>
                        The bonus (excluding the principal) given in this event requires
                        1.00 times the coding turnover (i.e. valid bets) before it can be
                        withdrawn, and the coding does not limit the platform;
                    </li>
                    <li>
                        This event is limited to normal human operations by the account
                        owner. It is prohibited to rent, use plug-ins, robots, gamble with
                        different accounts, brush each other, arbitrage, interfaces,
                        protocols, exploit loopholes, group control or other technical means
                        to participate, otherwise it will be canceled or rewards will be
                        deducted, frozen, or even blacklisted;
                    </li>
                    <li>
                        In order to avoid differences in text understanding, the platform
                        reserves the right of final interpretation of this event.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FirstDepositBonus;
