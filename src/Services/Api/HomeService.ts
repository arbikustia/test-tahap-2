import { baseUrl } from '@/Services/BaseUrl/index';

const GetDataUser = async (token:string) => {
  return baseUrl.get(`/api/home`, {
    headers: {
      Authorization: token
    }
  });
};

const HomeService = {
    GetDataUser
};

export default HomeService;
