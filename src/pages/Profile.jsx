import { useState } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router";

export default function Profile() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    });
    const { name, email } = formData;

    function onLogout() {
        auth.signOut();
        navigate("/");
    }

    return (
        <>
            <section className="mx-auto flex flex-col items-center justify-center">
                <h1 className="text-2xl mt-6 text-center font-bold text-indigo-500">
                    My Profile
                </h1>
                <div className="w-full md:w-2/3 mt-6 px-3">
                    <form className="space-y-5">
                        {/* Name Input */}
                        <input
                            className="w-full px-4 py-2 text-gray-700 bg-white border-indigo-300 focus:border-indigo-500 rounded transition ease-in-out"
                            type="text"
                            value={name}
                            id="name"
                            disabled
                            placeholder="Name.."
                        />
                        <input
                            className="w-full px-4 py-2 text-gray-700 bg-white border-indigo-300 focus:border-indigo-500 rounded transition ease-in-out"
                            type="text"
                            value={email}
                            id="email"
                            disabled
                            placeholder="Email.."
                        />
                        <div className="flex items-center justify-between whitespace-nowrap">
                            <button
                                className="mt-5 bg-indigo-500 text-white px-7 py-3 rounded text-sm font-medium shadow-lg hover:bg-indigo-400 transition duration-200 ease-in hover:shadow-xl active:bg-indigo-800"
                                type="button">
                                Edit
                            </button>
                            <button
                                onClick={onLogout}
                                className="mt-5 bg-red-500 text-white px-7 py-3 rounded text-sm font-medium shadow-lg hover:bg-red-400 transition duration-200 ease-in hover:shadow-xl active:bg-red-800"
                                type="button">
                                Sign Out
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
