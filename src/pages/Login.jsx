import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import login from "../assets/login-image.jpg";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const { email, password } = formData;

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        try {
            const auth = getAuth();
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            if (userCredential.user) {
                navigate("/");
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong 😢",
            });
        }
    }

    return (
        <section>
            <h1 className="text-2xl mt-6 text-center font-bold text-indigo-500">
                Login
            </h1>
            <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
                <div className="md:w-[50%] mb-12 md:mb-6">
                    <img src={login} alt="key" className="w-full rounded-2xl" />
                </div>
                <div className="w-full md:w-[50%] md:p-5">
                    <form onSubmit={onSubmit}>
                        <input
                            className="w-full px-4 py-2 text-gray-700 bg-white border-indigo-300 focus:border-indigo-500 rounded transition ease-in-out"
                            type="email"
                            id="email"
                            value={email}
                            onChange={onChange}
                            placeholder="Email..."
                        />
                        <div className="my-6 relative">
                            <input
                                className="w-full px-4 py-2 text-gray-700 bg-white border-indigo-300 focus:border-indigo-500 rounded transition ease-in-out"
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={onChange}
                                placeholder="Password"
                            />
                            {showPassword ? (
                                <AiFillEyeInvisible
                                    className="absolute right-3 top-3 text-xl cursor-pointer"
                                    onClick={() =>
                                        setShowPassword(
                                            (prevState) => !prevState
                                        )
                                    }
                                />
                            ) : (
                                <AiFillEye
                                    className="absolute right-3 top-3 text-xl cursor-pointer"
                                    onClick={() =>
                                        setShowPassword(
                                            (prevState) => !prevState
                                        )
                                    }
                                />
                            )}
                        </div>
                        <div className="flex justify-between whitespace-nowrap">
                            <p>
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="hover:underline hover:text-indigo-700 text-indigo-600">
                                    Register
                                </Link>
                            </p>
                            <p>
                                <Link
                                    to="/forgot-password"
                                    className="hover:underline hover:text-blue-700 text-blue-600">
                                    Forgot Password?
                                </Link>
                            </p>
                        </div>
                        <button
                            className="w-full mt-5 bg-indigo-500 text-white px-7 py-3 rounded text-sm font-medium shadow-lg hover:bg-indigo-400 transition duration-200 ease-in hover:shadow-xl active:bg-indigo-800"
                            type="submit">
                            Sign In
                        </button>
                        <div className="my-4 before:border-t before:border-indigo-500 flex before:flex-1 items-center after:border-t after:border-indigo-500 after:flex-1">
                            <p className="uppercase font-semibold text-center mx-4">
                                Or
                            </p>
                        </div>
                        <OAuth />
                    </form>
                </div>
            </div>
        </section>
    );
}
