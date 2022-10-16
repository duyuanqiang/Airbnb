import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  .dot-content{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.2s ease;
  }
`