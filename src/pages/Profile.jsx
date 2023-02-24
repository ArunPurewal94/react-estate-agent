import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default function Profile() {
    const auth = getAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    });
    const { name, email } = formData;
    const [changeDetail, setChangeDetail] = useState(false);

    function onLogout() {
        auth.signOut();
        navigate("/");
    }

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    async function onSubmit() {
        try {
            if (auth.currentUser.displayName !== name) {
                await updateProfile(auth.currentUser, {
                    displayName: name,
                });
                const docRef = doc(db, "users", auth.currentUser.uid);
                await updateDoc(docRef, {
                    name,
                });
                Swal.fire({
                    icon: "success",
                    title: "Awesome 😇",
                    text: "Profile Details Updated.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Could not be updated 😢",
            });
        }
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
                            className={`w-full px-4 py-2 text-gray-700 bg-white border-indigo-300 focus:border-indigo-500 rounded transition ease-in-out ${
                                changeDetail &&
                                "bg-gray-200 focus:bg-gray-200 text-gray-600"
                            }`}
                            type="text"
                            value={name}
                            id="name"
                            disabled={!changeDetail}
                            placeholder="Name.."
                            onChange={onChange}
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
                                onClick={() => {
                                    changeDetail && onSubmit();
                                    setChangeDetail((prevState) => !prevState);
                                }}
                                className="mt-5 bg-indigo-500 text-white px-7 py-3 rounded text-sm font-medium shadow-lg hover:bg-indigo-400 transition duration-200 ease-in hover:shadow-xl active:bg-indigo-800"
                                type="button">
                                {changeDetail ? "Apply Change" : "Edit"}
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
