import { Rating } from '@mui/material'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomItemWrapper } from './style'

const RoomItem = memo((props) => {
  const {itemData} = props
  return (
    <RoomItemWrapper>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="content">
          <div className="desc">
            {itemData.verify_info.messages.join(".")}
          </div>
          <div className="name"><p>{itemData.name}</p></div>
          <div className="price">
            <span>
              <span>￥{itemData.price}</span>/晚
            </span>
          </div>
           <div className="rate">
            {
              itemData.star_rating &&
              <Rating name="size-small" readOnly defaultValue={0}  value={itemData.star_rating}   size="small"
                sx={{fontSize:"12px",color:"#00848A"}}
              />
            }
            <span className='review' style={{color:`${itemData.bottom_info?.content_color}`,fontSize:`${itemData.bottom_info?.font_size}px`}}>
              {
                <span>{itemData.reviews_count}</span> 
              }
             {
                itemData.bottom_info && <span>·</span>
             } 
             <span>
              {
                itemData.bottom_info?.content
              }
             </span>
            </span>
            <div className="evaluate">
            </div>
          </div>
        </div>

      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData:PropTypes.object,
}

export default RoomItem