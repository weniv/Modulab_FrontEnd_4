import { signOut } from "firebase/auth";
import { appAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {
        signOut(appAuth).then(() => {
            dispatch({ type: 'logout' });
        }).catch((error) => {
            console.error(error);
        });
    }

    return logout;

}