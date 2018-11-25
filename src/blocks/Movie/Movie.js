import styled from 'styled-components';

import Image from './Image';
import Text from '../../elements/Text';
import Title from '../../elements/Title';
import Year from './Year';

const Movie = styled.article`
  margin: 35px 0;
`;

Movie.Image = Image;
Movie.Text = Text;
Movie.Title = Title;
Movie.Year = Year;

export default Movie;
