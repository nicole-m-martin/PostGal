import React, { Component } from 'react';
import Header from '../components/header/Header';
import RequestBox from '../components/sections/RequestBox';
import ResponseBox from '../components/sections/ResponseBox';
import fetchApiFunc from '../services/FetchApiFunc';

export default class PostGalContainer extends Component {
  state = {
    url: '',
    method: '',
    json: '',
    res: [],
  };

  // used dynamic update with [target.name] to have multiple inputs with different names and one OnChange handler

  handleAllChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmitClick = async (event) => {
    event.preventDefault();
    const { url, method, json } = this.state;
    let results;
    results = await fetchApiFunc(url, method, json);

    this.setState({ results });
  };

  render() {
    const { url, json, method, res } = this.state;

    return (
      <div>
        <Header />
        <RequestBox
          url={url}
          json={json}
          method={method}
          handleAllChange={this.handleAllChange}
          handleSubmitClick={this.handleSubmitClick}
        />
        <ResponseBox res={res} />
      </div>
    );
  }
}
