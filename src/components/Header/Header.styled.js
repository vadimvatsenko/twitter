import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import goItLogo from '../../images/logo.svg'

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  min-height: 68px;
  background: url(${goItLogo}), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const HeaderContainer = styled.div`
  display: block;
  margin: 0 auto;
  width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
`

export const Navigation = styled.nav`
`;

export const NavigationList = styled.ul`
  display: flex;
`;

export const NavigationItems = styled.li`
  &:not(:first-child) {
    margin-left: 30px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px 40px;
  background: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;
  font-size: 18px;
  font-weight: 600;
  transition: background 250ms linear;
  &:hover, &:focus {
    background: #5CD3A8;
  }
  &.active {
    background: #5CD3A8;
  }
`;



