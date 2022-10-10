import { getHomeGoodPriceData,getHomeHighScoreData,getHomeDiscountData, getRecommoendData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHomeDataAction = createAsyncThunk("fetchdata",(payload,{dispatch})=>{
  getHomeGoodPriceData().then(res=>{
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res=>{
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDiscountData().then(res=>{
    dispatch(changeDiscountInfoAction(res))
  })
  getRecommoendData().then(res=>{
    dispatch(changeRecommendInfoAction(res))
  })
})


const homeSlice = createSlice({
    name:"home",
    initialState:{
      goodPriceInfo:{},
      highScoreInfo:{},
      discountInfo:{},
      recommendInfo:{}
    },
    reducers:{
      changeGoodPriceInfoAction(state,{payload}) {
        state.goodPriceInfo = payload
      },
      changeHighScoreInfoAction(state,{payload}) {
        state.highScoreInfo = payload
      },
      changeDiscountInfoAction(state,{payload}) {
        state.discountInfo = payload
      },
      changeRecommendInfoAction(state,{payload}) {
        state.recommendInfo = payload
      },
    },
    extraReducers:{
      // [fetchHomeDataAction.fulfilled](state,{payload}){
      //   console.log(payload);
      //   state.goodPriceInfo =payload;
      // }
    }
})
export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction
} = homeSlice.actions
export default homeSlice.reducer