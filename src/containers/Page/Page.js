import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

// Blocks
import Header from '../../blocks/Header';
import Home from '../../blocks/Home';
import Movie from '../../blocks/Movie';

// Elements

import Title from '../../elements/Title';
import Text from '../../elements/Text';

// Assets
import GhibliLogo from '../../assets/images/logo.svg';
import icMenu from '../../assets/icons/menu.svg';

class Page extends Component {
  state = { menuStatus: false };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuStatus: !prevState.menuStatus,
    }));
  };

  render() {
    const { data } = this.props;
    return (
      <Container>
        <Header>
          <Header.MenuButton>
            <Header.Icon src={icMenu} alt='menu' onClick={this.toggleMenu} />
          </Header.MenuButton>
        </Header>
        <Home>
          <Home.Image src={GhibliLogo} />
        </Home>
        <Title>What is Studio Ghibli</Title>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in convallis massa, ac eleifend nisl. Maecenas mauris nunc, faucibus convallis sapien vitae, mattis rutrum nisl. Vestibulum rhoncus nunc sit amet semper elementum. Donec laoreet dui nulla, nec ultrices velit luctus in. Fusce venenatis, velit ut iaculis iaculis, mi urna venenatis lacus, eget vehicula ante nunc non enim. Nulla vitae quam id est varius interdum id in nibh. Suspendisse a interdum turpis.</Text>
        {data.map(item => (
          <Movie key={item.id}>
            <Movie.Year>{item.release_date}</Movie.Year>
            <Movie.Title color='#FF4757'>{item.title}</Movie.Title>
            <Movie.Text>{item.description}</Movie.Text>
          </Movie>
        ))}
      </Container>
    );
  }
}

Page.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Page;
