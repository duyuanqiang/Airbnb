import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(2,2,2,1);
  z-index: 999;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    .top{
      /* position: relative; */
      height: 86px;
      .close{
        position: absolute;
        top: 20px;
        right: 20px;
      }
    }
    .main{
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;
      .img{
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
        max-width: 105vh;
        img{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: 0 auto;
          height: 100%;
          /* object-fit: cover; */
          user-select: none;
        }
        /* 动画样式 */
        .pic-enter{
          transform: translateX${ props=>props.isNext ? "-100%" : "100%"};
          opacity: 0;
        }
        .pic-enter-active{
          transform: translate(0);
          opacity: 1;
          transition: all 200ms ease;
        }
        .pic-exit{
          opacity: 1;
        }
        .pic-exit-active{
          opacity: 0;
          transition: all 200ms ease;
        }
      }
    }
    .preview{
      margin: 10px auto;
      color: #fff;
      .info{
        /* position: absolute;
        bottom: 10px; */
        max-width: 105vh;
        .desc{
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          .caption{

          }
          .hide{
            cursor: pointer;
          }
        }
        .indicator{
          overflow: hidden;
          transition: height 0.2s ease;
          height: ${props=>props.showList ? "67px" : "0"};
          .item{
            margin: 0 10px;
            flex-shrink: 0;
            cursor: pointer;
            img{
              height: 67px;
              object-fit: cover;
              -webkit-filter: grayscale(80%); /* Chrome, Safari, Opera */
              filter: grayscale(80%); 
            }
            &.active{
              img{
                -webkit-filter: none; /* Chrome, Safari, Opera */
                filter: none;
              }
            }
          }
        }
      }
    }
`