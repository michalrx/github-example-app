import styled from 'styled-components';
import {colors} from "../../utils/styles/color.style";

export const Container = styled.div`
    color: ${colors.light};
    font-size: 0.9rem;
    text-align: center;
    padding: 20px;
    
   & > div {
    border-top: 1px solid ${colors.light};
    padding: 5px 0;
   }
`;