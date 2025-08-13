import { useEffect, useState } from "react"

const Popup = ({ message, type = "INFO", duration = 3000, onClose }) => {
    const [visible, setVisible] = useState(false);

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

    return(
        <div
            className={`fixed top-5 right-5 px-6 py-3 rounded-lg text-white shadow-lg ${colors[type]}`}
            data-aos="fade-down"
        >
            {message}
        </div>
    )
}

export default Popup