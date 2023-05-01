import { Button } from "./LoadMoreBtn.styled";

export const LoadMoreBtn = ({handleLoadMore}) => {
  return (
    <Button
      type="button"
      onClick={handleLoadMore}>
      Load More
    </Button>
  );
}
