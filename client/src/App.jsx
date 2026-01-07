import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import OTPpage from "./component/OTPpage";
import Onboarding from "./component/Onboarding";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <>
                <SignUp />
              </>
            }
          />
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/OTPpage" element={<OTPpage />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
