function vertex(x, y, z) {
  return ({
    x, y, z
  })
}

function polygon(indexes, color) {
  return ({
    indexes,
    color
  })
}

export {
  vertex,
  polygon
}