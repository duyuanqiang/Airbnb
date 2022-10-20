import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import { Rating } from '@mui/material'
import { Carousel } from 'antd'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { RoomItemWrapper } from './style'

const RoomItem = memo((props) => {
  const {itemData,itemWidth="25%",itemCliclHandle} = props
  const [selectIndex,setSelectIndex] = useState(0)
  const carouselRef = useRef()

  function controlClickHandle(isNext,e){
    isNext ? carouselRef.current.next() : carouselRef.current.prev()
    let len = itemData.picture_urls?.length
    let index = isNext ? selectIndex + 1 : selectIndex -1
    if(index < 0) index = len - 1
    if(index >= len) index = 0
    // console.log(index);
    e.stopPropagation()
  }
  function afterChange(e){
    setSelectIndex(e)
  }
  function itemClick(){
    if(itemCliclHandle) itemCliclHandle(itemData)
  }
  const sliderElement = (
    <div className="slider" onClick={itemClick}>
      <div className="control">
        <div className="btn left" onClick={e=>controlClickHandle(false,e)}>
          <IconArrowLeft width={25} height={25}/>
        </div>
        <div className="btn right" onClick={e=>controlClickHandle(true,e)}>
          <IconArrowRight width={25} height={25} />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {
            itemData.picture_urls?.map((item,index)=>{
              return (
                <span className={classNames("dot",{active:selectIndex===index})} key={item}></span>
              )
            })
          }
        </Indicator>
      </div>
      <Carousel dots={false} ref={carouselRef} afterChange={afterChange}>
        {
          itemData.picture_urls?.map(item=>{
            return (
              <div className="cover" key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
  return (
    <RoomItemWrapper itemWidth={itemWidth} color={itemData.star_rating_color} >
      <div className="inner">
        {
          itemData.picture_urls ? sliderElement :(<div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>)
        }
      
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
              <Rating  className='star' name="size-small" readOnly defaultValue={0}  
                value={itemData.star_rating}   size="small"
                sx={{fontSize:"12px",color:itemData.star_rating_color}}
              />
            }
            <div className="evaluate"  style={{color:`${itemData.bottom_info?.content_color}`,
                fontSize:`${itemData.bottom_info?.font_size}px`}}>
                <span className='num'>{itemData.reviews_count}</span> 
                {itemData.bottom_info && <span>·{itemData.bottom_info?.content}</span>} 
            </div>
          </div>
        </div>

      </div>
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData:PropTypes.object,
  itemWidth:PropTypes.string,
  itemCliclHandle:PropTypes.func
}

export default RoomItem