import IconLogo from '@/assets/svg/icon_logo'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  const navigation = useNavigate();
  function logoClickHandle(e) {
    navigation("./home")
  }
  return (
    <LeftWrapper onClick={logoClickHandle}>
      <IconLogo/>
    </LeftWrapper>
  )
})

export default HeaderLeft