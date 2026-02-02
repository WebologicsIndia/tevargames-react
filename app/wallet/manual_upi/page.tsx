"use client";

import { CopyOutlined } from "@ant-design/icons";
import Image from "next/image";
import "./manual_upi.css";

export default function UpiDeposit() {
    const upiId = "abcdss";

    const copyUpi = async () => {
        await navigator.clipboard.writeText(upiId);
        alert("UPI ID copied");
    };

    return (
        <div className="upi-page">

            {/* TITLE */}
            <h2 className="upi-title">Send Rs 100 on</h2>

            {/* QR */}
            <div className="upi-qr-box">
                <Image
                    src="/assets/wallet/qr.jpg"
                    alt="UPI QR"
                    width={220}
                    height={220}
                />
            </div>

            {/* UPI ID */}
            <div className="upi-id-box" onClick={copyUpi}>
                <span>UPI ID: {upiId}</span>
                <CopyOutlined />
            </div>

            {/* APPS */}
            <div className="upi-app-grid">
                <UpiApp name="GPay" img="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" className={"bg-gradient-to-br from-[#e8f0fe] to-[#d2e3fc] border border-[#c2d7f7]"}/>
                <UpiApp name="PhonePe" img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PhonePe_Logo.svg/512px-PhonePe_Logo.svg.png" className={"bg-gradient-to-br from-[#e8d5f5] to-[#d4b8eb]"}/>
                <UpiApp name="Paytm" img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/512px-Paytm_Logo_%28standalone%29.svg.png" className={"bg-gradient-to-br from-[#d4f1fc] to-[#b8e6f7]"}/>
                <UpiApp name="BHIM" img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/BHIM_SVG_Logo.svg/1276px-BHIM_SVG_Logo.svg.png" className={"bg-gradient-to-br from-[#fde5d8] to-[#fcd5c0]"}/>
            </div>

            <div className="upi-app-full ">
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/512px-UPI-Logo-vector.svg.png" alt="UPI" width={84} height={84} />
            </div>

            {/* UTR */}
            <div className="utr-box">
                <label>UPI Ref. No.</label>
                <input placeholder="Enter Your UTR here..." />
                <button>Submit</button>
            </div>

            {/* STEPS */}
            <div className="steps-box">
                <h3>Step by Step Process</h3>
                <ol>
                    <li>Open your UPI app and click on the "Send on upi id" option.</li>
                    <li>Enter our UPI ID as a receiver and the amount you want to send.</li>
                    <li>Click on the "Send" button to complete the transaction.</li>
                    <li>Copy the UPI Ref. No. and paste it in our UPI Ref. No field</li>
                    <li>Click on the "Submit" button to complete the process.</li>
                </ol>
            </div>

        </div>
    );
}

const UpiApp = ({ img, name, className }: any) => (
    <div className={`upi-app ${className}`}>
        <Image src={img} alt={name} width={80} height={32} />
    </div>
);
