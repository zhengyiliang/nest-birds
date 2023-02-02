import axios, { AxiosInstance, AxiosResponse } from 'axios';
import qs from 'qs';

// import { showMessage } from "./status";
import { message } from 'antd';

// import { ILogin, IUser } from 'model/login';

export const showMessage = (status: number | string): string => {
  let message: string = '';
  switch (status) {
    case 400:
      message = '请求错误(400)';
      break;
    case 401:
      message = '未授权，请重新登录(401)';
      break;
    case 403:
      message = '拒绝访问(403)';
      break;
    case 404:
      message = '请求出错(404)';
      break;
    case 408:
      message = '请求超时(408)';
      break;
    case 500:
      message = '服务器错误(500)';
      break;
    case 501:
      message = '服务未实现(501)';
      break;
    case 502:
      message = '网络错误(502)';
      break;
    case 503:
      message = '服务不可用(503)';
      break;
    case 504:
      message = '网络超时(504)';
      break;
    case 505:
      message = 'HTTP版本不受支持(505)';
      break;
    default:
      message = `连接出错(${status})!`;
  }
  return `${message}，请检查网络或联系管理员！`;
};

// 返回res.data的interface
export interface IResponse {
  code: number | string;
  data: any;
  msg: string;
}

let request: AxiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  transformRequest: [
    function (data) {
      //由于使用的 form-data传数据所以要格式化
      delete data.Authorization;
      data = qs.stringify(data);
      return data;
    },
  ],
});

// axios实例拦截响应
request.interceptors.response.use(
  (response: AxiosResponse) => {
    // if (response.headers.authorization) {
    //   localStorage.setItem('app_token', response.headers.authorization);
    // } else {
    //   if (response.data && response.data.token) {
    //     localStorage.setItem('app_token', response.data.token);
    //   }
    // }

    if (response.status === 200) {
      return response;
    } else {
      showMessage(response.status);
      return response;
    }
  },
  // 请求失败
  (error: any) => {
    const { response } = error;
    if (response) {
      // 请求已发出，但是不在2xx的范围
      showMessage(response.status);
      return Promise.reject(response.data);
    } else {
      message.error('网络连接异常,请稍后再试!');
    }
  }
);

// axios实例拦截请求
request.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('app_token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default request;

// /**
//  * @description: 用户登录
//  * @params {ILogin} params
//  * @return {Promise}
//  */
// export const Login = (params: ILogin): Promise<IResponse> => {
//   return request.post('user/login',params).then(res => res.data);
// };

// /**
//  * @description: 通过id获取用户
//  * @params {IUser} params
//  * @return {Promise}
//  */
// export const getUserInfo = (params: IUser): Promise<IResponse> => {
//   return request.post('user/getInfo',params).then(res => res.data);
// };
