import React from 'react';
import loaderGif from '../assets/loader.gif';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <img src={loaderGif} alt="Loading..." className="w-24 h-24" />
    </div>
  );
};

export default Loader;