import {PropTypes} from 'prop-types'
import SelectionHeader from '@/components/section-herader'
import React, { memo } from 'react'
import { SectionV1Wrapper } from './style'
import SelctionRooms from '@/components/selection-rooms'

const HomeSectionV1 = memo((props) => {
  const {infoData} = props;
  return (
    <SectionV1Wrapper>
      <SelectionHeader  title={infoData.title} subtitle={infoData.subtitle} />
      <SelctionRooms roomList={infoData.list} itemWidth={"25%"}></SelctionRooms>
    </SectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  infoData: PropTypes.object
}
export default HomeSectionV1
