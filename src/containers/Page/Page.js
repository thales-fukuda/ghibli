import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import CloseMenu from './CloseMenu';

// Blocks
import Header from '../../blocks/Header';
import Home from '../../blocks/Home';
import Menu from '../../blocks/Menu';
import Movie from '../../blocks/Movie';

// Elements
import Title from '../../elements/Title';
import Text from '../../elements/Text';

// Assets
import GhibliLogo from '../../assets/images/logo.svg';
import icMenu from '../../assets/icons/menu.svg';

// Movies image list
import movies_list from '../../movies_list';

class Page extends Component {
  state = { menuStatus: false };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuStatus: !prevState.menuStatus,
    }));
  };

  goToMovie = (movie) => {
    const movieElement = document.getElementById(movie)
    movieElement.scrollIntoView({block: 'start'});
    window.scrollBy(0, '-70');
    this.toggleMenu();
  };

  render() {
    const { menuStatus } = this.state;
    const { data } = this.props;
    return (
      <Container>
        <Header>
          <Header.MenuButton>
            <Header.Icon src={icMenu} alt='menu' onClick={this.toggleMenu} />
          </Header.MenuButton>
        </Header>
        <Menu className={menuStatus ? 'active' : ''}>
          {data.map(item => (
            <Menu.Element key={`el${item.id}`} onClick={() => this.goToMovie(item.id)}>{item.title}</Menu.Element>
          ))}
        </Menu>
        {this.state.menuStatus && <CloseMenu onClick={this.toggleMenu}/>}
        <Home>
          <Home.Image src={GhibliLogo} />
        </Home>
        <Title>What is Studio Ghibli</Title>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in convallis massa, ac
         eleifend nisl. Maecenas mauris nunc, faucibus convallis sapien vitae, mattis rutrum nisl.
        Vestibulum rhoncus nunc sit amet semper elementum. Donec laoreet dui nulla, nec ultrices
         velit luctus in. Fusce venenatis, velit ut iaculis iaculis, mi urna venenatis lacus,
         eget vehicula ante nunc non enim. Nulla vitae quam id est varius interdum id in nibh.
         Suspendisse a interdum turpis.
        </Text>
        {data.map((item, i)=> (
          <Movie key={item.id} id={item.id}>
            <Movie.Image src={movies_list[i].image}/>
            <Movie.Year>{item.release_date}</Movie.Year>
            <Movie.Title>{item.title}</Movie.Title>
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
