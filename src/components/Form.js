import { useContext } from 'react';
import { FiltersContext } from '../context/FilterContext';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-top: 3rem;
`;

const InputWrapper = styled.div`
  margin-auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  display: block;
  border-radius: 1rem;
  outline: none;
  padding: 1rem;
  width: 100%;
  max-width: 350px;
  margin-bottom: 1rem;
  border: 2px solid #cccccc;
  &:hover {
    border: 2px solid #45c39d;
  }
  &:focus {
    border: 2px solid #45c39d;
  }
`;

const Button = styled.button`
  cursor: pointer;
  color: #fff;
  display: block;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #d73d42;
  border: none;
  outline: none;
  &:hover {
    opacity: 0.7;
  }
`;

export default function Form({ clearFilters }) {
  const { filters, setfilters } = useContext(FiltersContext);

  const handleChange = (e) => {
    setfilters((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = () => clearFilters();

  return (
    <InputContainer>
      <InputWrapper>
        <Input
          type="text"
          name="name"
          placeholder="Filter by name"
          onChange={handleChange}
          className="transition"
          value={filters.name}
        ></Input>
        <Input
          type="text"
          name="email"
          placeholder="Filter by email"
          onChange={handleChange}
          className="transition"
          value={filters.email}
        ></Input>
        <Button
          className="transition"
          name="clear-filters"
          onClick={handleClick}
        >
          Clear Filters
        </Button>
      </InputWrapper>
    </InputContainer>
  );
}
