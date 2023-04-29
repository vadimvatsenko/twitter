import UserCard from "components/UserCard";
import LoadMoreBtn  from "components/LoadMoreBtn/";
import { TweetsPageSection, TweetsList, TweetsContainer } from "./TweetsPage.styled";
import { isLoadingTweets } from "redux/selectors";
import { useSelector } from "react-redux";

import Loader from "components/Loader";

export const TweetsPage = () => {
  const isLoading = useSelector(isLoadingTweets);


  return (
    <TweetsPageSection>
      <TweetsContainer>
        <TweetsList>
          <UserCard />
        </TweetsList>
      </TweetsContainer>
      {isLoading ? <Loader /> : <LoadMoreBtn />}

    </TweetsPageSection>
  );
}
