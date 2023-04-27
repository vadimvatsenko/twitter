import { Wrap, Section, LogoStyled, LineUser, WrapUser, ImgUser, Tweets, Followers, Button } from "./WellcomePage.styled"

import avatar from '../../images/avatar.png'

export const WellcomePage = () => {
  return (
    <Wrap>
      <Section>
        <LogoStyled/>
        <LineUser>
          <WrapUser>
            <ImgUser src={avatar} alt='userAvatar' width={80}/>
          </WrapUser>
        </LineUser>
        <Tweets>777 TWEETS</Tweets>
        <Followers>100,500 Followers</Followers>
        <Button>Follow</Button>
      </Section>
    </Wrap>
  );
}
