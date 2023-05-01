import styled from 'styled-components';
import bgImage from '../../images/bgImage.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';

export const TweetsItems = styled.li`
  position: relative;
  padding-top: 20px;
  padding-bottom: 36px;
  width: 380px;
  height: 460px;
  background: url(${bgImage}), linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%) ;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: center top 20px, center;
  cursor: pointer;
  transition: transform 250ms linear;
  &:hover, &:focus {
    transform: scale(1.01)
  }
`;

export const LogoStyled = styled(Logo)`
  margin-left: 20px ;
  width: 76px;
`;

export const LineUser = styled.div`
  position: relative;
  margin-top:172px;
  height: 8px;
  width: 100%;
  background: #EBD8FF;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`;

export const WrapUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 8px solid #EBD8FF;
  background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;
  position: absolute;
  right: 50%;
  top: -40px;
  transform: translateX(50%);
  overflow: hidden;

`;

export const ImgUser = styled.img`
`;

export const Tweets = styled.p`
  margin-top: 62px;
  color: #EBD8FF;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

export const Followers = styled.p`
  margin-top: 16px;
  color: #EBD8FF;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;



