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
          <label className={style.methodName} htmlFor="GET" defaultChecked>
            GET
            <input
              name="method"
              id="GET"
              value="GET"
              type="radio"
              checked={method === 'GET'}
            />
          </label>
          <label className={style.methodName} htmlFor="PUT">
            PUT
            <input
              name="method"
              id="PUT"
              value="PUT"
              type="radio"
              checked={method === 'PUT'}
            />
          </label>
          <label className={style.methodName} htmlFor="POST">
            POST
            <input
              name="method"
              id="POST"
              value="POST"
              type="radio"
              checked={method === 'POST'}
            />
          </label>
          <label className={style.methodName} htmlFor="DELETE">
            DELETE
            <input
              name="method"
              id="DELETE"
              value="DELETE"
              type="radio"
              checked={method === 'DELETE'}
            />
          </label>
          <button className={style.btn} type="submit">
            Go!
          </button>
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
