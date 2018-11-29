import styled from 'styled-components';

import Element from './Element';

const Menu = styled.nav`
  position: fixed;
  top: 70px;
  left: 0;
  width: 80%;
  height: 100%;
  background-color: #2F3542;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  transform: translate3d(-100%, 0, 0);
  transition: .3s ease transform;
  &.active{
    transform: translate3d(0, 0, 0);
    z-index: 3;
  }
`;

Menu.Element = Element;

export default Menu;
