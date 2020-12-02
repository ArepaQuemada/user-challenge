import styled from 'styled-components';
import Header from './components/Header';
import Home from './components/Home';
import { FiltersProvider } from './context/FilterContext';

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.main`
  padding: 1rem;
`;
/**
 * App component
 */
export default function App() {
  return (
    <Container>
      <Header />
      <FiltersProvider>
        <Wrapper>
          <Home />
        </Wrapper>
      </FiltersProvider>
    </Container>
  );
}
