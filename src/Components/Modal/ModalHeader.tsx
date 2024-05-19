export interface ModalHeaderProps {
  title: string;
  subtitle: string;
  icon?: string;
}

const ModalHeader = ({ title, subtitle, icon }: ModalHeaderProps) => {
  return (
    <div className="flex items-center gap-1 pb-5 border-b border-b-grey-200">
      {icon && <img src={icon} width={32} height={32} />}

      <div className="flex flex-col justify-center">
        <h5 className="text-2xl font-bold text-grey-500 dark:text-white-500">{title}</h5>
        <p className="text-md text-grey-200">{subtitle}</p>
      </div>
    </div>
  );
};

export default ModalHeader;
