import IconMoreArrow from '@/assets/svg/icon-more-arrow';
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';
import { FooterWrapper } from './style';

const SectionFooter = memo((props) => {
  const {title} = props;
  let name = "显示全部"
  if(title){
    name = `查看更多${title}房源`
  }
  const navigate = useNavigate()
  function moreClickHandle(params) {
    navigate("/entire")
  }
  return (
    <FooterWrapper isColor={name !== "显示全部"} >
      <div>
        <span className='title' onClick={moreClickHandle}>
          {name}
        </span>
        <span className='arrowR'>
          <IconMoreArrow/>
        </span>
      </div>
   
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  title:PropTypes.string
}

export default SectionFooter