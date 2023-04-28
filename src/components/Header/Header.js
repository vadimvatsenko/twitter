import { HeaderStyled, Navigation, NavigationList, NavigationItems, NavLinkStyled } from "./Header.styled";
import Container from "components/Container";
import { BsFillHouseHeartFill } from "react-icons/bs";
import {SiGooglemessages} from 'react-icons/si'

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Navigation>
          <NavigationList>
            <NavigationItems>
              <NavLinkStyled to='/'>
                <BsFillHouseHeartFill style={{marginRight: 10}}/>
                HOME</NavLinkStyled>
            </NavigationItems>
            <NavigationItems>
              <NavLinkStyled to='tweets'>
                <SiGooglemessages style={{marginRight: 10}}/>
                TWEETS</NavLinkStyled>
            </NavigationItems>
          </NavigationList>
        </Navigation>
      </Container>
    </HeaderStyled>
  );
}
