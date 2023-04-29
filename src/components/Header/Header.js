import { useLocation } from "react-router-dom";
import { HeaderStyled, HeaderContainer, HeaderContentWrap, Navigation, NavigationList, NavigationItems, NavLinkStyled } from "./Header.styled";
import Filter from "components/Filter";
import { BsFillHouseHeartFill } from "react-icons/bs";
import {SiGooglemessages} from 'react-icons/si'

export const Header = () => {
  const location = useLocation();
  return (
    <HeaderStyled>
      <HeaderContainer style={{ paddingBottom: -15 }}>
        <HeaderContentWrap>
          <Navigation>
            <NavigationList>
              <NavigationItems>
                <NavLinkStyled to='/'>
                  <BsFillHouseHeartFill style={{ marginRight: 10 }} />
                  HOME</NavLinkStyled>
              </NavigationItems>
              <NavigationItems>
                <NavLinkStyled to='tweets'>
                  <SiGooglemessages style={{ marginRight: 10 }} />
                  TWEETS</NavLinkStyled>
              </NavigationItems>
            </NavigationList>
          </Navigation>
          {location.pathname === '/tweets' && <Filter />}
        </HeaderContentWrap>
      </HeaderContainer>
    </HeaderStyled>
  );
}
