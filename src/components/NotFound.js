import styled from 'styled-components';
import notFound from '../images/page-not-found-4.png';

const Wrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const ImgWrapper = styled.div`
  width: 100%;
  max-width: 15rem;
  margin: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Text = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export default function NotFound() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Image src={notFound} id="not-found-img"></Image>
      </ImgWrapper>
      <Text id="not-found-text">User not found</Text>
    </Wrapper>
  );
}
