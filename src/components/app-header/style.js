import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 var(--ic-zlb-s);
    height: 80px;
    border-bottom: 1px solid #eee;
  
    font-weight: ${props=>props.theme.font.fontWeight};
`