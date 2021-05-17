import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import style from './styles/ResponseBox.module.css';

function ResponseBox({ json_object }) {
  return (
    <main aria-label="main" className={style.mainBox}>
      <section className={style.jsonObjContainer}>
        <ReactJson src={json_object} theme="hopscotch" />
      </section>
    </main>
  );
}

ResponseBox.propTypes = {
  json_object: PropTypes.any,
};

export default ResponseBox;
