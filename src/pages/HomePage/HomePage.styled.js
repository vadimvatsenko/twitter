import styled from 'styled-components';
import mainBg from '../../images/homeBG.svg'

export const HomePageSection = styled.section`
  background-image: url(${mainBg});
  background-size: cover;
  background-repeat: no-repeat;
  height: calc(100vh - 68px * 2);
`
