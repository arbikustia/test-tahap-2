import { baseUrl } from '@/Services/BaseUrl/index';



const GetMenu = async (body:{show_all : number, token:string}) => {
    return baseUrl.post(`/api/menu`, {show_all : body.show_all},{
        headers: {
            Authorization:body.token
        }
    });
  };

const MenuService = {
    GetMenu
};

export default MenuService;
