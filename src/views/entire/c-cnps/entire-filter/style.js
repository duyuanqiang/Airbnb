import styled from "styled-components";

export const FilterWrapper = styled.div`
  margin-left: 16px;
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 14px;
  .item{
    margin-right: 8px;
    padding: 6px 12px;
    border-radius: 3px;
    border: 1px solid #dce0e0;
    line-height: 18px;
    text-align: center;
    cursor: pointer;
    ${props=>props.theme.mixin.active}
  }
`