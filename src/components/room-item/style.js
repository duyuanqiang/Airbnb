import styled from "styled-components";


export const RoomItemWrapper = styled.div`

  width: ${props=>props.itemWidth};
  padding: 8px;
  .inner{
    width: 100%;
    .cover{
      position:relative;
      padding: 66.66% 8px 0;
      
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit:cover;
      }
     
    }
    .content{
      padding: 10px 10px 0px;
      .desc{
        padding-bottom:5px;
        ${props=>props.theme.mixin.desc7}
        color: ${props=>props.color};
      }
      .name{
        padding-bottom:5px;
        p{
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          ${props=>props.theme.mixin.desc5}
        }
        
        
      }
      .price{
        font-weight: 400;
        font-size: 14px;
        font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC";
      }
      .rate{
        display: flex;
        align-items: center;
        .num{
          display: inline-block;
          font-weight: 600;
          color: #484848;
          font-size: 12px;
          line-height: 22px;
          height: 22px;
          margin: 0px;
          margin-left: 2px;
        }
      }
    }
  }
`