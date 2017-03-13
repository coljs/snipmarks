import axios from 'axios'
import * as types from './mutation-types'

export const loadMarks = ({ commit }) => {
  console.log('commits', commit)
  // axios.get('http://www.mocky.io/v2/58c0ad950f000059125ee495').then((response) => {
  axios.get('http://www.mocky.io/v2/58c0fff9110000310863edc4').then((response) => {
    console.log('2response', response)
    commit(types.LOAD_MARKERS, response.data)
  }).catch((err) => {
    console.error(err)
  })
}

export const loadMark = ({ commit }) => {
  console.log('commit', commit)
  // axios.get('http://www.mocky.io/v2/58c0ad950f000059125ee495').then((response) => {
  axios.get('http://www.mocky.io/v2/58c0fff9110000310863edc4').then((response) => {
    console.log('2response2', response)
    commit(types.LOAD_MARKER, response.data[0])
  }).catch((err) => {
    console.error(err)
  })
}
