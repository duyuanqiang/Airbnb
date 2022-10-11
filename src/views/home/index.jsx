import { fetchHomeDataAction } from '@/store/modules/home';
import { isEmptyObject } from '@/utils/utils';
import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './c-cpns/home-banner';
import HomeLongFor from './c-cpns/home-longfor';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import HomeSectionV3 from './c-cpns/home-section-v3';
import { HomeWrapper } from './style';

const Home = memo(() => {
  const {goodPriceInfo,highScoreInfo,discountInfo,recommendInfo,longForInfo,plusInfo} = useSelector((state) =>({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longForInfo: state.home.longForInfo,
    plusInfo:state.home.plusInfo
  }),shallowEqual)

  const dispath =useDispatch();
  useEffect(() => {
    dispath(fetchHomeDataAction())
  },[dispath])
  return (
    <HomeWrapper>
       <HomeBanner/>
       <div className="content">
        {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} itemWidth="33.33%"/>}
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} itemWidth="33.33%"/>}
        {isEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo} itemWidth="20%"/>}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>} 
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>} 
        {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo}/>} 
       </div>
    </HomeWrapper>
   
  )
})

export default Home