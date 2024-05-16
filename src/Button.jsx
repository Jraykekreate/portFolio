/* eslint-disable react/prop-types */

export const Button = ({ children }) => {
  return (
    <button className="bg-secondaryText transition-all hover:bg-primaryBackground border-4  hover:text-secondaryText  hover:border-secondaryText  dark:border-dark-2  inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white ">
      {children}
    </button>
  );
};

export const OutlineButton = ({ children }) => {
  return (
    <button className="border-primaryText border-4 border-primaryText inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-primary hover:bg-primaryText  hover:text-primaryBackground  disabled:bg-slate-500 disabled:border-slate-500  active:bg-primaryBackground active:text-primaryText">
      {children}
    </button>
  );
};
