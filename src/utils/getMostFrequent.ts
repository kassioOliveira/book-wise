export function getMostFrequent(arr: string[]) {
  const hashmap = arr.reduce((acc: any, val: any) => {
    acc[val] = (acc[val] || 0) + 1
    return acc
  }, {})
  return Object.keys(hashmap).reduce((a, b) =>
    hashmap[a] > hashmap[b] ? a : b,
  )
}
