import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const {selectIndex = 0} = props
  const contentRef = useRef()
  useEffect(()=>{
    //获取当前的选中item
    const selectItemEl = contentRef.current.children[selectIndex]
    const itemLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    //获取当前的容器的参数
    const contentWidth =  contentRef.current.clientWidth;
    const contentScroll = contentRef.current.scrollWidth;
    //获取滚动的距离
    let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5
    //设置滚动 
    if(distance < 0) distance = 0;
    const totalDistance = contentScroll - contentWidth;
    if(distance > totalDistance) distance = totalDistance
    //边界处理
    contentRef.current.style.transform = `translateX(-${distance}px)`
  },[selectIndex])
  return (
      <IndicatorWrapper >
        <div className='dot-content' ref={contentRef}>
          {
            props.children
          }
        </div>
      </IndicatorWrapper>
      
  )
})


export default Indicator