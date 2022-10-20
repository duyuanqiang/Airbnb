import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item'
import { RoomsWrapper } from './style'

const SelctionRooms = memo((props) => {
  const {roomList,itemWidth} = props;
  return (
    <RoomsWrapper>
      {
        roomList.slice(0,8).map(item=>{
          return <RoomItem itemData={item} itemWidth={itemWidth} key={item.id}/>
        })
      }
    </RoomsWrapper>
    
  )
})

SelctionRooms.propTypes = {
  roomList:PropTypes.array,
  itemWidth:PropTypes.string,
}

export default SelctionRooms