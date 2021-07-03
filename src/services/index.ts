import axios from 'axios';

//global setup e.g
//1. axios error interceptor
//https://github.com/axios/axios#interceptors
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.data?.error) {
      error.message = error.response?.data?.error;
    }
    return Promise.reject(error);
  }
);

export type User = {
  name: string;
};
export const whoAmI = async (): Promise<User> => {
  let res = await axios.get<User>('/api/wai');
  return res.data;
};
