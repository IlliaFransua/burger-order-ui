export function areArraysEqual(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false
  }
  const set2 = new Set(arr2)
  return arr1.every(item => set2.has(item))
}

