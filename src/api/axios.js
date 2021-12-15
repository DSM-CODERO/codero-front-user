import axios from 'axios';

axios.defaults.baseURL = 'http://13.125.220.4:4000/';

export const requestWithToken = (method, url, data) => {
  console.log('request call');

  return axios
    .request({
      method,
      url,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
      data,
    })
    .then((res) => {
      console.log('good');
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
};
