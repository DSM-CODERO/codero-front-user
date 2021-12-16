import axios from 'axios';

<<<<<<< HEAD
// const BASE_URL = `http://54.180.158.164`;
axios.defaults.baseURL = 'http://13.125.220.4:4000';

export const requestWithToken = (method, url, headers, data) => {
=======
axios.defaults.baseURL = 'http://13.125.220.4:4000/';

export const requestWithToken = (method, url, data) => {
>>>>>>> develop
  console.log('request call');

  return axios
    .request({
      method,
      url,
      headers: {
<<<<<<< HEAD
        ...headers,
=======
>>>>>>> develop
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
