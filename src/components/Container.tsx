import React from 'react';
import { ComponentProps } from '../props';

export const Container = ({ children }: ComponentProps) => {
  //flex flex-col flex-no-wrap h-full
  return (
    <>
      <div className="content h-full">
        { children }
      </div>
      {/* <Footer /> */}
    </>
  );
}
