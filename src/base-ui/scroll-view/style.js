import styled from "styled-components";

export const ScrollWrapper = styled.div`
  position: relative;
  padding: 16px 8px;

  .control{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #fff;
    top: 50%;
    border: 2 solid #fff;
    box-shadow: 0 2px 2px 2px rgba(0,0,0,0.14);
    cursor: pointer;
    &.left{
      left: 0;
      transform: translate(-50%,-50%);
    }
    &.right{
      right: 0;
      transform: translate(50%,-50%);
    }
  }
  .scroll{
    overflow: hidden;
    .scroll-content{
      display: flex;
      transition: transform 0.25s ease;
    }
  }
`