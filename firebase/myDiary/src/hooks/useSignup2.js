import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useAuthContext } from "./useAuthContext";
import { useActionState } from "react";


async function signupAction(prevState, formData) {
    const email = formData.get('email');
    const password = formData.get('password');
    const displayName = formData.get('displayName');

    try {
        const userCredential = await createUserWithEmailAndPassword(appAuth, email, password);

        const user = userCredential.user;

        await updateProfile(appAuth.currentUser, { displayName });

        return { user, error: null }
    } catch (error) {
        return { user: null, error: error.message }
    }



    // .then((userCredential) => {
    // // Signed up 
    // const user = userCredential.user;

    // if (!user) {
    //     throw new Error('회원가입에 실패했습니다.');
    // }



    //     .then(() => {

    //     dispatch({ type: 'login', payload: user });

    // }).catch((error) => {
    //     console.error(error);
    // });
    // })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.error(errorCode, errorMessage);
    //     });
}



export const useSignup = () => {
    // const { dispatch } = useAuthContext();

    const [state, formAction, isPending] = useActionState(signupAction, { user: null, error: null });


    // const signup = (email, password, displayName) => {
    // }

    return { state, formAction, isPending };
}