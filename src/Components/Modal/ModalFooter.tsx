import Button from '../Button';

export interface ModalFooterProps {
  okText?: string;
  cancelText?: string;
  onOk?: () => void;
  onCancel?: () => void;
}
const ModalFooter = ({
  okText = 'OK',
  cancelText = 'Cancel',
  onCancel,
  onOk
}: ModalFooterProps) => {
  return (
    <div className="pt-5 flex justify-end items-center gap-2 border-t border-t-grey-200">
      <Button variant={'secondary'} onClick={onCancel}>
        {cancelText}
      </Button>
      <Button variant={'primary'} onClick={onOk}>
        {okText}
      </Button>
    </div>
  );
};

export default ModalFooter;
