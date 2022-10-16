import styled from "styled-components";

export const PictureWrapper = styled.div`
  position: relative;
 > .picture{
    display: flex;
    background: #000;
    height: 400px;
    width: 100%;
    .left{
      width: 50%;
      .item{
        width: 100%;
        height: 100%;
      }
    }
    .right{
      width: 50%;
      .item{
        width: 50%;
        height: 50%;
      }
    }
    @media screen and (max-width:1193px){
      .left{
        width: 75%;
        .item{
          width: 100%;
          height: 100%;
        }
      }
      .right{
        width: 25%;
        .item{
          width: 100%;
          height: 50%;
        }
      }
    }
    @media screen and (max-width:640px){
      .left{
        width: 100%;
      > .item{
          width: 100%;
          height: 100%;
        }
      }
      .right{
        width: 0;
      }
    }
   
    .left, .right{
      height: 100%;
      border: 1px solid #000;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      .item{
        position: relative;
        cursor: pointer;
        overflow: hidden;
        img{
          display: inline-block;
          width: 100%;
          /* height: auto; */
          object-fit: cover;
          transition: transform 0.45s ease;
        }
        &:hover img{
          transform: scale(1.08);
        }
        .cover{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          &:hover{
            background:transparent;
          }
        }
      }
    }
    &:hover .cover{
      background: rgba(0,0,0,.2);
      
    }
 
}

  .show-btn{
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: 40px;
    padding: 6px 12px;
    text-align: center;
    line-height: 28px;
    border-radius: 5px;
    background: #fff;
    font-size: 14px;
    font-weight: 800;
    color: rgb(72,72,72);
    cursor: pointer;
  }
`