export default function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
  
    if (user ) {
      return { 
        //Authorization: 'Bearer ' + user.accessToken 
        "Authorization" : "Bearer $2a$12$yWjlqehQ7fFMGCNKAelaoO..8w8.pqq4MIv8/ewAXHKB1UCiCdx5G",
        "Content-Type" : "application/x-www-form-urlencoded"
      }; // for Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }