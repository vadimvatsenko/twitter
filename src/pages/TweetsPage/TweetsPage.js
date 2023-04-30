import UserCard from "components/UserCard";
import LoadMoreBtn  from "components/LoadMoreBtn/";
import { TweetsPageSection, TweetsList, TweetsContainer } from "./TweetsPage.styled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { isLoadingTweets } from "redux/selectors";
import { fetchTweets } from "redux/operations";
import { getTweets } from "redux/selectors";

import Loader from "components/Loader";

export const TweetsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingTweets);
  const tweets = useSelector(getTweets);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

  useEffect(() => {
    dispatch(fetchTweets({ page, limit }));
  }, [dispatch, page, limit, tweets]);

  const handleLoadMore = () => {
    setPage(page);
    setLimit(prevState => prevState + 3);
  };

  return (
    <TweetsPageSection>
      <TweetsContainer>
        <TweetsList>
          <UserCard
            page={page}
            limit={limit}
          />
        </TweetsList>
      </TweetsContainer>
      {isLoading ?
        <Loader style={{margin: '0 auto'}} /> :
        <LoadMoreBtn handleLoadMore={handleLoadMore} />}
    </TweetsPageSection>
  );
}
