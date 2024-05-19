import { baseUrl } from '@/Services/BaseUrl/index';


const postLogin = async (body?: {username:string, password:string}, token?: string) => {
  return baseUrl.post(`/api/Authentication`, body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const AuthenticationService = {
    postLogin,


};

export default AuthenticationService;
