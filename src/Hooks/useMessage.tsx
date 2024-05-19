import Alert from '@/Components/Alert';
import { message, MessageArgsProps } from 'antd';
import { AlertProps } from '@/Components/Alert';

interface OpenMessageConfig
  extends Omit<MessageArgsProps, 'content' | 'type' | 'className' | 'style'>,
    Pick<AlertProps, 'action' | 'mode' | 'title' | 'message'> {}

const useMessage = () => {
  const [messageApi, contextHolder] = message.useMessage({
    duration: 2
  });

  const openMessage = ({ mode, action, message, title, ...config }: OpenMessageConfig) => {
    messageApi.open({
      ...config,
      content: <Alert mode={mode} action={action} title={title} message={message} />
    });
  };

  const closeMessage = (key: string) => {
    messageApi.destroy(key);
  };

  return {
    contextHolder,
    openMessage,
    closeMessage
  };
};

export default useMessage;
