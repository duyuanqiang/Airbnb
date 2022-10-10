import {PropTypes} from 'prop-types'
import SelectionHeader from '@/components/section-herader'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SelctionRooms from '@/components/selection-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  /**传入数据*/
  const {infoData,itemWidth} = props;
  const tabNames = infoData.dest_address?.map(item=>item.name)
  /**定义内部state数据 */
  const [name, setName] = useState(tabNames[0])
  const tabClickHandle = useCallback(function(index,name){
    setName(name)
  },[])
  return (
    <SectionV2Wrapper>
      <SelectionHeader  title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
      <SelctionRooms roomList={infoData.dest_list?.[name]} itemWidth={itemWidth}></SelctionRooms>
      <SectionFooter title={name}/>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
  // itemWidth: PropTypes.stirng
}
export default HomeSectionV2
