import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import { Pagination } from '@mui/material'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'

const EntirePagination = memo(() => {
  const {totalCount,currentPage} = useSelector(state=>({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage

  }))
  const dispatch = useDispatch();
  function onChange(e,page){
    dispatch(fetchRoomListAction(page - 1))
    window.scroll(0,0)
  }
  return (
    <PaginationWrapper>
      <Pagination count={totalCount/20} onChange={onChange}/>
      <div className="desc">
        <span>第{currentPage * 20 + 1}-{(currentPage+1) * 20}个房源，共{totalCount}个</span>
      </div>
    </PaginationWrapper>
  )
})

export default EntirePagination