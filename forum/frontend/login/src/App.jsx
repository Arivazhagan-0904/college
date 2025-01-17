import { BrowserRouter,Routes,Route} from "react-router-dom"
import FrontPage from "./pages/FrontPage/FrontPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword.jsx";
import OtpVerification from "./pages/OtpVerification/OtpVerification.jsx";
import PasswordValidation from "./pages/PassSet/PasswordValidation.jsx"
import RegisterPage from "./pages/RegisterPage/Register.jsx"
function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/OtpVerification" element={<OtpVerification/>}/>
        <Route path="/PasswordValidation" element={<PasswordValidation/>}/>
        <Route path="/RegisterPage" element={<RegisterPage/>}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App
