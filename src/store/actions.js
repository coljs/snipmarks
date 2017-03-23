import * as types from './mutation-types'

export const loadMark = ({ commit }, markerId) => {
  commit(types.LOAD_MARKER, markerId)
}

export const createSnipmark = ({ commit }, newMarker) => {
  commit(types.CREATE_MARKER, newMarker)
}
