import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import register from "../assets/register.jpg";
import OAuth from "../components/OAuth";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const { name, email, password } = formData;

    function onChange(e) {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }));
    }
    return (
        <section>
            <h1 className="text-2xl mt-6 text-center font-bold text-indigo-500">
                Register
            </h1>
            <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
                <div className="md:w-[50%] mb-12 md:mb-6">
                    <img
                        src={register}
                        alt="key"
                        className="w-full rounded-2xl"
                    />
                </div>
                <div className="w-full md:w-[50%] md:p-5">
                    <form>
                        <input
                            className="w-full px-4 py-2 text-gray-700 bg-white border-indigo-300 focus:border-indigo-500 rounded transition ease-in-out"
                            type="text"
                            id="name"
                            value={name}
                            onChange={onChange}
                            placeholder="Full Name..."
                        />
                        <input
                            className="w-full mt-6 px-4 py-2 text-gray-700 bg-white border-indigo-300 focus:border-indigo-500 rounded transition ease-in-out"
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
                        <div className="flex items-center justify-center whitespace-nowrap">
                            <p>
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="hover:underline hover:text-indigo-700 text-indigo-600">
                                    Login
                                </Link>
                            </p>
                        </div>
                        <button
                            className="w-full mt-5 bg-indigo-500 text-white px-7 py-3 rounded text-sm font-medium shadow-lg hover:bg-indigo-400 transition duration-200 ease-in hover:shadow-xl active:bg-indigo-800"
                            type="submit">
                            Sign Up
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
