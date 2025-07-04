import { useEffect } from "react";
import { useRef } from "react";

function Modal({ isOpen, onClose, children }) {

    const dialogRef = useRef(null);

    // if (isOpen) {
    //     dialogRef.current.showModal();
    // }

    useEffect(() => {
        if (isOpen) {
            dialogRef.current.showModal();
        } else {
            dialogRef.current.close();
        }
    }, [isOpen]);


    return (
        <dialog id="myDialog" ref={dialogRef}>
            <form method="dialog">
                <h2>Dialog</h2>
                <p>계속 진행하시겠습니다?</p>
                {children}
                <button value="yes" onClick={onClose}>네</button>
            </form>
        </dialog>
    );
}

export default Modal;