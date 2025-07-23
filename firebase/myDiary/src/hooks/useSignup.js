import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const { dispatch } = useAuthContext();

    const signup = (email, password, displayName) => {

        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                if (!user) {
                    throw new Error('회원가입에 실패했습니다.');
                }

                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {

                        dispatch({ type: 'login', payload: user });

                    }).catch((error) => {
                        onsole.error(error);
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error(errorCode, errorMessage);
            });

    }

    return signup;
}