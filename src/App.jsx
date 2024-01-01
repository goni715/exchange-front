import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import MyExchangesPage from "./pages/MyExchangesPage.jsx";

const App = () => {
    return (
        <>
          <BrowserRouter>
              <Routes>
                  <Route exact path="/" element={<HomePage/>}/>
                  <Route exact path="/contact" element={<ContactPage/>}/>
                  <Route exact path="/account/exchanges" element={<MyExchangesPage/>}/>
                  <Route exact path="/login" element={<LoginPage/>}/>
                  <Route exact path="/register" element={<RegisterPage/>}/>
                  <Route exact path="/forgot-password" element={<ForgotPasswordPage/>}/>
                  <Route exact path="/reset-password/:email/:token" element={<ResetPasswordPage/>}/>
              </Routes>
          </BrowserRouter>
        </>
    );
};

export default App;