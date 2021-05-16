import React, { Component } from 'react';
import Header from '../components/header/Header';
import RequestBox from '../components/sections/RequestBox';
import ResponseBox from '../components/sections/ResponseBox';
import FetchApiFunc from '../services/FetchApiFunc';

export default class PostGalContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <RequestBox />
        <ResponseBox />
      </div>
    );
  }
}
