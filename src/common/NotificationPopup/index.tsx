import { useEffect } from "react";
import "./notification.css";


type Props = {
    open: boolean;
    onClose: () => void;
};

const NotificationPopup = ({ open, onClose }: Props) => {
    // disable background scroll
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="notification-overlay show">
            <div className="notification-modal">
                <h2 className="notification-title">Notification</h2>

                <div className="notification-content">
                    <p className="highlight">
                        Login on Cricket with same ID & Password 🔐 and get 10% extra recharge bonus 💰!
                       <br />
                        क्रिकेट पर वही ID और पासवर्ड 🔐 से लॉगिन करो और पाओ 10% एक्स्ट्रा बोनस 💰!
                    </p>



                    <p className="text">
                        📢 <b>Important Announcement:</b><br/>
                        Beware of imitations! Dear Valued Members,
                        We have noticed an increase in imitation of our PLATFORM, Tevar Games.
                        To ensure you are on the legitimate
                        <span className="link">Tevar Games website</span>
                        , please verify authenticity through our official channels.
                        Stay vigilant and report any suspicious activity.
                        Thank you for your continued trust and support!
                    </p>
                    <p className="text mt-1">
                        If you want to participate, keep inviting and make your own team for more chances of winning.
                        Click the link below for more information
                    </p>
                </div>

                <button className="confirm-btn" onClick={onClose}>Confirm</button>
            </div>
        </div>
    );
};

export default NotificationPopup;
