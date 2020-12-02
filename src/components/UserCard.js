import { useContext } from 'react';
import { FiltersContext } from '../context/FilterContext';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 100%;
  max-width: 350px;
  margin: 0 0.5rem 3rem 0.5rem;
  @media screen and (max-width: 750px) {
    max-width: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

const CardHead = styled.div`
  padding: 0.7rem;
  background-color: ${(props) =>
    props.color === 'primary' ? '#1ABFEF;' : '#E66BA0;'}
  text-align: center;
  border-radius: 10px 10px 0px 0px;
  color: #f2f2f2;
`;

const Phrase = styled.p`
  font-style: italic;
`;

const IconWrapper = styled.div`
  margin-top: -1.7rem;
`;

const CardBody = styled.div`
  background-color: #fff;
`;

const Box = styled.div`
  width: 100%;
  padding: 1rem;
  font-size: 15px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
`;

const Info = styled.span`
  margin-left: 0.5rem;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 10px;
  margin-left: 1rem;
  color: #f2f2f2f2;
  background-color: #0081ff;
  padding: 1rem;
  border: none;
  &:hover {
    opacity: 0.7;
  }
`;

export default function UserCard({
  color,
  user: {
    name,
    username,
    email,
    address: { city, street, suite } = {},
    phone,
    company: { name: companyName, catchPhrase },
  },
}) {
  const { setfilters } = useContext(FiltersContext);

  const handleClick = (e) =>
    setfilters((prev) => {
      return {
        ...prev,
        cities: [...new Set([...prev.cities, e.target.value])],
      };
    });

  return (
    <CardContainer className="transition">
      <CardHead color={color}>
        <IconWrapper>
          <ion-icon name="person-circle-outline" size="large"></ion-icon>
        </IconWrapper>
        <div>
          <h3>{name}</h3>
          <Phrase>{catchPhrase}</Phrase>
        </div>
      </CardHead>
      <CardBody>
        <Box>
          <Section>
            <ion-icon name="mail-outline"></ion-icon>
            <Info>{email}</Info>
          </Section>
          <Section>
            <ion-icon name="call-outline"></ion-icon>
            <Info>{phone}</Info>
          </Section>
          <Section>
            <ion-icon name="map-outline"></ion-icon>
            <Info>{`${street} - ${suite}`}</Info>
          </Section>
          <Section>
            <ion-icon name="person-outline"></ion-icon>
            <Info>{username}</Info>
          </Section>
          <Section>
            <ion-icon name="business-outline"></ion-icon>
            <Info>{companyName}</Info>
          </Section>
          <Section>
            <ion-icon name="map-outline"></ion-icon>
            <Button
              className="transition"
              name="add-filter-button"
              value={city}
              onClick={handleClick}
            >
              {city}
            </Button>
          </Section>
        </Box>
      </CardBody>
    </CardContainer>
  );
}
