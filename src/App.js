import React, { Component } from 'react';
import Api from './Api';

class App extends Component {
  componentDidMount = () => {
    this.load();
  };

  load = async () => {
    const response = await Api.load();
    if(response && response.status === 200){
      response.data.forEach(e => console.table(e));
    }
  };

  render() {
    return (
      <div />
    );
  };
};

export default App;