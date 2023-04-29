import { TweetsItems, LogoStyled, LineUser, WrapUser, ImgUser, Tweets, Followers } from "./UserCard.styled";
import { Button } from "../LoadMoreBtn/LoadMoreBtn.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getTweets, isLoadingTweets, getStatusFilter } from "redux/selectors";
import { statusFilters } from "redux/constants";
import { fetchTweets, addFollowers } from "redux/operations";

const getVisibleTweets = (tweets, statusFilter, follows) => {
  switch (statusFilter) {
    case statusFilters.follow:
      return tweets.filter(tweet => !follows[tweet.id]);
    case statusFilters.followings:
      return tweets.filter(tweet => follows[tweet.id]);
    default:
      return tweets;
  }
};

export const UserCard = () => {
  const tweets = useSelector(getTweets);
  const isLoading = useSelector(isLoadingTweets);
  const statusFilter = useSelector(getStatusFilter);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [follows, setFollows] = useState(() => {
    const savedFollows = localStorage.getItem("follows");
    return savedFollows ? JSON.parse(savedFollows) : {};
  });

  const visibleTweets = getVisibleTweets(tweets, statusFilter, follows);

  useEffect(() => {
    dispatch(fetchTweets({ page, limit }));
  }, [dispatch, page, limit]);

  useEffect(() => {
    localStorage.setItem("follows", JSON.stringify(follows));
  }, [follows]);

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

  const handleFollow = (id, followers, avatar, tweets) => {
    // dispatch(addFollowers({ id, followers: followers + 1, avatar, tweets }));
    setFollows((prevFollows) => ({
      ...prevFollows,
      [id]: !prevFollows[id],
    }));
  };

  return (
    <>

      {visibleTweets.map(({ id, avatar, tweets, followers }) => (
        <TweetsItems
          key={id}>
          <LogoStyled />
          <LineUser>
            <WrapUser>
              <ImgUser
                src={avatar}
                alt="userAvatar"
                width={80}
              />
            </WrapUser>
          </LineUser>
          <Tweets>{tweets} TWEETS</Tweets>
          <Followers>{displayFollowers(followers)} Followers</Followers>

          <Button
            type='button'
            style={{ backgroundColor: follows[id] ? '#5CD3A8' : '#EBD8FF' }}
            onClick={() => handleFollow(id, followers, avatar, tweets)}>
            {follows[id] ? "Following" : "Follow"}
          </Button>
        </TweetsItems>
      ))}
      {/* {isLoading ? <Loader /> : <Button onClick={handleLoadMore}>Load More</Button>} */}

    </>
  );
};
