import axios from 'axios';
//import qs from 'qs';

const API_URL = 'https://caliak.com/api_yugapp/public/';
//const API_KEY = '9hAWqbghxkcYIR6GlYyY';
//const API_TOKEN = '$2a$12$yWjlqehQ7fFMGCNKAelaoO..8w8.pqq4MIv8/ewAXHKB1UCiCdx5G';
// const config = {
//   headers: { Authorization: `Bearer ${API_TOKEN}` }
// };



class AuthService {
  
  login(user) {
    const data = JSON.stringify({
      email: user.username,
      password: user.password
    });
    console.log(data);
    const config = {
      headers : {
        'Content-Type': 'application/json'
      }
    };
    
    return axios.post(
      API_URL + 'login', config,data,
    )
      .then(response => {
        // if (response.data.token) {
        //   localStorage.setItem('user', JSON.stringify(response.data));
        // }
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
      })
      .catch(function (error) {
        // Handle any errors that occurred during the request
        console.error(error);
        throw error; // You can throw the error to handle it elsewhere if needed
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();