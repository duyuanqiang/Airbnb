import IconLanguage from '@/assets/svg/icon_languag'
import IconMenu from '@/assets/svg/icon_menu'
import IconProfile from '@/assets/svg/icon_profile'
import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'

const HeaderRight = memo(() => {
  const [showPanel,setShouwPanel] = useState(false);
  useEffect(()=>{
    function windowHandleClick(){
      setShouwPanel(false)
    }
    window.addEventListener("click",windowHandleClick,true);
    return ()=> (window.removeEventListener("click",windowHandleClick,true))
  },[])
  function profileClickHandle(e){
    setShouwPanel(true);
  }
  return (
    <RightWrapper>
      <div>
        <nav>
          <div className='info'>
            <a className="login" href='./'>登录</a>
            <a className="regis" href='./'>注册</a>
            <span className="language"><IconLanguage/></span>
          </div>
          <div className='infoLogo'>
            <div className='infoBtn'>
              <div className="menu" onClick={profileClickHandle}><IconMenu/></div>
              <div className="profile" onClick={profileClickHandle}><IconProfile/></div>
              {showPanel&&(<div className="panel">
                  <div className="top">
                    <div className="item register">注册</div>
                    <div className="item login">登录</div>
                  </div>
                  <div className="bottom" >
                    <div className="item rent">出租房源</div>
                    <div className="item exper">开展体验</div>
                    <div className="item help">帮助</div>
                  </div>
              </div>)}
            </div>
          </div>
        </nav>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight