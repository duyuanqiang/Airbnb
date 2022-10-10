import ScrollView from '@/base-ui/scroll-view';
import classNames from 'classnames';
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const {tabNames=[],tabClick} = props;
  const [currentIndex,setCurrentIndex] = useState(0);
  function itemClick(index,item) {
    setCurrentIndex(index);
    tabClick(index,item)
  }
  return (
    <TabsWrapper>
      <ScrollView>
      {
        tabNames.map((item,index)=>{
          return (
                  <div key={index}
                  className={classNames("item",{active:currentIndex===index})}
                    onClick={e=>{itemClick(index,item)}}
                  >{item}</div>)
        })
      }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames:PropTypes.array

}

export default SectionTabs