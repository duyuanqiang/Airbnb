import styled from "styled-components";

export const LongForWrapper = styled.div`
  flex-shrink: 0;
  width: ${props=>props.itemWidth};
  .inner{
    padding: 6px;
    .item-info{
      position: relative;
      border-radius: 5px;
      overflow: hidden;
    }
    .cover{
      width: 100%;
      object-fit: cover;
    }
    .mask-cover{
      background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
      opacity: 0.6;
      position: absolute;
      height: 60%;
      width: 100%;
      left: 0px;
      bottom: 0px;
    }
    .info{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding-bottom: 32px;
      padding-left: 24px;
      padding-right: 24px;
      color: #fff;
      .city{
        font-size: 18px;
        font-weight: 800;
        text-align: center;
      }
      .price{
        font-size: 14px;
        font-weight: 600;
        text-align: center;
      }
    }
  }
`