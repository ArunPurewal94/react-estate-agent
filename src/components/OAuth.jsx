import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
    return (
        <button className="flex items-center justify-center w-full mt-5 bg-red-600 text-white px-7 py-3 rounded text-sm font-medium shadow-lg hover:bg-red-400 transition duration-200 ease-in hover:shadow-xl active:bg-red-800">
            <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
            Continue With Google
        </button>
    );
}
