import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import EntireFilter from './c-cnps/entire-filter'
import EntirePagination from './c-cnps/entire-pagination'
import EntireRooms from './c-cnps/entire-rooms'
import { EntireWrapper } from './style'

const Entire = memo(() => {
  const dispath = useDispatch();
  useEffect(()=>{
    dispath(fetchRoomListAction())
  },[dispath])

  return (
    <EntireWrapper>
      <EntireFilter/>
      <EntireRooms/>
      <EntirePagination/>
    </EntireWrapper>
   
  )
})

export default Entire