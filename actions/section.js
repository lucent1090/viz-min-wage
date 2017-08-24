import * as actionTypes from '../constants/action-types'
import { breakpoints } from '../styles/common-variables'
import { appConfig } from '../config'

let readSections = []

export const detectWindowSize = (_width, _height) => (dispatch) => {
  const w = window
  const d = document
  const documentElement = d.documentElement

  const width = _width || w.innerWidth || documentElement.clientWidth
  const height = _height || w.innerHeight || documentElement.clientHeight
  const mobileWidth = breakpoints.small.min * 16

  if (width < mobileWidth) {
    return dispatch({ type: actionTypes.SET_MOBILE, width, height })
  }

  return dispatch({ type: actionTypes.SET_NON_MOBILE, width, height })
}

export const setSectionIndex = index => (dispatch) => {
  if (!readSections.includes(index)) {
    // reading the section fot the first time
    readSections.push(index)
    if (ga) {
      ga('send', {
        hitType: 'event',
        eventCategory: `${appConfig.projectName}-Viewing`,
        eventAction: 'Section',
        eventLabel: `section-${index}`,
      })
    }
  }
  return dispatch({ type: actionTypes.SET_SECTION_INDEX, index })
}
