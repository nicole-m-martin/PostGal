import React from 'react';
import PropTypes from 'prop-types';
import style from './styles/RequestBox.module.css';

function RequestBox({ url, method, handleAllChange, handleSubmitClick }) {
  return (
    <main className={style.mainSection}>
      <section className={style.urlInput}>
        <form className={style.formBox} onSubmit={handleSubmitClick}>
          <input
            className={style.apiInput}
            placeholder="Enter API url here..."
            name="url"
            type="url"
            value={url}
            onChange={handleAllChange}
          />
          <section className={style.radioBtnsContainer}>
            <label className={style.methodName} htmlFor="get">
              GET
              <input
                type="radio"
                name="method"
                id="get"
                value="get"
                onChange={handleAllChange}
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
                onChange={handleAllChange}
              />
            </label>
            <label className={style.methodName} htmlFor="post">
              POST
              <input
                type="radio"
                name="method"
                id="post"
                value="post"
                checked={method === 'post'}
                onChange={handleAllChange}
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
                onChange={handleAllChange}
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
              name="json"
              value="json"
              onChange={handleAllChange}
            ></textarea>
          </section>
        </form>
      </section>
    </main>
  );
}

RequestBox.propTypes = {
  url: PropTypes.string,
  method: PropTypes.string.isRequired,
  json: PropTypes.string.isRequired,
};

export default RequestBox;
