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
      margin: 0px;
      word-wrap: break-word;
      font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC";
      vertical-align: middle;
      font-size: 12px;
      line-height: 1.33333em;
      font-weight: 800;
    `,
    desc5:`
      margin: 0px;
      word-wrap: break-word;
      font-family: Circular, PingFang-SC, "Hiragino Sans GB", 微软雅黑, "Microsoft YaHei", "Heiti SC";
      vertical-align: middle;
      font-size: 16px;
      line-height: 1.375em;
      font-weight: 800;
    `,
    active:`&.active{
      color: #fff;
      background: #00848A;
    }
    `
  }

}
export default theme