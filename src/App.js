import React, { Component } from 'react';
import Api from './Api';

import Page from './containers/Page';

class App extends Component {
  state = { movies: [] };

  componentDidMount = async () => {
    const response = await this.load();
    if (response && response.status === 200) {
      this.setState({
        movies: response.data,
      });
    }
    console.log(this.state.movies);
  };

  load = async () => {
    try {
      return await Api.load();
    } catch (error) {
      return error;
    }
  };

  render() {
    const { movies } = this.state;
    return (<Page data={movies} />);
  }
}

export default App;
