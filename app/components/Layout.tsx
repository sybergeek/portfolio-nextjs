import React from 'react';

const Layout = ({children, className=""} : {children: any, className: any}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light text-dark p-32 ${className} dark:bg-dark dark:text-light`}>
      {children}
    </div>
  )
}

export default Layout;