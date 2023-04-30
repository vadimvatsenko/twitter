import { BsFillArrowLeftSquareFill } from 'react-icons/bs'
import { BackBtn } from './GoBackBtn.styled';

export const GoBackBtn = () => {
  return (
    <BackBtn to="/"><BsFillArrowLeftSquareFill style={{marginRight: 10}} />Go Back</BackBtn>
  );
}
