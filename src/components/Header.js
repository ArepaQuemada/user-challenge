import styled from "styled-components"
import banner from '../images/pattern2.svg';

const ImgContainer = styled.header`
  height: 8rem;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  fill: blue;
`;

export default function Header() {
  return (
    <ImgContainer>
        <Banner src={banner} />
    </ImgContainer>
  )
}
