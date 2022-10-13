import styled from "styled-components";

export const PaginationWrapper = styled.div`
  box-sizing: border-box;
  margin: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  .MuiButtonBase-root{
    margin-right: 15px;
  }
  .MuiPaginationItem-root{
      font-size: 14px;
    &:hover{
      /* background: #fff; */
      text-decoration: underline;
    }
    &.Mui-selected{
      color: #fff;
      background: rgb(34, 34, 34);
      &:hover{
        background: rgb(34, 34, 34);
        text-decoration: none;
    }
    }
  }
  .desc{
    margin-top: 16px;
    line-height: 18px;
    font-family: "Circular", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", sans-serif !important;
  }
`