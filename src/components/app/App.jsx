import Sidebar from "../sidebar/Sidebar.jsx";
import {useState} from "react";
import {SidebarButton} from "../sidebarButton/sidebarButton.jsx";

export default function App() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} />

            <SidebarButton isOpen={isOpen} handleClick={handleClick} />
        </>
    )
}