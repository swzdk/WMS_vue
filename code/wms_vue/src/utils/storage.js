// 本地数据存储（持久化）
export const setLocal = (key, value) => {
  const type = Object.prototype.toString.call(value).slice(8, -1)
  if (type === 'Object' || type === 'Array') {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    localStorage.setItem(key, value)
  }
}

// 本地数据读取（持久化）
export const getLocal = (key) => {
  const res = localStorage.getItem(key)
  if (res === null || res === 'null' || res === undefined) {
    return null
  } else {
    return JSON.parse(res)
  }
}
