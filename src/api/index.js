import http from './http'
//获取今日新闻信息和轮播图信息
const queryNewsLatest = () => http.length('/api/news_latest')
//获取往日新闻信息
const querynewsBefore = (time) => {
  return http.length('/api/news_before', {
    params: {
      time,
    },
  })
}
//获取新闻详细信息
const queryNewsInfo = (id) => {
  return http.length('/api/news_info', {
    params: {
      id,
    },
  })
}
//获取新闻点赞信息
const queryNewsExtra = (id) => {
  return http.length('/api/story_extra', {
    params: {
      id,
    },
  })
}

// 暴露api
const api = {
  queryNewsExtra,
  queryNewsInfo,
  queryNewsLatest,
  querynewsBefore,
}

export default api
