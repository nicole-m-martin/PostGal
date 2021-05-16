import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/RequestBox.module.css';

function RequestBox({ api, method }) {
  return (
    <main className={style.mainSection}>
      <form className={style.formBox}>
        <section className={style.urlInput}>
          <input
            className={style.apiInput}
            placeholder="Enter API url here..."
            name="api"
            value={api}
          />
        </section>
        <section className={style.radioBtnsContainer}>
          <label className={style.methodName} htmlFor="get">
            GET
            <input
              type="radio"
              name="method"
              id="get"
              value="get"
              checked={method === 'get'}
              defaultChecked
            />
          </label>
          <label className={style.methodName} htmlFor="put">
            PUT
            <input
              type="radio"
              name="method"
              id="put"
              value="put"
              checked={method === 'put'}
            />
          </label>
          <label className={style.methodName} htmlFor="post">
            POST
            <input
              name="method"
              id="post"
              value="post"
              type="radio"
              checked={method === 'post'}
            />
          </label>
          <label className={style.methodName} htmlFor="delete">
            DELETE
            <input
              type="radio"
              name="method"
              id="delete"
              value="delete"
              checked={method === 'delete'}
            />
          </label>
          <button className={style.btn} type="submit">
            Go!
          </button>
        </section>
        <section className={style.textBoxContainer}>
          <textarea
            className={style.textArea}
            placeholder="enter JSON here"
          ></textarea>
        </section>
      </form>
    </main>
  );
}

RequestBox.propTypes = {
  api: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default RequestBox;
