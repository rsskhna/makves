import {NavLink} from 'react-router'
import styled from "styled-components";

const FieldWrapper = styled.li`
    width: 100%;
    max-width: 178px;

    border-radius: 15px;
`

const StyledNavLink = styled(NavLink)`
    width: 100%;
    height: 100%;

    display: flex;
    gap: 10px;
    align-items: center;
    position: relative;
    z-index: 2;

    color: ${props => props.theme.text};
    text-decoration: none;

    background-color: transparent;
    border-radius: 15px;

    padding: 10px;

    transition: 0.3s background-color ease-in-out, 0.3s color ease-in-out;
    
    &:hover{
        cursor: pointer;
        color: ${props => props.theme.textHover};
        background-color: ${props => props.theme.fieldHover};
    }
    
    &.active{
        background-color: ${props => props.theme.fieldActive};
        color: ${props => props.theme.textActive};
    }
`

const LinkIcon = styled.img`
    width: 16px;
    height: 16px;
`

const FieldText = styled.p`
    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.$isOpen ? '1' : '0'};

    transition: visibility 1s ease-in-out, opacity 1s ease-in-out;
`

export const SidebarField = ({to, image, name, isOpen}) => {
    return (
        <FieldWrapper>
            <StyledNavLink to={{pathname: to}}>
                <LinkIcon src={image} alt={name}/>
                <FieldText $isOpen={isOpen}>{name}</FieldText>
            </StyledNavLink>
        </FieldWrapper>
    )
}