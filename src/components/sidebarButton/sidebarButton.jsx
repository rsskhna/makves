import styled from "styled-components";
import arrowLeft from '../../assets/loon-icon-left.svg';
import arrowRight from '../../assets/loon-icon-right.svg'

const StyledButton = styled.button`
    width: 25px;
    height: 25px;

    position: absolute;
    left: ${props => props.$isOpen ? '208px' : '90px'};
    top: 34px;
    z-index: 2;
    
    object-fit: contain;
    object-position: center;

    border-radius: 100px;
    border: none;
    
    background-color: ${props => props.$isOpen ?  props.theme.buttonBgActive :  props.theme.buttonBg};

    padding: 0;

    transition: left 1s ease-in-out;

    &:hover{
        cursor: pointer;
    }
`

export const SidebarButton = ({isOpen, handleClick}) => {
    return (
        <StyledButton onClick={handleClick} $isOpen={isOpen}>
            {isOpen ? <img src={arrowLeft} alt='sidebar open/close button'/>
                : <img src={arrowRight} alt='sidebar open/close button'/>
            }
        </StyledButton>
    )
}