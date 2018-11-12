import React from 'react';
import PropTypes from 'prop-types';

import Container from './Container';
import MenuButton from './MenuButton';

import Icon from '../../elements/Icon';
import Movie from '../../blocks/Movie';

import icMenu from '../../assets/icons/menu.svg';

const Page = (props) => {
  const { data } = props;
  return (
    <Container>
      <MenuButton>
        <Icon src={icMenu} alt='menu' />
      </MenuButton>
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
