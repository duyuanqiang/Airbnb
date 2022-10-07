const theme = {
  color:{
    primaryColor:"#ff385c",
    secondaryColor:"#00848A"

  },
  text:{
    primaryColor:"#484848",
    secondaryColor:"#222"
  },
  font:{
    fontWeight:`font-weight:600;`,
  },
  mixin:{
    boxShadow:`
      transition: box-shadow 0.2s ease;
        &:hover{
          box-shadow:var(--e-swdx-p);
        }
    `,
    desc7:`
      margin: 0px !important;
      word-wrap: break-word !important;
      font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC" !important;
      vertical-align: middle !important;
      font-size: 12px !important;
      line-height: 1.33333em !important;
      font-weight: 800 !important;
    `,
    desc5:`
      margin: 0px !important;
      word-wrap: break-word !important;
      font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC" !important;
      vertical-align: middle !important;
      font-size: 16px !important;
      line-height: 1.375em !important;
      font-weight: 800 !important;
    `
  }

}
export default theme