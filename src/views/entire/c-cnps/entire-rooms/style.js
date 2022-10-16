import styled from "styled-components";

export const RoomsWrapper = styled.div`
  margin-top: 14px;
  padding: 16px;
  position: relative;
  .title{
    font-size: 24px;
    font-weight: 600;
    padding-left: 10px;
  }
  .rooms{
    display: flex;
    flex-wrap: wrap;
  }
  > .cover{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(255,255,255,0.8);
  }
`