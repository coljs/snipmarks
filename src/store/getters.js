export const getMarkers = state => {
  return state.markers
}

export const getMarker = state => {
  return state.markers.find(marker => marker.id === state.marker)
}
