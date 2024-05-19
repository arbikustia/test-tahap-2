import React from 'react';
import Exit from '@/Assets/icons/exit.svg';

interface FormHeaderProps {
  title?: string;
  closeHandler: () => void;
}
const FormHeader = ({ title, closeHandler }: FormHeaderProps) => {
  return (
    <div className="flex flex-row justify-between p-8 border-b border-b-neutral-700">
      <span className="font-bold text-4xl">{title}</span>
      <img
        className="w-5 h-fit font-extrabold cursor-pointer"
        src={Exit}
        alt="exit"
        onClick={closeHandler}
      />
    </div>
  );
};

export default FormHeader;
