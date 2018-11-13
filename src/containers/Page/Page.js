import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';

// Blocks
import Header from '../../blocks/Header';
import Home from '../../blocks/Home';
import Movie from '../../blocks/Movie';

// Assets
import GhibliLogo from '../../assets/images/logo.svg';
import icMenu from '../../assets/icons/menu.svg';

const Page = (props) => {
  const { data } = props;
  return (
    <Container>
      <Header>
        <Header.MenuButton>
          <Header.Icon src={icMenu} alt='menu' />
        </Header.MenuButton>
      </Header>
      <Home>
        <Home.Image src={GhibliLogo} />
      </Home>
      {data.map(item => (
        <Movie key={item.id}>
          <Movie.Year>{item.release_date}</Movie.Year>
          <Movie.Title color='#FF4757'>{item.title}</Movie.Title>
          <Movie.Text>{item.description}</Movie.Text>
        </Movie>
      ))}
    </Container>
  );
};

Page.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
};

export default Page;
