const BASE_URL = 'http://gank.io/api'
const GET_URL = BASE_URL.concat('/history/content/10/1')

const ERROR_DATA_IS_NULL = '获取数据为空，请重试'
const PAGE_MAIN = '/pages/main/main'
const PAGE_SPECIFIC = '/pages/specific/specific'
const PAGE_POST = '/pages/post/post'

module.exports = {
  BASE_URL: BASE_URL,
  GET_URL: GET_URL,
  ERROR_DATA_IS_NULL: ERROR_DATA_IS_NULL,
  PAGE_MAIN: PAGE_MAIN,
  PAGE_SPECIFIC: PAGE_SPECIFIC,
  PAGE_POST: PAGE_POST
}

const getData = (url) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: (res) => {
        console.log('http url = ' + url)
        resolve(res.data)
      },
      fail: (res) => {
        console.log('http url = ' + url)
        reject(res.errMsg)
      }
    })
  })
}

module.exports.getData = getData
