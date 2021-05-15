import React from 'react';
import PropTypes from 'prop-types';
import style from './Header.module.css';
import postgal from '../../img/postgal.png';

function Header({ title }) {
  return (
    <nav className={style.headerBox}>
      <img className={style.postgal} alt="postgal icon" src={postgal} />
      <h1 className={style.title}>{title}</h1>
    </nav>
  );
}

Header.defaultProps = {
  title: 'PostGal',
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
