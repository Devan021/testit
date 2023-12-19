import React, { ChangeEventHandler } from 'react';
import clsx from 'clsx';

type TInputField = {
  label: string;
  type?: string;
  name?: string | null;
  id?: string | null;
  placeholder?: string;
  required?: boolean;
  className?: string | null;
  labelClassName?: string | null;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  [x: string]: any;
};

const InputField = ({
  label,
  id = null,
  name = null,
  type = 'text',
  placeholder = '',
  required = false,
  className = null,
  labelClassName = null,
  onChange = (_) => {},
  ...props
}: TInputField) => {
    
  const labelProps: {
    className: string
    htmlFor?: string
  } = {
    className: clsx(['block mb-2 text-sm font-medium', labelClassName]),
  };
  
  if(id) labelProps.htmlFor = id;
    
  return (
      <div className="flex flex-col items-start">
          <label {...labelProps}>{label}</label>
          <input
              type={type}
              name={name || id || label}
              id={id || name || label}
              className={clsx([
                'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600', 
                'focus:border-primary-600 block w-full p-2.5',
                className,
              ])}
              placeholder={placeholder}
              onChange={onChange}
              required={required}
              {...props}
          />
      </div>
  );
};

export default InputField;