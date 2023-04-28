import { TweetsItems, LogoStyled, LineUser, WrapUser, ImgUser, Tweets, Followers, Button } from "./UserCard.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTweets } from "redux/selectors";
import { fetchTweets } from "redux/operations";


export const UserCard = () => {
  const tweets = useSelector(getTweets);
  const dispatch = useDispatch();
  const [displayedTweets, setDisplayedTweets] = useState(3);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const displayFollowers = (value) => {
    if (value >= 1000) {
      const newValue = value.toLocaleString("en-US", { minimumFractionDigits: 0 });
      return newValue;
    }
    return value;
  };

  const handleLoadMore = () => {
    setDisplayedTweets((prevState) => prevState + 3);
    window.scrollTo(0,document.body.scrollHeight);
  };

  return (
    <>
      {tweets.slice(0, displayedTweets).map(({ id, avatar, tweets, followers }) => (
        <TweetsItems key={id}>
          <LogoStyled />
          <LineUser>
            <WrapUser>
              <ImgUser src={avatar} alt="userAvatar" width={80} />
            </WrapUser>
          </LineUser>
          <Tweets>{tweets} TWEETS</Tweets>
          <Followers>{displayFollowers(followers)} Followers</Followers>
          <Button>Follow</Button>
        </TweetsItems>
      ))}
      {tweets.length > displayedTweets && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
    </>
  );
};
