import { TweetsItems, LogoStyled, LineUser, WrapUser, ImgUser, Tweets, Followers, Button } from "./UserCard.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTweets, isLoadingTweets } from "redux/selectors";
import { fetchTweets } from "redux/operations";

export const UserCard = () => {
  const tweets = useSelector(getTweets);
  const isLoading = useSelector(isLoadingTweets)
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [follow, setFollow] = useState(false)
  const [showLoadMore, setShowLoadMore] = useState(false);

  console.log(isLoadingTweets)
  console.log(getTweets)

  useEffect(() => {
    dispatch(fetchTweets({ page, limit }));
  }, [dispatch, page, limit]);

  const displayFollowers = (value) => {
    if (value >= 1000) {
      const newValue = value.toLocaleString("en-US", { minimumFractionDigits: 0 });
      return newValue;
    }
    return value;
  };

  const handleLoadMore = () => {
    setPage(page);
    setLimit(limit + 3);
  };

  const handleFollow = () => {
    setFollow(!follow)
  }

  return (
    <>
      {isLoading && <div>Load...</div>}
      {tweets.map(({ id, avatar, tweets, followers }) => (
        <TweetsItems key={id}>
          <LogoStyled />
          <LineUser>
            <WrapUser>
              <ImgUser src={avatar} alt="userAvatar" width={80} />
            </WrapUser>
          </LineUser>
          <Tweets>{tweets} TWEETS</Tweets>
          <Followers>{displayFollowers(followers)} Followers</Followers>

          <Button onClick={handleFollow}>{follow? "Following": "Follow" }</Button>
        </TweetsItems>
      ))}
      <Button onClick={handleLoadMore}>Load More</Button>
    </>
  );
};
