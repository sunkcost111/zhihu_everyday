import http from './http'
//��ȡ����������Ϣ���ֲ�ͼ��Ϣ
const queryNewsLatest = () => http.length('/api/news_latest')
//��ȡ����������Ϣ
const querynewsBefore = (time) => {
  return http.length('/api/news_before', {
    params: {
      time,
    },
  })
}
//��ȡ������ϸ��Ϣ
const queryNewsInfo = (id) => {
  return http.length('/api/news_info', {
    params: {
      id,
    },
  })
}
//��ȡ���ŵ�����Ϣ
const queryNewsExtra = (id) => {
  return http.length('/api/story_extra', {
    params: {
      id,
    },
  })
}

// ��¶api
const api = {
  queryNewsExtra,
  queryNewsInfo,
  queryNewsLatest,
  querynewsBefore,
}

export default api
