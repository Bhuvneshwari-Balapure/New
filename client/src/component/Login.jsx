import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    let api = "http://localhost:8000/api/user/login";
    try {
      if (number === "") {
        alert("Please enter your phone number");
        return;
      } else if (number.length < 10) {
        alert("Please enter a valid phone number");
        return;
      } else {
        const response = await axios.post(api, { number });
        if (response.status === 200) {
          setNumber("");
          alert("Enter OTP");
          navigate("/OTPpage");
        }
      }
    } catch (err) {
      console.log("Login error:", err.response?.data || err.message);
      alert("Something went wrong");
    }
  };
  return (
    <>
      <div>
        <img
          src="https://tse2.mm.bing.net/th/id/OIP.vmdH9szthoEw5YGmH3yMaQHaEH?pid=Api&P=0&h=180"
          alt="login"
          width="100%"
          height="350"
        />
      </div>
      <div>
        <div>
          <h3 style={{ color: "black", fontSize: "30px" }}>Welcome Back!</h3>
          <p>
            Please Enter Your Phone number to log in to your indrive account.
          </p>
        </div>
        <div
          style={{
            marginTop: "20px",
            flexDirection: "column",
            display: "flex",
            gap: "10px",
          }}
        >
          <label style={{ fontSize: "20px" }} htmlFor="phone">
            Phone Number
          </label>
          <input
            style={{
              width: "300px",
              height: "40px",
              fontSize: "18px",
              paddingLeft: "10px",
              borderRadius: "5px",
              border: "1px solid gray",
            }}
            type="tel"
            id="phone"
            name="number"
            value={number}
            required
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter Phone Number"
          />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "0 20px",
            }}
          >
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.KAcnH-3cA9tCYAdN90TtiAHaEK?pid=Api&P=0&h=180"
              height="90"
              width="200"
              alt="google"
              style={{ cursor: "pointer" }}
            />
            <img
              src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
              height="90"
              width="200"
              alt="facebook"
              style={{ cursor: "pointer" }}
            />
          </div>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              width: "100%",
              height: "40px",
              fontSize: "20px",
              borderRadius: "5px",
              cursor: "pointer",
              border: "none",
            }}
            onClick={() => handleLogin()}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
export default Login;
