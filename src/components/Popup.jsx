import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const Popup = ({ message, type = "INFO", duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if(onClose) onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const colors = {
        INFO: "bg-green-500",
        WARNING: "bg-yellow-500",
        ERROR: "bg-red-500"
    }

    if (!visible) return null;

    return createPortal(
        <div data-aos="fade-down"
            className={`fixed top-20 left-1/2 -translate-x-1/2 px-6 py-3 rounded-4xl text-white shadow-lg ${colors[type]}`}
        >
            {message}
        </div>,
        document.body
    )
}

export default Popup