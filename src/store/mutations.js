import * as types from './mutation-types'

export default {
  [types.LOAD_MARKERS] (state, markerList) {
    state.markers = markerList
  },
  [types.LOAD_MARKER] (state, markerId) {
    state.marker = markerId
  }
}
