['bulma', 'fonts', 'style'].forEach(item => {
  if (document.getElementById(item) === null) {
    const css = document.createElement('link')
    css.href = `./${item}.css`
    css.id = item
  }
})
