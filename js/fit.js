const fit = (canvas, render) => {
  const resize = () => {
    Object.assign(canvas, {
      width: window.innerWidth,
      height: window.innerHeight
    }) 
  }

  const loop = () => {
    resize()
    render()
  }

  window.addEventListener("resize", loop)

  loop()
}

export default BiquadFilterType