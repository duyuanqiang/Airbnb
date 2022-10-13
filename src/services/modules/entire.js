import hmgRequest from "..";
export function getEntireRoomList(offset=0,size=20){
  return hmgRequest.get({
    url:"entire/list",
    params:{
      offset,
      size
    }
  })
}