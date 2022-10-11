import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-herader'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomePlusWrapper } from './style'

const HomeSectionV3 = memo((props) => {
  const {infoData} = props
  return (
    <HomePlusWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="content">
        <ScrollView>
          {
            infoData.list.map(item=>{
              return <RoomItem itemData={item} itemWidth={"20%"} key={item.id}/>
            })
          }
        </ScrollView>
      </div>
      
    </HomePlusWrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionV3