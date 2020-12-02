import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #0081ff;
  padding: 2px;
  margin: 0px 5px 0 5px;
  color: #FFF;
  border-radius: 10px;
`;

export default function FilterButton({ filterName }) {
  return <Wrapper id="filter-name">{filterName}</Wrapper>;
}
