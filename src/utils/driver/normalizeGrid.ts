export const normalizeGrid = (grid: number | string) => {
  if (grid === "not available") return { available: false, value: null }
  if (typeof grid === "number") return { available: true, value: grid }
  
  return { available: false, value: null }
}