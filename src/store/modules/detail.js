import {createSlice} from "@reduxjs/toolkit"
export const detailSlice = createSlice({
  name:"detail",
  initialState:{
    detailData:{}
  },
  reducers:{
    changeDetailInfoAction(state,{payload}){
      state.detailData = payload
    }
  }
})

export const {
  changeDetailInfoAction
} = detailSlice.actions;
export default detailSlice.reducer