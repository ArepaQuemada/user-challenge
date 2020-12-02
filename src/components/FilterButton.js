import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #0081ff;
  padding: 2px;
  margin: 0px 5px 0 5px;
  color: #FFF;
  border-radius: 10px;
`;
/**
 * Little container displayed on top when a city button it's clicked
 * @param {String} filterName 
 */
export default function FilterButton({ filterName }) {
  return <Wrapper id="filter-name">{filterName}</Wrapper>;
}
