import { collection, addDoc, Timestamp, deleteDoc, doc } from "firebase/firestore";
import { appFireStore } from "../firebase/config";
import { useReducer } from "react";


const storeReducer = (state, action) => {
    switch (action.type) {
        case 'isPending':
            return { document: null, isPending: true, error: null, success: false }
        case 'addDoc':
            return { document: action.payload, isPending: false, error: null, success: true }
        case 'error':
            return { document: null, isPending: false, error: action.payload, success: false }
        case 'deleteDoc':
            return { document: action.payload, isPending: false, error: null, success: true }
        default:
            return state;
    }
}
// transaction : 컬랙션의 이름
export const useFirestore = (transaction) => {

    const colRef = collection(appFireStore, transaction);

    const [response, dispatch] = useReducer(storeReducer, {
        document: null,
        isPending: false,
        error: null,
        success: false
    });

    // 데이터를 추가합니다.
    const addDocument = async (doc) => {
        dispatch({ type: 'isPending' });
        try {

            const createdTime = Timestamp.fromDate(new Date());

            const docRef = await addDoc(colRef, { ...doc, createdTime });

            dispatch({ type: 'addDoc', payload: docRef });
        } catch (error) {
            dispatch({ type: 'error', payload: error.message });
        }

    }

    // 데이터를 제거합니다.
    const deleteDocument = async (id) => {
        try {
            const docRef = await deleteDoc(doc(colRef, id));
            dispatch({ type: 'deleteDoc', payload: docRef });
        } catch (error) {
            console.error(error);
            dispatch({ type: 'error', payload: error.message });
        }
    }

    return { addDocument, deleteDocument, response }
}