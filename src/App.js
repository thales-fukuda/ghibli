import React, { Component } from 'react';
import Api from './Api';

import Movie from './blocks/Movie';

class App extends Component {
  state = { movies: [] }

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
    return (
      <>
        {movies.map(item => (
          <Movie key={item.id}>
            <Movie.Year>{item.release_date}</Movie.Year>
            <Movie.Title color='#FF4757'>{item.title}</Movie.Title>
            <Movie.Text>{item.description}</Movie.Text>
          </Movie>
        ))}
      </>
    );
  }
}

export default App;
