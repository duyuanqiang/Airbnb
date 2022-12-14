import hmgRequest from "..";

export function getHomeGoodPriceData(params) {
  return hmgRequest.get({
    url:"/home/goodprice"
  })
}
export function getHomeHighScoreData(params) {
  return hmgRequest.get({
    url:"/home/highscore"
  })
}
export function getHomeDiscountData(params) {
  return hmgRequest.get({
    url:"/home/discount"
  })
}
export function getRecommoendData(params) {
  return hmgRequest.get({
    url:"/home/hotrecommenddest"
  })
}
export function getHomeLongForData(params) {
  return hmgRequest.get({
    url:"/home/longfor"
  })
}
export function getHomePlusData(params) {
  return hmgRequest.get({
    url:"/home/plus"
  })
}