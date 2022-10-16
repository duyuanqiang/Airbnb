import styled from "styled-components";


export const RoomItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${props=>props.itemWidth};
  padding: 8px;
  .inner{
    width: 100%;
    .slider{
      position: relative;
      .control{
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        color: #fff;
        z-index: 9;
        visibility: hidden;
        .btn{
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 15%;
          &.left{
            background-image: linear-gradient(to left,transparent 0%,rgba(0,0,0,0.25) 100%);
          }
          &.right{
            background-image: linear-gradient(to right,transparent 0%,rgba(0,0,0,0.25) 100%);
          }
        }
      }
      .indicator{
        position: absolute;
        width: 38.5%;
        left: 50%;
        transform: translateX(-50%);
        /* right: 0; */
        bottom: 10px;
        z-index: 5;
        .dot{
          display: inline-block;
          margin: 0 5px;
          flex-shrink: 0;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          &.active{
            background:red;
            width: 12px;
            height: 12px;
          }
        }
      }
      &:hover .control{
        visibility: visible;
      }
    }
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
          ${props=>props.theme.mixin.desc5};
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
          margin-left: 2px;
        }
      }
    }
  }
`