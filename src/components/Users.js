import { isPrime } from '../utils/utils';
import styled from 'styled-components';
import UserCard from './UserCard';

const UsersWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

/**
 * Wrapper component to map users
 * @param {Array} users 
 */
export default function Users({users}) {
 
  return (
    <UsersWrapper>
      {users.map((u) => (
        <UserCard
          key={u.id}
          user={u}
          color={isPrime(u.id) ? 'primary' : 'secondary'}
        />
      ))}
    </UsersWrapper>
  );
}
