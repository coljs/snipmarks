import * as types from './mutation-types'

export default {
  [types.LOAD_MARKERS] (state, markerList) {
    state.markers = markerList
  },
  [types.LOAD_MARKER] (state, markerId) {
    state.marker = markerId
  },
  [types.CREATE_MARKER] (state, newMarker) {
    state.markers = [ ...state.markers, newMarker ]
  }
}
