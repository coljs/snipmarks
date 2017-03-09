import axios from 'axios'
import * as types from './mutation-types'

export const loadMarks = ({ commit }) => {
  axios.get('http://www.mocky.io/v2/58c0ad950f000059125ee495').then((response) => {
    commit(types.LOAD_MARKERS, response.data)
  }).catch((err) => {
    console.error(err)
  })
}
