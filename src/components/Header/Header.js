import { HeaderStyled, HeaderContainer, Navigation, NavigationList, NavigationItems, NavLinkStyled } from "./Header.styled";
import { BsFillHouseHeartFill } from "react-icons/bs";
import {SiGooglemessages} from 'react-icons/si'

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderContainer style={{paddingBottom: -15}}>
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
      </HeaderContainer>
    </HeaderStyled>
  );
}
