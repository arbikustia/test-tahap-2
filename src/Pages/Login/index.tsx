import React, { useEffect, useState } from 'react'
import { Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Loading from '@/Components/Loading';
import logoHellomo from '@/assets/icons/logo-hellomo.svg';
import hero from '@/assets/icons/login-hero.svg';
import { useCookies } from 'react-cookie'
import AuthenticationService from '@/Services/Api/Authentication/Index';


function Login() {
    const [form] = Form.useForm<{ username: string, password: string }>();
    const [isLoading, setIsLoading] = useState(false); //required
    const [, setCookie] = useCookies(['token', 'user'])
    const navigate = useNavigate()

    const save = async (values: { username: string, password: string }) => {
        setIsLoading(true);
        try {
            const body: { username: string, password: string } = {
                username: values.username,
                password: values.password,
            }
            console.log(body)
            const response = await AuthenticationService.postLogin(body);
            console.log(response.data.data)
            setCookie('token', JSON.stringify(response.data.data.accessToken), { path: "/" });
            setCookie('user', JSON.stringify(body.username), { path: "/" });
            navigate('/inventory/dashboard')
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.add("light")
      }, [])

    return (
        <>
            <div className='flex'>
                <div className='bg-blue-600 h-screen w-1/2 flex flex-col justify-start items-start relative'>
                    <img className='my-4 absolute left-0 bottom-0 w-3/4' src={hero} alt="icon ahm" />
                    <div className='text-2xl text-red-500 p-10 font-md'><img className='w-44' src={logoHellomo} alt="" /></div>
                </div>
                <div className='flex bg-white-50 flex-col items-center justify-center w-1/2'>
                    <div className='bg-white-50 w-2/3 rounded-lg p-20   '>
                        <div>
                            <h1 className='mb-5 font-normal text-4xl'>Selamat Datang</h1>
                            <h1 className='mb-5 font-bold text-5xl'>PT. Hellomo Indonesia</h1>
                        </div>
                        <div className='w-full'>
                            <Form
                                form={form}
                                layout="vertical"
                                requiredMark={false}
                                autoComplete="off"
                                onFinish={save}
                                className="mt-10 text-grey-700">
                                <Form.Item label="Id" name="id" hidden>
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    label="Email / Username"
                                    className='font-extrabold text-grey-900'
                                    name="username"
                                    rules={[{ required: true, message: 'Input username' }]}>
                                    <Input size="large" placeholder='Type Your Username' className='h-14 border bg-transparent text-grey-900 border-grey-400 focus:bg-transparent focus:outline-none hover:bg-transparent' />
                                </Form.Item>
                                <Form.Item
                                    label="Password"
                                    className='font-extrabold text-grey-900'
                                    name="password"
                                    rules={[{ required: true, message: 'Input Password' }]}>
                                    <Input.Password className='h-14 border bg-transparent text-grey-900 border-grey-400 focus:bg-transparent focus:outline-none hover:bg-transparent' placeholder="Type Your Password" />

                                </Form.Item>
                                <button onClick={() => save} className='w-full h-16 flex justify-center items-center gap-2 bg-blue-500 rounded-md text-white-50 text-2xl font-bold'>{isLoading ? <Loading styling="w-7" /> : ''} Login</button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 text-grey-900 w-full bg-transparent flex justify-end p-3'>Copyright © 2024 Bantu IT</div>
            </div>
        </>
    )
}

export default Login