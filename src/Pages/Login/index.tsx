import logo from '@/assets/images/logo-technopartner.png';
import Loading from '@/Components/Loading';
import AuthenticationService from '@/Services/Api/OauthService';
import { AuthenticationType } from '@/Types/OauthType';
import { Form, Input } from 'antd';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [form] = Form.useForm<{ email: string; password: string }>();
  const [isLoading, setIsLoading] = useState(false); //required
  const navigate = useNavigate();
  const [, setCookie] = useCookies(['token']);


  
  const save = async (values: { email: string; password: string }) => {
    setIsLoading(true);
    console.log(values)
    try {
      const body: AuthenticationType = {
        client_id: 'e78869f77986684a',
        client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
        grant_type: 'password',
        username: values.email,
        password: values.password
      };
      console.log(body);
      const response = await AuthenticationService.Oauth2(body);
      console.log(response.data,'asdasdas');
      setCookie('token', JSON.stringify(response.data.token_type + ' ' + response.data.access_token), { path: '/' });
      navigate('/home');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:h-screen flex justify-center items-center">
      <div className=" w-full h-[90%] flex flex-col md:w-1/3 md:shadow-lg rounded-lg">
        <div className=" h-[40vh] flex justify-center items-center px-7">
          <img src={logo} alt="" />
        </div>
        <div className=" h-[50%] px-10">
          <Form
            form={form}
            layout="vertical"
            requiredMark={false}
            autoComplete="off"
            onFinish={save}
            className="mt-10 text-grey-700 ">
            <Form.Item label="Id" name="id" hidden>
              <Input />
            </Form.Item>
            <Form.Item
              label="Email"
              className="font-normal text-grey-900"
              name="email"
              rules={[{ required: true, message: 'Input Email' }]}>
              <Input
                type="email"
                size="large"
                placeholder="Type Your Email"
                className="h-10 border text-sm bg-transparent text-grey-900 border-grey-400 focus:bg-transparent focus:outline-none hover:bg-transparent"
              />
            </Form.Item>
            <Form.Item
              label="Password"
              className="font-normal text-grey-900"
              name="password"
              rules={[{ required: true, message: 'Input Password' }]}>
              <Input.Password
                className="h-10 text-sm border bg-transparent text-grey-900 border-grey-400 focus:bg-transparent focus:outline-none hover:bg-transparent"
                placeholder="Type Your Password"
              />
            </Form.Item>
            <button
              onClick={() => save}
              className="w-full h-10 flex justify-center items-center gap-2 bg-blue-500 rounded-md text-white-50 text-md font-bold">
              {isLoading ? <Loading styling="w-7" /> : ''} Login
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Index;
