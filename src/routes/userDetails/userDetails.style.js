import styled from 'styled-components';
import { colors } from "../../utils/styles/color.style";

export const Container = styled.div`
`;

export const Content = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 250px auto 250px;
    grid-template-areas: "header header header" "sidebar content sidebar2";
`;

export const ContentTop = styled.div`
    grid-area: header;
    text-align: center;
    padding: 20px;
    font-size: 1.5rem;
    border-bottom: 1px solid ${colors.dark};
`;

export const ContentLeft = styled.div`
    grid-area: sidebar;
    text-align: center;
    
    img {
    max-width: 150px;
    }
`;

export const ContentCenter = styled.div`
    grid-area: content;
`;

export const ContentRight = styled.div`
    grid-area: sidebar2;
`;

export const ContentError = styled.div`
    background: red;
    text-align: center;
    color: white;
`;