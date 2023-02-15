import React from 'react';
import s from './style.module.css';

const Header = ({logo, alt}) => {
  return (
    <header className={s.header}>
      <figure>
        <img src={logo} alt={alt} />
      </figure>
    </header>
  )
}

export default Header