import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route) {
        if (route === location.pathname) {
            return true;
        }
    }

    return (
        <div className="bg-white border-b shadow-lg sticky top-0 z-50">
            <header className="flex justify-between items-center px-5 py-2 max-w-6xl mx-auto">
                <div>
                    <img
                        src={logo}
                        alt="Estate Agent Logo"
                        className="h-[80px] cursor-pointer"
                        onClick={() => navigate("/")}
                    />
                </div>
                <div>
                    <ul className="flex space-x-10">
                        <li
                            onClick={() => navigate("/")}
                            className={`cursor-pointer hover:opacity-75 py-3 font-semibold text-indigo-500 border-b-[3px] border-transparent ${
                                pathMatchRoute("/") &&
                                "text-indigo-800 border-b-indigo-500"
                            }`}>
                            Home
                        </li>
                        <li
                            onClick={() => navigate("/offers")}
                            className={`cursor-pointer hover:opacity-75 py-3 font-semibold text-indigo-500 border-b-[3px] border-transparent ${
                                pathMatchRoute("/offers") &&
                                "text-indigo-800 border-b-indigo-500"
                            }`}>
                            Offers
                        </li>
                        <li
                            onClick={() => navigate("/login")}
                            className={`cursor-pointer hover:opacity-75 py-3 font-semibold text-indigo-500 border-b-[3px] border-transparent ${
                                pathMatchRoute("/login") &&
                                "text-indigo-800 border-b-indigo-500"
                            }`}>
                            Login
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    );
}
