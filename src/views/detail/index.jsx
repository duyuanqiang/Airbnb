import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import DetailInfo from './c-cpns/detail-info'
import DetailPicture from './c-cpns/detail-picture'
import { DetailWrapper } from './style'

const Detail = memo(() => {
  const {detailData} = useSelector(state=>({
    detailData:state.detail.detailData
  }),shallowEqual)

  return (
    <DetailWrapper>
      <DetailPicture picturesData={detailData.picture_urls}/>
      <DetailInfo/>
    </DetailWrapper>
  )
})

export default Detail