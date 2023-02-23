import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { db } from "../firebase";

export default function OAuth() {
    const navigate = useNavigate();
    async function onGoogleClick() {
        try {
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // check for the user

            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (!docSnap.exists()) {
                await setDoc(docRef, {
                    name: user.displayName,
                    email: user.email,
                    timestamp: serverTimestamp(),
                });
            }

            navigate("/");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong 😢",
            });
        }
    }
    return (
        <button
            type="button"
            onClick={onGoogleClick}
            className="flex items-center justify-center w-full mt-5 bg-red-600 text-white px-7 py-3 rounded text-sm font-medium shadow-lg hover:bg-red-400 transition duration-200 ease-in hover:shadow-xl active:bg-red-800">
            <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
            Continue With Google
        </button>
    );
}
