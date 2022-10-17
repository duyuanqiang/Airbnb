import styled from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(2,2,2,1);
  z-index: 999;
  .content{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .close{
      position: absolute;
      right: 0;
      top: 0;
      padding: 20px;
    }
    .main{
      width: 100%;
      height: 100%;
      margin-top: 60px;
      
      .main-pic{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        .left{
          height: 100%;
        }
        .img{
          img{
            height: 400px;
            max-width: 100%;
          }
        }
      }
      .idcator{
        margin: 0 auto;
        overflow: hidden;
        width: 600px;
        color: #fff;
        .desc{
          margin-bottom: 10px;
        }
        .item{
          overflow: hidden;
          margin: 0 10px;
          flex-shrink: 0;
          width: 100px;
          height: 300px;
          img{
            width: 100%;
            object-fit: cover;
            -webkit-filter: grayscale(80%); /* Chrome, Safari, Opera */
            filter: grayscale(80%); 
          }
        }
        .active{
          img{
            -webkit-filter: none; /* Chrome, Safari, Opera */
            filter: none;
          }
        }
      }
    }
  }
`