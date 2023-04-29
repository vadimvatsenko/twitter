import styled from 'styled-components';

export const TweetsPageSection = styled.section`
  padding: 15px;
  height: calc(100vh - 68px * 2);
   overflow: scroll;
`

export const TweetsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TweetsList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 1200px;
  gap: 15px;
`;
