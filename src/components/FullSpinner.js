import { SpringSpinner } from 'react-epic-spinners';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
`;

export default function FullSpinner() {
  return (
    <Container>
      <SpringSpinner color="#000" />
    </Container>
  );
}
