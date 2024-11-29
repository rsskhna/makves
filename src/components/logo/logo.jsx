import logo from "../../assets/logo.png";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const LogoWrapper = styled(Link)`
    width: 100%;

    display: flex;
    align-items: center;
    
    text-decoration: none;

    margin-bottom: 20px;
`
const LogoImage = styled.img`
    width: 40px;
    height: 40px;
`

const LogoName = styled.p`
    font-weight: 700;
    font-size: 22px;
    color:  ${props => props.theme.logoColor};

    visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.$isOpen ? '1' : '0'};

    transition: visibility 1s ease-in-out, opacity 1s ease-in-out;
`
export const Logo = ({isOpen}) => {
    return (
        <LogoWrapper to='/'>
            <LogoImage src={logo} alt='logo'/>

            <LogoName $isOpen={isOpen}>Technifly</LogoName>
        </LogoWrapper>
    )
}