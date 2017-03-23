export const getMarkers = state => {
  return state.markers
}

export const getMarker = state => {
  return state.markers.find(marker => marker['.key'] === state.marker)
}

export const lastIndex = state => {
  return state.markers[state.markers.length - 1]
}
