import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'

const ScrollView = memo((props) => {
  //定义组件状态值
  const [showRight,setShowRight] = useState(false)
  const [showLeft,setShowLeft] = useState(false)
  let [posIndex,setPosIndex] = useState(0)
  const totalDistanceRef = useRef()

  //组件渲染完成
  const scrollContentRef = useRef();
  useEffect(()=>{
    const scrollWidth = scrollContentRef.current.scrollWidth //一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth //本身占据的宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance>0)
  },[props.children])
  //注意offset相对于带有定位的父元素
  /**
   * 
   * 事件处理逻辑
   */
  function controlClickHandle(isRight) {
    posIndex = isRight ? posIndex + 1 : posIndex - 1
    setPosIndex(posIndex)
    const newEl = scrollContentRef.current.children[posIndex]
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`
    //判断按钮显示,剩余可滚动的差值大于下次需要滚动的宽度,显示右侧按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }
  return (
    <ScrollWrapper>
      {showLeft &&(<div className='control left' onClick={e=>controlClickHandle(false)}><IconArrowLeft/></div>)}
      {showRight&&(<div className='control right' onClick={e=>controlClickHandle(true)}><IconArrowRight/></div>)}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef} >{props.children}</div>
      </div>
    </ScrollWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView