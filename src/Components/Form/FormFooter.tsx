import { Form, Button } from 'antd';
import { FormFooterProps } from '@/Types/FormTypes';

const FormFooter = ({ cancelHandler, isEdit = false, isLogin = false, isLoading, label = "Create" }: FormFooterProps) => {
  return (
    <div className="flex gap-5 justify-end pt-8">
      <Form.Item>
        {isLogin ?
          ''
          : <Button
            size="large"
            type="default"
            className="text-disable border-blue-400 text-blue-500"
            onClick={cancelHandler}>
            Cancel
          </Button>}
        <Button
          type="primary"
          size="large"
          className="bg-blue-500 ml-4"
          htmlType="submit"
          loading={isLoading}>
          {isEdit ? 'Edit' : isLogin ? 'Login' : label}
        </Button>
      </Form.Item>
    </div>
  );
};

export default FormFooter;
