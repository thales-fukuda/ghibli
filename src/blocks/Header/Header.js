import styled from 'styled-components';

import MenuButton from './MenuButton';

import Icon from '../../elements/Icon';

const Header = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  background-color: #F1F2F6;
  display: flex;
  align-items: center;
`;

Header.Icon = Icon;
Header.MenuButton = MenuButton;

export default Header;
