import _ from 'lodash'
function getParams (obj) {
  let params = '?'
  _.keys(obj).forEach((item) => {
    params += [item, '=', obj[item], '&'].join('')
  })
  return params.slice(0, -1)
}

export {
  getParams
}
