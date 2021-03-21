import React from 'react';

/**
 * Button
 *
 * @param props.loading Render spinner insted of children prop
 */
const PBtn: React.FC<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    loading?: boolean;
  }
> = ({ loading = false, className, children, ...props }) => {
  return (
    <button
      className={
        'px-3 py-2 uppercase font-medium rounded focus:outline-none shadow' +
        ' ' +
        className
      }
      {...props}
    >
      {loading ? 'spinner' : children}
    </button>
  );
};

export default PBtn;
