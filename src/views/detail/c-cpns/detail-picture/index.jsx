import PictureBrowser from '@/base-ui/picture-browser'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { PictureWrapper } from './style'

const DetailPicture = memo((props) => {
  const {picturesData} =props
  const [isOpenPicBro,setIsOpenPicBro] = useState(false);
  function checkClickHandle(isOpen){
    console.log(isOpen);
    setIsOpenPicBro(isOpen)
  }
  return (
    <PictureWrapper>
      <div className="picture">
        <div className="left">
          <div className="item">

            <img src={picturesData[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            picturesData.slice(1,5).map(item=>{
              return (
                <div className="item" key={item}>
                  <img src={item} alt=''></img>
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="show-btn" onClick={e=>checkClickHandle(true)}>
        查看照片
      </div>
      <PictureBrowser picturesData={picturesData}/>
    </PictureWrapper>
  )
})

DetailPicture.propTypes = {
  picturesData:PropTypes.array
}

export default DetailPicture