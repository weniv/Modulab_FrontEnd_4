import Modal from "./Modal";
import { useState } from "react";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)}>모달 열기</button>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <strong>중요한 내용!!</strong>
            </Modal>
        </>
    )
}

export default App;