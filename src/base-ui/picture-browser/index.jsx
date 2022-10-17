import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconClose from '@/assets/svg/icon-close'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import Indicator from '../indicator'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
  const {picturesData,clickHandle} = props
  const [currentIndex,setCurrentIndex] = useState(0)

  function closeClickHandle() {
    clickHandle()
  }

  const arrowClickHandle = useCallback((isRight,e)=> {
    let index = isRight ? currentIndex + 1 : currentIndex - 1;
    if(index < 0 ) index = picturesData.length - 1
    if(index >= picturesData.length) index = 0
    console.log(index,e);
    setCurrentIndex(index)
  },[currentIndex,picturesData.length])

  return (
    <BrowserWrapper >
      <div className="content">
        <div className="close" onClick={closeClickHandle}>
            <IconClose/>
        </div>
        <div className="main">
          <div className='main-pic'>
            <div className="left" onClick={e=>arrowClickHandle(false,e)}>
              <IconArrowLeft width={80} height={80}/>
            </div>
            <div className="img">
              <img src={picturesData[currentIndex]} alt="" />
            </div>
            <div className="right" onClick={e=>arrowClickHandle(true,e)}>
              <IconArrowRight width={80} height={80}/>
            </div>
          </div>
          <div className="idcator">
            <div className="desc">
              <span>2/12：Lovely smart open-plan living space with a corner sofa and accent chair, wall-mounted 43 inch Smart TV, dining table and large windows overlooking Fitzrovia</span>
            </div>
            <Indicator selectIndex={currentIndex}>
              {
                picturesData.map((item,index)=>{
                  return (
                    <div className={classNames("item",{active:currentIndex===index})} key={item}>
                      <img src={item} alt="" />
                    </div>
                    // <div className="cover"></div>
                  )
                })
              }
            </Indicator>
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