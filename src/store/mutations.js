import * as types from './mutation-types'
import db from './firebase'

export default {
  [types.LOAD_MARKER] (state, markerId) {
    state.marker = markerId
  },
  [types.CREATE_MARKER] (state, newMarker) {
    db.ref('markers').push(newMarker)
  }
}
