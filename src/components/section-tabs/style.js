import styled from "styled-components";

export const TabsWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 16px 8px;
  white-space: nowrap;
  .item{
    min-width: 120px;
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