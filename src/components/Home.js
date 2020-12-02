import { useState, useEffect, useContext } from 'react';
import { FiltersContext, initialStateFilters } from '../context/FilterContext';
import { checkFilters } from '../utils/utils';
import { get, uris } from '../api/fetch';
import styled from 'styled-components';
import Form from './Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Users';
import NotFound from './NotFound';
import FilterButton from './FilterButton';
import FullSpinner from './FullSpinner';

const FiltersContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const FiltersWrapper = styled.div`
  position: absolute;
  top: -3.5rem;
  font-size: 13px;
  margin: auto;
  border-radius: 20px;
  background-color: #ffffff;
  width: 95%;
  max-width: 750px;
  display: flex;
  padding: 2rem;
  overflow: auto;
`;

const initialState = [];

export default function Home() {
  const [ users, setusers ] = useState(initialState);
  const { filters, setfilters } = useContext(FiltersContext);
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data } = await get(uris.jsonPlaceholder);
        setusers(data);
      } catch(error) {
        console.log(error)
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (filters.cities.length > 0) {
      toast.success('Added filter!');
    }
  }, [filters.cities]);

  const clearFilters = () => {
    setfilters(initialStateFilters);
    toast.warning('Removed filters!');
  };

  const filterUsers = checkFilters(filters, users);
  
  const checkNotFound = () => filterUsers.length === 0;

  if (loading) {
    return <FullSpinner />
  }

  return (
    <>
      <ToastContainer />
      <FiltersContainer>
        <FiltersWrapper>
          {filters.cities.length > 0 ? (
            filters.cities.map((c, index) => <FilterButton key={index} filterName={c}/>)
          ) : (
            <div>City filters here</div>
          )}
        </FiltersWrapper>
      </FiltersContainer>
      <Form clearFilters={clearFilters} />
      {checkNotFound() ? <NotFound /> : <Users users={filterUsers} />}
    </>
  );
}
