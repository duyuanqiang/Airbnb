import styled from "styled-components";


export const RightWrapper = styled.div`
    flex: 1;
    justify-content: flex-end;
    
    nav{
      display: flex;
      .info{
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
      margin-right: 8px;
      a{
        padding: 12px;
        color: ${props=>props.theme.text.primaryColor};
      }
    }
    .infoLogo{
      align-items: center;
      .infoBtn{
        position: relative;
        padding: 5px 5px 5px 12px;
        cursor: pointer;
        border-color: var(--f-mkcy-f);
        border: 1px solid var(--j-qkgmf);
        border-radius: 21px;
        
        display: flex;
        align-items: center;
        .profile{
          height: 30px;
          width: 30px;
          margin-left: 12px;
        }
        ${props=>props.theme.mixin.boxShadow}
        .panel{

          position:absolute;
          right: 0;
          top: 54px;
          box-sizing: border-box;
          padding: 10px 0;
          background-color: #fff;
          width: 200px;
          border-radius: 10px;
          .top{

            border-bottom: 1px solid #ddd;
          }
          .top, .bottom{
            
          }
          .item{
            height: 40px;
            line-height: 40px;
            padding: 0 10px;
            &:hover{
              background-color: #f5f5f5;
            }
          }
          
        }
      }
    }
    }
    
`