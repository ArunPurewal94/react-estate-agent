import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
