import RoomItem from '@/components/room-item'
import { changeDetailInfoAction } from '@/store/modules/detail'
// import { changeDetailDataAction } from '@/store/modules/entire/actionCreators'
import React, { memo, useCallback } from 'react'
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { RoomsWrapper } from './style'

const EntireRooms = memo(() => {
  const {roomList,totalCount,isLoading} = useSelector(state=>({
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading:state.entire.isLoading,
  }),shallowEqual)
  const dispath = useDispatch();
  const navigate =useNavigate();
  const itemCliclHandle = useCallback((itemData)=>{
    // dispath(changeDetailDataAction(itemData))
      dispath(changeDetailInfoAction(itemData))
    navigate("/detail")
  },[dispath,navigate])
  return (
    <RoomsWrapper>
      <div className="title">{totalCount}多处住宿</div>
      <div className="rooms">
        {
          roomList?.map(item=>{
            return (
              <RoomItem itemData={item} itemWidth={"20%"} key={item._id} itemCliclHandle={itemCliclHandle}/>
            )
          })
        }
      </div>
      {isLoading&&(<div className="cover"></div>)}
    </RoomsWrapper>
  )
})

export default EntireRooms