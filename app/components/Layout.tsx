import React from 'react';

const Layout = ({children, className=""} : {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light text-dark ${className} dark:bg-dark dark:text-light`}>
      {children}
    </div>
  )
}

export default Layout;
