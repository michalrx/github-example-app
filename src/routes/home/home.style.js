import styled from 'styled-components';
import { colors } from "../../utils/styles/color.style";

export const Container = styled.div`

`;

export const UserLoginBox = styled.div`
    color: ${colors.dark};
    border: 1px solid ${colors.dark};
    border-radius: 2.5px;
    margin: 50px auto;
    width: 500px;
    text-align: center;
    padding: 20px;
`;

export const UserInput = styled.input`
    border: 1px solid ${colors.light};
    margin-top: 15px;
    padding: 5px;
    
`;

export const UserButton = styled.button`
    background: ${colors.dark};
    color: ${colors.white};
    border: 0;
    margin-top: 15px;
    padding: 6px;
    
    &:hover {
    background: ${colors.medium};
    }
`;