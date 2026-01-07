import { useState } from "react";
import { useNavigate } from "react-router-dom";
function OTPpage() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const handleVerify = () => {
    if (otp.length !== 4) {
      alert("Please enter a valid 4-digit OTP");
      return;
    }
    if (otp === "1234") {
      alert("OTP Verified Successfully!");
      navigate("/onboarding");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };
  return (
    <>
      <div style={{ maxWidth: "100%", margin: "50px" }}>
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
            gap: "40px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <h3 style={{ fontSize: "40px" }}>Verify Phone Number</h3>
            <p>Please Enter The 4 Digit OTP sent On Your Number</p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <input
              type="number"
              maxLength="4"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              style={{
                margin: "auto",
                width: "400px",
                height: "40px",
                fontSize: "20px",
                textAlign: "center",
                letterSpacing: "10px",
              }}
            />
            <button
              onClick={handleVerify}
              style={{
                height: "40px",
                backgroundColor: "red",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default OTPpage;
