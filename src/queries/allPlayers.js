import { gql } from 'react-apollo';

export default gql`
  query {
    allPlayers {
      nodes {
        id
        fullName
      }
    }
  }
`;
