import React from 'react';
import spinner from './spinner.gif';

const Loading = () => {
  return (
    <div className="mx-auto" style={{width: '100px', marginTop: '100px'}}>
      <img src={spinner} className="w-100" alt="" />
    </div>
  );
};
export default Loading;
