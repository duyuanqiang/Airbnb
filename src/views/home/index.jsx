import { fetchHomeDataAction } from '@/store/modules/home';
import { isEmptyObject } from '@/utils/utils';
import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeBanner from './c-cpns/home-banner';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import { HomeWrapper } from './style';

const Home = memo(() => {
  const {goodPriceInfo,highScoreInfo,discountInfo} = useSelector((state) =>({
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
  }),shallowEqual)

  const dispath =useDispatch();
  useEffect(() => {
    dispath(fetchHomeDataAction())
  },[dispath])
  return (
    <HomeWrapper>
       <HomeBanner/>
       <div className="content">
        {isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} itemWidth="33.33%"/>}
        {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}/>} 
        {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}/>} 
       </div>
    </HomeWrapper>
   
  )
})

export default Home