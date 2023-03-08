import React from 'react';
import gif from '../../assets/images/preloader.gif';
import s from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={gif} alt="loading" />
    </div>
  );
};

export default Preloader;
