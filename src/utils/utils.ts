import React, { Dispatch } from 'react'

export function useStickyState(defaultValue: any, key: string): [string, Dispatch<any>] {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key)

    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export function useStickyStateForMap(
  defaultValue: any,
  key: string
): [Map<string, boolean>, Dispatch<any>] {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key)

    return stickyValue !== null ? objToStrMap(JSON.parse(stickyValue)) : defaultValue
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(strMapToObj(value)))
  }, [key, value])

  return [value, setValue]
}

export function strMapToObj(strMap: [string, boolean][]) {
  let obj = Object.create(null)
  for (let [k, v] of strMap) {
    obj[k] = v
  }
  return obj
}

export function objToStrMap(obj: any) {
  let strMap = new Map()
  for (let k of Object.keys(obj)) {
    strMap.set(k, obj[k])
  }
  return strMap
}
