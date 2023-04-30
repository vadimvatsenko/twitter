import { TweetsItems, LogoStyled, LineUser, WrapUser, ImgUser, Tweets, Followers } from "./UserCard.styled";
import { Button } from "../LoadMoreBtn/LoadMoreBtn.styled";
import { statusFilters } from "redux/constants";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getStatusFilter, getTweets } from "redux/selectors";
import { addFollowers } from "redux/operations";


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

export const UserCard = ({page, limit}) => {
  const dispatch = useDispatch();
  const tweets = useSelector(getTweets);

  const [follows, setFollows] = useState(() => {
    const savedFollows = localStorage.getItem("follows");
    return savedFollows ? JSON.parse(savedFollows) : {};
  });

  useEffect(() => {
    localStorage.setItem("follows", JSON.stringify(follows));
    
  }, [follows]);


  const statusFilter = useSelector(getStatusFilter);
  const visibleTweets = getVisibleTweets(tweets, statusFilter, follows);

  const handleFollow = (id, followers, avatar, tweets) => {
    if (!follows[id]) {
      dispatch(addFollowers({ id, followers: followers + 1, avatar, tweets }));
    } if (follows[id]) {
      dispatch(addFollowers({ id, followers: followers - 1, avatar, tweets }));

    }
    setFollows((prevFollows) => ({
      ...prevFollows,
      [id]: !prevFollows[id],
    }));
  };

  const displayFollowers = (value) => {
    if (value >= 1000) {
      const newValue = value.toLocaleString("en-US", { minimumFractionDigits: 0 });
      return newValue;
    }
    return value;
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
    </>
  );
};
