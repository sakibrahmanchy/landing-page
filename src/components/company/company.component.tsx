import React from 'react';

export type CompanyProps = {
  icon?: string | null;
  name: string;
};

const Company = ({ icon = null, name = "" }: CompanyProps) => (
  <div className="flex flex-col justify-center space-y-2 w-24">
    <div className="flex justify-center">
      <div className="rounded-full h-16 w-16 flex items-center justify-center border-gray-400 border-2 text-2xl text-gray-400">
        {!icon && <span>&#128188;</span>}
        {icon && <i className={`fa fa-${icon}`}></i>}
      </div>
    </div>
    <p>{name}</p>
  </div>
);

export default Company;