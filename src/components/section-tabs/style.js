import styled from "styled-components";

export const TabsWrapper = styled.div`
  .item{
    margin-right: 16px;
    flex-basis: 120px;
    flex-shrink: 0;
    white-space: nowrap;
    height: 48px;
    padding: 14px 16px;
    border-radius: 3px;
    box-sizing: border-box;
    ${props => props.theme.mixin.boxShadow}
    font-size: 17px;
    text-align: center;
    font-weight: bold;
    line-height: 20px;
    outline: none;
    border: solid 0.5px #d8d8d8;
    cursor: pointer;

    &.active{
      color: #ffffff;
      background: ${props=>props.theme.color.secondaryColor};
      border: solid 0.5px ${props=>props.theme.color.secondaryColor};
    }
  }
`