import Sidebar from "../sidebar/Sidebar.jsx";
import {useState} from "react";
import {SidebarButton} from "../sidebarButton/sidebarButton.jsx";
import styled, {ThemeProvider} from "styled-components";

const light = {
    pageBg: '#e2e8f0',
    sidebarBg: '#fff',
    fieldHover: '#f0f2ff',
    fieldActive: '#f0f2ff',
    text: '#97a5b9',
    textHover: '#091b31',
    textActive: '#0000b5',
    logoColor: '#0000b5',
    buttonBg: '#fff',
    buttonBgActive: '#e2e8f0'
}

const dark = {
    pageBg: '#4B5966',
    sidebarBg: '#202127',
    fieldHover: '#2D2E34',
    fieldActive: '#393A3F',
    text: '#f0f2ff',
    textHover: '#f0f2ff',
    textActive: '#f0f2ff',
    logoColor: '#3B82F6',
    buttonBg: '#202127',
    buttonBgActive: '#4B5966'
}

const AppWrapper = styled.div`
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;

    background-color: ${props => props.theme.pageBg};

    font-family: Avenir, Arial, sans-serif ;
    font-size: 14px;
    font-weight: 600;

    padding: 10px;
    margin: 0 auto;
`

export default function App() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <ThemeProvider theme={light}>
            <AppWrapper>
                <Sidebar isOpen={isOpen} />

                <SidebarButton isOpen={isOpen} handleClick={handleClick} />
            </AppWrapper>
        </ThemeProvider>
    )
}