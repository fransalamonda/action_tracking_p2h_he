import axios from 'axios';
//import authHeader from './auth-header';
import qs from 'qs';


// const API_URL = process.env.VUE_APP_BASE_URL;
// var config = {
//   headers : {
//     "Authorization" : "Bearer 6ff68e7a8959d95647efa464ad61e0d4",
//     // "Content-Type" : "application/x-www-form-urlencoded"
//     //'content-type': 'application/x-www-form-urlencoded;charset=utf-8'

//   }
// }


class UserService {

  login(nik,pass) {
    var token= "$2a$12$yWjlqehQ7fFMGCNKAelaoO..8w8.pqq4MIv8/ewAXHKB1UCiCdx5G"
    var config = {
      headers : {
        "Authorization" : "Bearer "+token,
        "Content-Type" : "application/x-www-form-urlencoded"
      }
    }

  return axios.post('/API1/api_sso_portal/Api_portal/login_app', 
    qs.stringify({
      'nik': nik,
      'password': pass,
      'app_key': 'NCGl3wxrKSxjeaIyXDHjfQ==' 
    }),
    config,
    )
    .then(response => {
      //alert(JSON.stringify(response.data)); // Display the response data as a string
      if (JSON.stringify(response.data.success)=='true') {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      return JSON.stringify(response.data);
    });
  }

  // //Token Auth
  async getToken() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      try {
        let data = {
          username: 'maLordd',//API_USER,
          password: 'maP@ssw0rd'//API_PASS
        };
  
        let config = {
          method: 'post',
          url: '/API1/api_she_sertifikasi/She/get_token',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded', 
            'Authorization': 'Bearer 4d5708ef7640cd39dea3a7872ac8da346d05b080'
          },
          data: data
        };
  
        const response = await axios.request(config);
        return  response.data.token ;
      } catch (error) {
        console.error(error);
        return {};
      }
    } else {
      return {};
    }
  }
  async plant_api(kodeou) {
    try {
      const token = await this.getToken();//'cc5a40b79712ace6b789688c21908bff';//
      let data = qs.stringify({
        'nik': kodeou
      });
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '/API1/api_she_sertifikasi/She/m_plant',
        headers: {
          'X-Requested-With': 'XMLHttpRequest', 
          'Content-Type': 'application/x-www-form-urlencoded', 
          'Authorization': 'Bearer '+ token
        },
        data: data
      };
      const response =  axios.request(config);
      //console.log(JSON.stringify(response.data));
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  getUnassigned(plant) {
    try {
      const token = '4d5708ef7640cd39dea3a7872ac8da346d05b080';
      // let data = qs.stringify({
      //   'plant_dept': plant
      // });
      console.log(plant);
      let data = new FormData();
      data.append('dev_lang', 'in');
      data.append('plant_dept', 'IDCGKL1');

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: '/API1/api_pfu_byh/pfu/get_patrol_report',
        headers: {
          'Authorization': 'Bearer '+ token,
          'Cookie': 'ci_session=pt9fujoi0ss5m6409qlvfn1phbmj13sd', 
        },
        data: data
      };
      const response =  axios.request(config);
      //console.log(JSON.stringify(response.data));
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  // __getUnassigned(plant) {
  //   try {
  //     const token = '4d5708ef7640cd39dea3a7872ac8da346d05b080';
  //     let data = qs.stringify({
  //       'plant_dept': plant
  //     });
  //     let config = {
  //       method: 'post',
  //       maxBodyLength: Infinity,
  //       url: '/API1/api_pfu_byh/pfu/get_patrol_report',
  //       headers: {
  //         'Authorization': 'Bearer '+ token,
  //         'Cookie': 'ci_session=pt9fujoi0ss5m6409qlvfn1phbmj13sd', 
  //       },
  //       data: data
  //     };
  //     const response =  axios.request(config);
  //     //console.log(JSON.stringify(response.data));
  //     return response;
  //   } catch (error) {
  //     console.error(error);
  //     return error;
  //   }
  // }
// _plant_api_() {
  //   let user = JSON.parse(localStorage.getItem('user'));
  //   if (user) {
  //     try {
  //       let data = {
  //         username: 'maLordd',//API_USER,
  //         password: 'maP@ssw0rd'//API_PASS
  //       };
  
  //       let config = {
  //         method: 'post',
  //         url: '/API1/api_she_sertifikasi/She/get_token',
  //         headers: {
  //           'Content-Type': 'application/x-www-form-urlencoded', 
  //           'Authorization': 'Bearer 4d5708ef7640cd39dea3a7872ac8da346d05b080'
  //         },
  //         data: data
  //       };
  
  //       const response = await axios.request(config);
  //       //console.log(response.data.token);
  //       return  response.data.token ;
  //     } catch (error) {
  //       console.error(error);
  //       return {};
  //     }
  //   } else {
  //     return {};
  //   }
  // }

 
}

export default new UserService();