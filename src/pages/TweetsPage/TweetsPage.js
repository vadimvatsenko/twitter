import UserCard from "components/UserCard";
import { TweetsList, TweetsContainer } from "./TweetsPage.styled";

export const TweetsPage = () => {
  return (
    <TweetsContainer>
      <TweetsList>
        <UserCard />
      </TweetsList>
    </TweetsContainer>
  );
}
