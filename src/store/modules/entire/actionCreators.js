import { getEntireRoomList } from "@/services/modules/entire"
import * as actionTypes from "./constants"
export const changeCurrentPageAction=(currentPage)=>({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})
export const changeRoomListAction=(roomList)=>({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})
export const changeTotalCountAction=(totalCount)=>({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})
export const changeIsLoadingAction=(isLoading)=>({
  type: actionTypes.CHANGE_IS_LOADING,
  isLoading
})
export const changeDetailDataAction=(detailData)=>({
  type: actionTypes.CHANGE_DETAIL_DAtA,
  detailData
})
export const fetchRoomListAction = (page=0) =>{
  return async (dispatch,getState) =>{
    //将当前页数存入redux
    dispatch(changeCurrentPageAction(page))
    //请求数据
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeIsLoadingAction(false))
    const roomList = res.list;
    //保存数据
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}
