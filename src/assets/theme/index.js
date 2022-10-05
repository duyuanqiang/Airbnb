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
    `
  }

}
export default theme