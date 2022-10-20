import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  padding: 10px 18px;
  font-weight: 600;
  font-size: 17px;
  color: ${props=>{return props.isColor?props.theme.color.secondaryColor:"#000"}};
  .title{
    margin-right: 8px;
    cursor: pointer;
    &:hover{
      text-decoration: underline;
    }
  }
`