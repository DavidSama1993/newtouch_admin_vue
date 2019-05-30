/**
 * 千分计数法
 * @param {*} num 
 */
export function toThousand(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * 会计计数法
 * @param {*} num 
 */
export function toAccounting(num) {
  return (+num || 0).toFixed(2).replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}