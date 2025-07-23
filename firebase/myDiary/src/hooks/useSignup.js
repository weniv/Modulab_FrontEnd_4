import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
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
                        // 회원 별명 등록 완료
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