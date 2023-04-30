import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const BackBtn = styled(NavLink)`
  position: absolute;
  left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  color: #373737;
  background: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  transition: background 250ms linear;
  z-index: 5;
  &:hover, &:focus {
    background: #5CD3A8;
  }
`;

