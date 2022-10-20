import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import {SwitchTransition,CSSTransition} from "react-transition-group"
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import classNames from 'classnames'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
  const {picturesData,clickHandle} = props
  const [currentIndex,setCurrentIndex] = useState(0)
  const [isShowList,setIsShowList] = useState(true)
  const [isNext,setIsNext] = useState(true)

  function closeClickHandle() {
    clickHandle()
  }

  const arrowClickHandle = useCallback((isRight,e)=> {
    let index = isRight ? currentIndex + 1 : currentIndex - 1;
    if(index < 0 ) index = picturesData.length - 1
    if(index >= picturesData.length) index = 0
    setCurrentIndex(index)
    setIsNext(isRight)
  },[currentIndex,picturesData.length])

  function isIsShowList() {
    setIsShowList(!isShowList)
  }

  return (
    <BrowserWrapper isNext={isNext} showList={isShowList}>
      <div className="content">
        <div className="top" onClick={closeClickHandle}>
          <div className='close'>
            <IconClose/>
          </div>
        </div>
        <div className="main">
            <div className="left" onClick={e=>arrowClickHandle(false,e)}>
              <IconArrowLeft width={80} height={80}/>
            </div>
            <div className="img">
              <SwitchTransition mode='out-in'>
                <CSSTransition key={picturesData[currentIndex]} timeout={200} classNames="pic">
                    <img src={picturesData[currentIndex]} alt="" />
                </CSSTransition>
              </SwitchTransition>
            </div>
            <div className="right" onClick={e=>arrowClickHandle(true,e)}>
              <IconArrowRight width={80} height={80}/>
            </div>
        </div>
        <div className="preview">
          <div className="info">
            <div className="desc">
              <div className="caption">
                <span>
                  2/12：Lovely smart open-plan living space with a corner sofa and accent chair, 
                  wall-mounted 43 inch Smart TV, dining table and large windows overlooking Fitzrovia
                </span>
              </div>
              <div className="hide" onClick={isIsShowList}>
                <span>{isShowList? "显示":"隐藏"}图片列表</span>
              </div>
            </div>
            <div className="indicator">
              <Indicator selectIndex={currentIndex}>
                {
                  picturesData.map((item,index)=>{
                    return (
                      <div className={classNames("item",{active:currentIndex===index})} key={item}>
                        <img src={item} alt="" />
                      </div>
                    )
                  })
                }
              </Indicator>
            </div>
          </div>
        </div>
        
      </div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  picturesData: PropTypes.array,
  clickHandle: PropTypes.func
}

export default PictureBrowser