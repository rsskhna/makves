
import {firstSectionLinks, secondSectionLinks} from "../../data/linksData.js";
import styled, {ThemeProvider} from "styled-components";
import {Logo} from "../logo/logo.jsx";
import {SidebarField} from "../sidebarField/sidebarField.jsx";

const SidebarWrapper = styled.div`
    width: 100%;
    min-height: 95vh;
    max-width: ${props => props.$isOpen ? '210px' : '70px'};

    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;

    background-color: ${props => props.theme.sidebarBg};

    overflow: hidden;

    border-radius: 15px;

    padding: 16px;

    transition: max-width 1s ease-in-out;
`

const FieldList = styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 15px;

    list-style-type: none;
    margin-bottom: 120px;
`

const Sidebar = ({isOpen}) => {
    return (
        <>
            <SidebarWrapper $isOpen={isOpen}>
                <Logo isOpen={isOpen} />

                <FieldList>
                    {firstSectionLinks.map(link => {
                        return (
                            <SidebarField isOpen={isOpen} to={link.to} name={link.name} image={link.iconSrc} key={link.name}/>
                        )
                    })}
                </FieldList>

                <FieldList>
                    {secondSectionLinks.map(link => {
                        return (
                            <SidebarField isOpen={isOpen} to={link.to} name={link.name} image={link.iconSrc} key={link.name}/>
                        )
                    })}
                </FieldList>
            </SidebarWrapper>
        </>
    )
}

export default Sidebar;