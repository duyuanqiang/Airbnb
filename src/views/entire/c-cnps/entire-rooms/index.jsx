import RoomItem from '@/components/room-item'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import React, { memo, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  const {roomList,totalCount} = useSelector(state=>({
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount,
  }))
  const dispath = useDispatch();
  useEffect(()=>{
    dispath(fetchRoomListAction())
  },[dispath])
  return (
    <RoomsWrapper>
      <div className="title">{totalCount}多处住宿</div>
      <div className="rooms">
        {
          roomList?.map(item=>{
            return (
              <RoomItem itemData={item} itemWidth={"20%"} key={item.id}/>
            )
          })
        }
      </div>
      
    </RoomsWrapper>
  )
})

export default EntireRooms