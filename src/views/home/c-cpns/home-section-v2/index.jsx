import {PropTypes} from 'prop-types'
import SelectionHeader from '@/components/section-herader'
import React, { memo } from 'react'
import { SectionV2Wrapper } from './style'
import SelctionRooms from '@/components/selection-rooms'

const HomeSectionV2 = memo((props) => {
  const {infoData,itemWidth} = props;
  return (
    <SectionV2Wrapper>
      <SelectionHeader  title={infoData.title} subtitle={infoData.subtitle} />
      <SelctionRooms roomList={infoData.dest_list?.["佛山"]} itemWidth={itemWidth}></SelctionRooms>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
  // itemWidth: PropTypes.stirng
}
export default HomeSectionV2
