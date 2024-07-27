import { baseUrl } from '@/Services/BaseUrl/index';
import { AuthenticationType } from '@/Types/OauthType';


const Oauth2 = async (body: AuthenticationType) => {
    return baseUrl.post(`/oauth/token`, body);
  };

const AuthenticationService = {
  Oauth2
};

export default AuthenticationService;
