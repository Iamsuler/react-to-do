import React from 'react'
import { Iterable } from 'immutable'

export const toJS = WrapperedComponent => WrapperedComponentProps => {
  const KEY = 0
  const VALUE = 1
  const propsJS = Object.entries(WrapperedComponentProps)
    .reduce((newProps, WrapperedComponentProp) => {
      const value = WrapperedComponentProp[VALUE]
      newProps[WrapperedComponentProp[KEY]] = Iterable.isIterable(value)
        ? value.toJS()
        : value
      return newProps
    }, {})
  
  return <WrapperedComponent { ...propsJS } />
}
