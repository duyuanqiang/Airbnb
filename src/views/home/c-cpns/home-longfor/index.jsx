import ScrollView from '@/base-ui/scroll-view'
import LongForItem from '@/components/longfor-item/idnex'
import SectionFooter from '@/components/section-footer'
import SectionHeader from '@/components/section-herader'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'

const HomeLongFor = memo((props) => {
  const {itemWidth,infoData} = props
  return (
    <LongForWrapper>
      <SectionHeader  title={infoData.title} subtitle={infoData.subtitle}/>
      <div className="long-for">
        <ScrollView>
            {
              infoData.list.map(item=>{
                return <LongForItem key={item.city} itemData={item} itemWidth={itemWidth} />
              })
            }
        </ScrollView>
      </div>
      
      <SectionFooter/>
    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData:PropTypes.object

}

export default HomeLongFor