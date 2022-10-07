import { fetchHomeDataAction } from '@/store/modules/home';
import { isEmptyObject } from '@/utils/utils';
import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import { HomeWrapper } from './style';

const Home = memo(() => {
  const {goodPriceInfo} = useSelector((state) =>({
    goodPriceInfo: state.home.goodPriceInfo
  }),shallowEqual)

  const dispath =useDispatch();
  useEffect(() => {
    dispath(fetchHomeDataAction())
  },[dispath])
  return (
    <HomeWrapper>
       <HomeBanner/>
       <div className="content">
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>} 
       </div>
    </HomeWrapper>
   
  )
})

export default Home