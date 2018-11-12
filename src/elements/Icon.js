import styled from 'styled-components';

const Icon = styled.img`
  background-image: url(${props => props.iconImage});
  height: 52px;
  width: auto;
`;

export default Icon;
