import { axios } from 'axios';
import { baseUrl, Endpoints } from '../constants/endpoints';

const api = axios.create({ baseUrl });

const fetchApi = async ({ method = 'get', url = '/', data = {}, params = {}, headers = {} }) => {
  const options = {
    method,
    url,
    data,
    params,
    headers,
  };

  //   const authToken = sessionStorage.getItem('token');
  //   authToken && (options.headers.Authorization = `Bearer ${authToken}`);

  return await api(options);
};
