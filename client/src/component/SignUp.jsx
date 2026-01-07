import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function SignUp() {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const handleSignUp = async () => {
    let api = "http://localhost:8000/api/user/create";
    try {
      const response = await axios.post(api, { number });
      if (response.status === 200) {
        setNumber("");
        alert("signup successful");
      }
      navigate("/login");
    } catch (err) {
      console.log("Sign up error:", err);
    }
  };
  return (
    <>
      <img
        src="https://techcrunch.com/wp-content/uploads/2023/11/81752CC3-0EA6-4B02-A8FB-D98234DEFDA5.jpeg?w=1024"
        height="300"
        width="100%"
        alt="Sign Up Illustration"
      />
      <div className="signUp">
        <div>
          <h2 style={{ color: "black", fontSize: "30px" }}>
            Join Indrive Today
          </h2>
          <p>
            Let's get you started sign up with your number to create your
            indrive account.{" "}
          </p>
        </div>
        <div>
          <div
            style={{
              marginBottom: "10px",
              flexDirection: "column",
              display: "flex",
              gap: 5,
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
              placeholder="Enter Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <input type="checkbox" id="terms" name="terms" /> I agree to the{" "}
            <a style={{ color: "red" }} href="#">
              Terms of Service
            </a>
          </div>
          <div>
            <h3>
              Already Have an Account?{" "}
              <a
                onClick={() => navigate("/login")}
                style={{ color: "blue" }}
                href="/login"
              >
                Sign in
              </a>
            </h3>
          </div>
        </div>
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
          onClick={() => handleSignUp()}
        >
          Singup
        </button>
      </div>
    </>
  );
}
export default SignUp;
