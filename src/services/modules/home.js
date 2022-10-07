import hmgRequest from "..";

export function getHomeGoodPriceData(params) {
  return hmgRequest.get({
    url:"/home/goodprice"
  })
}