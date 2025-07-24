import { useState } from 'react'
import { appAuth } from '../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {

    // 에러 정보를 저장합니다.
    const [error, setError] = useState(null);
    // 현재 서버와 통신중인 상태를 저장합니다.
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const login = (email, password) => {
        setError(null); // 아직 에러가 없으니 null 입니다.
        setIsPending(true); // 통신중이므로 true입니다.

        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch({ type: 'login', payload: user });
                // 회원 정보를 정상적으로 받지 못하면 실패입니다.
                if (!user) {
                    throw new Error('회원가입에 실패했습니다.');
                }
                setIsPending(false);
            })
            .catch((err) => {
                setError(err.message);
                setIsPending(false);
                console.log(err.message);
            });
    }

    return { error, isPending, login }
}