export const getParamsFromUrl = url => {
  url = decodeURI(url)
  if (typeof url === 'string') {
    let params = url.split('?')
    let eachParamsArr = params[1].split('&')
    let obj = {}
    if (eachParamsArr && eachParamsArr.length) {
      eachParamsArr.map(param => {
        let keyValuePair = param.split('=')
        let key = keyValuePair[0]
        let value = keyValuePair[1]
        obj[key] = value
      })
    }
    return obj
  }
}
